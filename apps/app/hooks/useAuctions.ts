import useSWR from "swr";
import type { SWRConfiguration } from "swr";
import { useSystem } from "@app/hooks/useSystem";
import { Auction } from "@app/types/auction";
import { formatEtherWithDecimals } from "@app/utils";

type FetchAuctionsResponse = {
  auctions: Auction[];
};

function transformAuctions(auctions: Auction[], blockchainTime: () => number): Auction[] {
  return auctions.map((auction) => {
    const hasEnded = Number(auction.endTime) > 0 && blockchainTime() > Number(auction.endTime);

    return {
      ...auction,
      id: Number(auction.id),
      tokenAuctionNumber: Number(auction.tokenAuctionNumber),
      startTime: Number(auction.startTime),
      endTime: Number(auction.endTime),
      ended: hasEnded,
      reservePrice: BigInt(auction.reservePrice),
      amount: BigInt(auction.amount),
      amountDisplay: formatEtherWithDecimals(auction.amount, 5),
      bids: auction.bids.map((bid) => ({
        ...bid,
        blockTimestamp: Number(bid.blockTimestamp),
        amount: BigInt(bid.amount),
        amountDisplay: formatEtherWithDecimals(bid.amount, 5),
      })),
    };
  });
}

export function useAuctions({
  pageSize = 20,
  skip = 0,
  orderBy = "endTime",
  filter = {},
  config = {},
}: {
  pageSize?: number;
  skip?: number;
  orderBy?: string;
  filter?: any;
  config?: SWRConfiguration;
}) {
  const { blockchainTime } = useSystem();
  const { data, error, mutate } = useSWR<FetchAuctionsResponse>(
    [
      `query auctions($filter: Auction_filter, $first: Int!, $skip: Int!, $orderBy: String!) {
        auctions: auctions(
          first: $first
          skip: $skip
          orderBy: $orderBy
          orderDirection: desc
          where: $filter
        ) {
          id
          tokenAuctionNumber
          startTime
          endTime
          extended
          settled
          reservePrice
          amount
          bidder { id }
          bids {
            id
            blockTimestamp
            amount
            bidder { id }
          }
          tag {
            id
            timestamp
            machineName
            display
            owner { id }
            relayer { id name }
            creator { id }
          }
        }
      }`,
      {
        skip,
        first: pageSize,
        orderBy,
        filter,
      },
    ],
    config,
  );

  const transformedAuctions = data ? transformAuctions(data.auctions, blockchainTime) : [];

  const { data: nextAuctionsData } = useSWR(
    [
      `query nextAuctions($filter: Auction_filter $first: Int!, $skip: Int!, $orderBy: String!) {
        auctions(
          first: $first
          skip: $skip
          orderBy: $orderBy
          orderDirection: desc
          where: $filter
        ) {
          id
        }
      }`,
      {
        skip: skip + pageSize,
        first: pageSize,
        orderBy: orderBy,
        filter: filter,
      },
    ],
    config,
  );

  const handleMutate = (updatedAuctions: Auction[]) =>
    mutate(
      {
        auctions: transformAuctions(updatedAuctions, blockchainTime),
      },
      false,
    );

  return {
    auctions: transformedAuctions,
    nextAuctions: nextAuctionsData?.auctions,
    isLoading: (!error && !data?.auctions) || (!nextAuctionsData && !error),
    isError: error?.statusText,
    mutate: handleMutate,
  };
}
