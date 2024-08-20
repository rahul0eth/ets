import { AccessControlsClient } from "../clients/AccessControlsClient";
import { AuctionHouseClient } from "../clients/AuctionHouseClient";
import { CoreClient } from "../clients/CoreClient";
import { EnrichTargetClient } from "../clients/EnrichTargetClient";
import { EtsClient } from "../clients/EtsClient";
import { RelayerClient } from "../clients/RelayerClient";
import { RelayerFactoryClient } from "../clients/RelayerFactoryClient";
import { TargetClient } from "../clients/TargetClient";
import { TokenClient } from "../clients/TokenClient";
import { chainsMap } from "../config/chainsConfig";

import { http, type Hex, createPublicClient, createWalletClient, custom } from "viem";

export const viemPublicClient = (chainId?: number): any => {
  const chain = chainsMap(chainId);
  let transportUrl = chain.rpcUrls?.default?.http?.[0];
  const alchemyUrl = chain.rpcUrls?.alchemy?.http;
  if (alchemyUrl) transportUrl = `${alchemyUrl}/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`;

  return createPublicClient({
    chain,
    transport: http(transportUrl, { batch: true }),
  });
};

function createClient<T>(
  ClientType: new (args: any) => T,
  chainId: number | undefined,
  relayerAddress?: Hex,
  account?: Hex,
): T | undefined {
  if (!chainId) return undefined;

  const chain = chainsMap(chainId);
  if (!chain) {
    console.error("Unsupported chain ID");
    return undefined;
  }

  const publicClient = viemPublicClient(chainId);
  if (!publicClient) {
    console.error("Failed to create public client");
    return undefined;
  }

  const walletClient = createWalletClient({
    chain,
    account,
    transport: custom((window as any).ethereum),
  });

  try {
    const client = new ClientType({
      chainId,
      publicClient,
      walletClient,
      relayerAddress,
    });
    return client;
  } catch (error) {
    console.error(`Error creating ${ClientType.name}:`, error);
    return undefined;
  }
}

export function createTokenClient({
  chainId,
  account,
}: {
  chainId: number | undefined;
  account?: Hex;
}): TokenClient | undefined {
  return createClient<TokenClient>(TokenClient, chainId, undefined, account);
}

export function createRelayerClient({
  chainId,
  relayerAddress,
  account,
}: {
  chainId: number | undefined;
  relayerAddress: Hex;
  account?: Hex;
}): RelayerClient | undefined {
  return createClient<RelayerClient>(RelayerClient, chainId, relayerAddress, account);
}

export function createAuctionHouseClient({
  chainId,
  account,
}: {
  chainId: number | undefined;
  account?: Hex;
}): AuctionHouseClient | undefined {
  return createClient<AuctionHouseClient>(AuctionHouseClient, chainId, undefined, account);
}

export function createAccessControlsClient({
  chainId,
  account,
}: {
  chainId: number | undefined;
  account?: Hex;
}): AccessControlsClient | undefined {
  return createClient<AccessControlsClient>(AccessControlsClient, chainId, undefined, account);
}

export function createRelayerFactoryClient({
  chainId,
  account,
}: {
  chainId: number | undefined;
  account?: Hex;
}): RelayerFactoryClient | undefined {
  return createClient<RelayerFactoryClient>(RelayerFactoryClient, chainId, undefined, account);
}

export function createTargetClient({
  chainId,
  account,
}: {
  chainId: number | undefined;
  account?: Hex;
}): TargetClient | undefined {
  return createClient<TargetClient>(TargetClient, chainId, undefined, account);
}

export function createEnrichTargetClient({
  chainId,
  account,
}: {
  chainId: number | undefined;
  account?: Hex;
}): EnrichTargetClient | undefined {
  return createClient<EnrichTargetClient>(EnrichTargetClient, chainId, undefined, account);
}

export function createEtsClient({
  chainId,
  account,
}: {
  chainId: number | undefined;
  account?: Hex;
}): EtsClient | undefined {
  return createClient<EtsClient>(EtsClient, chainId, undefined, account);
}

export function createCoreClient({
  chainId,
  relayerAddress,
  account,
  clients,
}: {
  chainId: number | undefined;
  relayerAddress?: Hex;
  account?: Hex;
  clients?: {
    tokenClient?: boolean;
    relayerClient?: boolean;
    accessControlsClient?: boolean;
    auctionHouseClient?: boolean;
    relayerFactoryClient?: boolean;
    targetClient?: boolean;
  };
}): CoreClient | undefined {
  const publicClient = viemPublicClient(chainId);
  if (!publicClient) {
    console.error("Failed to create public client");
    return undefined;
  }

  const walletClient = createWalletClient({
    chain: chainsMap(chainId),
    account,
    transport: custom((window as any).ethereum),
  });

  return new CoreClient({
    chainId,
    publicClient,
    walletClient,
    relayerAddress,
    clients,
  });
}
