import WithinTagAuctionDisplay from "@app/components/auction/WithinTagAuctionDisplay";
import { AuctionProvider } from "@app/context/AuctionContext";
import { useEnvironmentContext } from "@app/context/EnvironmentContext";
import { useCtags } from "@app/hooks/useCtags";
import { useCurrentChain } from "@app/hooks/useCurrentChain";
import { useSystem } from "@app/hooks/useSystem";
import Layout from "@app/layouts/default";
import { timestampToString, toEth } from "@app/utils";
import { getChainInfo } from "@app/utils/getChainInfo";
import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Address from "@app/components/Address";
import { CopyAndPaste } from "@app/components/CopyAndPaste";
import { Panel } from "@app/components/Panel";
import { TagGraphic } from "@app/components/TagGraphic";
import { TaggingRecords } from "@app/components/TaggingRecords";
import { Truncate } from "@app/components/Truncate";
import type { TagType } from "@app/types/tag";

const Tag: NextPage = () => {
  const { query } = useRouter();
  const { ownershipTermLength } = useSystem();
  const { network } = useEnvironmentContext();
  const { displayName } = getChainInfo(network);

  const chain = useCurrentChain();
  const { id } = query;
  const { t } = useTranslation("common");
  const [isNotFound, setIsNotFound] = useState(false);

  const { tags, isLoading } = useCtags({
    pageSize: 1,
    skip: 0,
    filter: { machineName: id },
    config: {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      revalidateOnReconnect: false,
      refreshWhenOffline: false,
      refreshWhenHidden: false,
      refreshInterval: 0,
    },
  });

  useEffect(() => {
    if (!isLoading && (!tags || tags.length === 0)) {
      const timer = setTimeout(() => setIsNotFound(true), 5000);
      return () => clearTimeout(timer);
    }
  }, [isLoading, tags]);

  const tag: TagType | null = tags && tags.length > 0 ? tags[0] : null;

  const taggingRecordsFilter = { tags_: { machineName: id } };

  if (isLoading && !isNotFound) {
    return (
      <Layout>
        <div className="col-span-12 flex justify-center items-center h-64">
          <div className="loading loading-spinner loading-lg" />
        </div>
      </Layout>
    );
  }

  if (isNotFound || (!isLoading && !tag)) {
    return (
      <Layout>
        <div className="col-span-12 flex items-center h-64">
          <h2 className="text-2xl text-gray-700">
            Tag <span className="font-bold">#{id}</span> not found on <span className="font-bold">{displayName}</span>{" "}
            chain.
          </h2>
        </div>
      </Layout>
    );
  }

  // At this point, we know tag is not null
  const safeTag = tag as TagType;

  let auctionBlock: React.ReactNode;
  if (safeTag.auctions && safeTag.auctions.length > 0) {
    const auction = safeTag.auctions[safeTag.auctions.length - 1];
    auctionBlock = (
      <AuctionProvider auctionId={Number(auction.id)}>
        <WithinTagAuctionDisplay />
      </AuctionProvider>
    );
  } else {
    auctionBlock = <div>NO AUCTION FOUND</div>;
  }

  return (
    <Layout>
      <section className="col-span-12 xl:col-span-4 flex flex-col gap-y-12  text-sm">
        <TagGraphic tag={safeTag} />
        <Panel title={t("auction")}>
          <div className="p-6">{auctionBlock}</div>
        </Panel>
      </section>
      <section className="col-span-12 xl:col-span-8 flex flex-col gap-y-12 text-sm">
        <Panel title={t("overview")}>
          <div className="grid grid-flow-col grid-cols-2 px-6 py-4 space-x-4 hover:bg-slate-100">
            <div className="font-semibold">{t("id")}</div>
            <div className="flex space-x-1">
              <div className="grid flex-grow md:grid-flow-col justify-end">
                <div className=" ">{Truncate(safeTag.id)}</div>
              </div>
              <CopyAndPaste value={safeTag.id} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 px-6 py-4 md:grid-flow-col hover:bg-slate-100">
            <div className="font-semibold">{t("created")}</div>
            <div className="text-right">
              <div className="">{timestampToString(safeTag.timestamp)}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 px-6 py-4 md:grid-flow-col hover:bg-slate-100">
            <div className="font-semibold">{t("expires")}</div>
            <div className="text-right">
              <div className="">{timestampToString(+safeTag.timestamp + ownershipTermLength)}</div>
            </div>
          </div>

          <div className="grid grid-flow-col grid-cols-2 px-6 py-4 space-x-4 hover:bg-slate-100">
            <div className="font-semibold">{t("relayer")}</div>
            <div className="flex col-span-3 space-x-1">
              <div className="grid flex-grow grid-cols-1 md:grid-flow-col ">
                <div className="overflow-hidden text-right text-ellipsis whitespace-nowrap">
                  <Link href={`/explore/relayers/${safeTag.relayer.id}`} className="link link-primary">
                    {safeTag.relayer.name}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-flow-col grid-cols-2 px-6 py-4 space-x-4 hover:bg-slate-100">
            <div className="font-semibold">{t("creator")}</div>
            <div className="flex space-x-1 justify-end">
              <div className="">
                <Link href={`/creators/${safeTag.creator.id}`} className="link link-primary">
                  <Address address={safeTag.creator.id} ens={safeTag.creator.ens} />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-flow-col grid-cols-2 px-6 py-4 space-x-4 hover:bg-slate-100">
            <div className="font-semibold">{t("owner")}</div>
            <div className="flex space-x-1 justify-end">
              <div className="">
                <Link href={`/owners/${safeTag.owner.id}`} className="link link-primary">
                  <Address address={safeTag.owner.id} ens={safeTag.owner.ens} />
                </Link>
              </div>
            </div>
          </div>
        </Panel>
        <Panel title={t("revenue")}>
          <div className="grid grid-cols-2 gap-4 px-6 py-4 md:grid-flow-col hover:bg-slate-100">
            <div className="font-semibold">{t("tagging-records")}</div>
            <div className="text-right">
              <div className="">{safeTag.tagAppliedInTaggingRecord}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 px-6 py-4 md:grid-flow-col hover:bg-slate-100">
            <div className="font-semibold">{t("creator")}</div>
            <div className="text-right">
              <div className="">
                {toEth(safeTag.creatorRevenue, 8)} {chain?.nativeCurrency.symbol}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 px-6 py-4 md:grid-flow-col hover:bg-slate-100">
            <div className="font-semibold">{t("owner")}</div>
            <div className="text-right">
              <div className="">
                {toEth(safeTag.ownerRevenue, 8)} {chain?.nativeCurrency.symbol}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 px-6 py-4 md:grid-flow-col hover:bg-slate-100">
            <div className="font-semibold">{t("relayer")}</div>
            <div className="text-right">
              <div className="">
                {toEth(safeTag.relayerRevenue, 8)} {chain?.nativeCurrency.symbol}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 px-6 py-4 md:grid-flow-col hover:bg-slate-100">
            <div className="font-semibold">{t("protocol")}</div>
            <div className="text-right">
              <div className="">
                {toEth(safeTag.protocolRevenue, 8)} {chain?.nativeCurrency.symbol}
              </div>
            </div>
          </div>
        </Panel>
      </section>
      <div className="col-span-12">
        <TaggingRecords
          filter={taggingRecordsFilter}
          title={t("tag-tagging-records", {
            tag: safeTag.display,
          })}
        />
      </div>
    </Layout>
  );
};

export default Tag;
