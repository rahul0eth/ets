import { useEffect, useState } from "react";
import { createTokenClient, TokenClient } from "@ethereum-tag-service/sdk-core";

export const useTokenClient = ({ chainId, account }: { chainId?: number; account?: `0x${string}` }) => {
  const [tokenClient, setTokenClient] = useState<TokenClient>();

  useEffect(() => {
    if (!chainId || !account) return;
    const client = createTokenClient({ chainId, account: account });
    setTokenClient(client);
  }, [chainId, account]);

  const computeTagId = async (tag: string): Promise<bigint> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.computeTagId(tag);
    } catch (error) {
      throw error;
    }
  };

  const computeTagIds = async (tags: string[]): Promise<bigint[]> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.computeTagIds(tags);
    } catch (error) {
      throw error;
    }
  };

  const tagExists = async (tag: string): Promise<boolean> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.tagExistsById(tag);
    } catch (error) {
      throw error;
    }
  };

  const existingTags = async (tags: string[]): Promise<string[]> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.existingTags(tags);
    } catch (error) {
      throw error;
    }
  };

  const hasTags = async (address: `0x${string}` | undefined): Promise<boolean> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.hasTags(address);
    } catch (error) {
      throw error;
    }
  };

  const balanceOf = async (owner: `0x${string}`): Promise<bigint> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.balanceOf(owner);
    } catch (error) {
      throw error;
    }
  };

  const getOrCreateTagId = async (tag: string, relayer: `0x${string}`, creator: `0x${string}`): Promise<bigint> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.getOrCreateTagId(tag, relayer, creator);
    } catch (error) {
      throw error;
    }
  };

  const getApproved = async (tokenId: bigint): Promise<string> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.getApproved(tokenId);
    } catch (error) {
      throw error;
    }
  };

  const getTagById = async (tokenId: bigint): Promise<any> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.getTagById(tokenId);
    } catch (error) {
      throw error;
    }
  };

  const getTagByString = async (tag: string): Promise<any> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.getTagByString(tag);
    } catch (error) {
      throw error;
    }
  };

  const isApprovedForAll = async (owner: `0x${string}`, operator: `0x${string}`): Promise<boolean> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.isApprovedForAll(owner, operator);
    } catch (error) {
      throw error;
    }
  };

  const ownerOf = async (tokenId: bigint): Promise<string> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.ownerOf(tokenId);
    } catch (error) {
      throw error;
    }
  };

  const getOwnershipTermLength = async (): Promise<bigint> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.getOwnershipTermLength();
    } catch (error) {
      throw error;
    }
  };

  const tagOwnershipTermExpired = async (tokenId: bigint): Promise<boolean> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.tagOwnershipTermExpired(tokenId);
    } catch (error) {
      throw error;
    }
  };

  const tagMaxStringLength = async (): Promise<bigint> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.tagMaxStringLength();
    } catch (error) {
      throw error;
    }
  };

  const tagMinStringLength = async (): Promise<bigint> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.tagMinStringLength();
    } catch (error) {
      throw error;
    }
  };

  const supportsInterface = async (interfaceId: `0x${string}`): Promise<boolean> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.supportsInterface(interfaceId);
    } catch (error) {
      throw error;
    }
  };

  const symbol = async (): Promise<string> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.symbol();
    } catch (error) {
      throw error;
    }
  };

  const transferFrom = async (
    from: `0x${string}`,
    to: `0x${string}`,
    tokenId: bigint,
  ): Promise<{ transactionHash: string; status: number }> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.transferFrom(from, to, tokenId);
    } catch (error) {
      throw error;
    }
  };

  const recycleTag = async (tokenId: bigint): Promise<{ transactionHash: string; status: number }> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.recycleTag(tokenId);
    } catch (error) {
      throw error;
    }
  };

  const renewTag = async (tokenId: bigint): Promise<{ transactionHash: string; status: number }> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.renewTag(tokenId);
    } catch (error) {
      throw error;
    }
  };

  const safeTransferFrom = async (
    from: `0x${string}`,
    to: `0x${string}`,
    tokenId: bigint,
    data?: `0x${string}`,
  ): Promise<{ transactionHash: string; status: number }> => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.safeTransferFrom(from, to, tokenId, data);
    } catch (error) {
      throw error;
    }
  };
  return {
    tokenClient,
    computeTagId,
    computeTagIds,
    tagExists,
    existingTags,
    hasTags,
    balanceOf,
    getOrCreateTagId,
    getApproved,
    getTagById,
    getTagByString,
    isApprovedForAll,
    ownerOf,
    getOwnershipTermLength,
    tagOwnershipTermExpired,
    tagMaxStringLength,
    tagMinStringLength,
    supportsInterface,
    symbol,
    transferFrom,
    recycleTag,
    renewTag,
    safeTransferFrom,
  };
};