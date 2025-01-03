import { etsRelayerFactoryConfig } from "@ethereum-tag-service/contracts/contracts";
import type { Hex, PublicClient, WalletClient } from "viem";
import type { RelayerFactoryReadFunction, RelayerFactoryWriteFunction } from "../types";
import { handleContractCall } from "../utils/handleContractCall";
import { handleContractRead } from "../utils/handleContractRead";
import { validateConfig } from "../utils/validateConfig";

export class RelayerFactoryClient {
  private readonly publicClient: PublicClient;
  private readonly walletClient: WalletClient | undefined;
  private readonly address: Hex;
  private readonly abi: any;

  constructor({
    publicClient,
    walletClient,
    chainId,
  }: {
    publicClient: PublicClient;
    walletClient?: WalletClient;
    chainId?: number;
  }) {
    validateConfig(chainId, publicClient, walletClient);

    if (!chainId || !(chainId in etsRelayerFactoryConfig.address)) {
      throw new Error(`[@ethereum-tag-service/sdk-core] RelayerFactory contract not configured for chain ${chainId}`);
    }

    this.publicClient = publicClient;
    this.walletClient = walletClient;
    this.address = etsRelayerFactoryConfig.address[chainId as keyof typeof etsRelayerFactoryConfig.address];
    this.abi = etsRelayerFactoryConfig.abi;
  }

  private async readContract(functionName: RelayerFactoryReadFunction, args: any[] = []): Promise<any> {
    return handleContractRead(this.publicClient, this.address, this.abi, functionName, args);
  }

  private async callContract(
    functionName: RelayerFactoryWriteFunction,
    args: any[] = [],
  ): Promise<{ transactionHash: string; status: number }> {
    if (!this.walletClient) {
      throw new Error("Wallet client is required to perform this action");
    }
    return handleContractCall(this.publicClient, this.walletClient, this.address, this.abi, functionName, args);
  }
  async addRelayer(relayerName: string): Promise<{ transactionHash: string; status: number }> {
    return this.callContract("addRelayer", [relayerName]);
  }

  async ets(): Promise<string> {
    return this.readContract("ets", []);
  }

  async etsAccessControls(): Promise<string> {
    return this.readContract("etsAccessControls", []);
  }

  async etsTarget(): Promise<string> {
    return this.readContract("etsTarget", []);
  }

  async etsToken(): Promise<string> {
    return this.readContract("etsToken", []);
  }
}
