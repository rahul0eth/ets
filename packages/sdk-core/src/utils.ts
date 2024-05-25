import type { PublicClient, WalletClient } from "viem";

export const handleContractRead = async (
  publicClient: PublicClient,
  address: `0x${string}`,
  abi: any,
  functionName: any,
  args: any = [],
): Promise<any> => {
  try {
    return await publicClient.readContract({
      address,
      abi,
      functionName,
      args,
    });
  } catch (error) {
    console.error(`Error performing read operation for function ${functionName}:`, error);
    throw error;
  }
};

export const handleContractCall = async (
  publicClient: PublicClient,
  walletClient: WalletClient,
  address: `0x${string}`,
  abi: any,
  functionName: any,
  args: any = [],
  value?: bigint, // in wei
): Promise<{ transactionHash: string; status: number }> => {
  try {
    const { request } = await publicClient.simulateContract({
      address,
      abi,
      functionName,
      args,
      account: walletClient.account,
      value,
    });

    const hash = await walletClient.writeContract(request);
    const receipt = await publicClient.waitForTransactionReceipt({ hash });
    return {
      status: receipt.status,
      transactionHash: receipt.transactionHash,
    };
  } catch (error) {
    console.error(`Error in ${functionName}:`, error);
    throw error;
  }
};
