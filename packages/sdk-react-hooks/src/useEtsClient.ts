import { type EtsClient, createEtsClient } from "@ethereum-tag-service/sdk-core";
import { useContext, useEffect, useState } from "react";

export const useEtsClient = ({ chainId, account }: { chainId?: number; account?: `0x${string}` }) => {
  const [tokenClient, setEtsClient] = useState<EtsClient>();

  useEffect(() => {
    if (!chainId || !account) return;
    const client = createEtsClient({ chainId, account: account });
    setEtsClient(client);
  }, [chainId, account]);

  const accrued = async (address: `0x${string}`) => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.accrued(address);
    } catch (error) {
      console.error(error);
    }
  };

  const platformPercentage = async () => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.platformPercentage();
    } catch (error) {
      console.error(error);
    }
  };

  const relayerPercentage = async () => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.relayerPercentage();
    } catch (error) {
      console.error(error);
    }
  };

  const taggingFee = async () => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.taggingFee();
    } catch (error) {
      console.error(error);
    }
  };

  const taggingRecordExists = async (taggingRecordId: number) => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.taggingRecordExists(taggingRecordId);
    } catch (error) {
      console.error(error);
    }
  };

  const etsAccessControls = async () => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.etsAccessControls();
    } catch (error) {
      console.error(error);
    }
  };

  const etsTarget = async () => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.etsTarget();
    } catch (error) {
      console.error(error);
    }
  };

  const etsToken = async () => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.etsToken();
    } catch (error) {
      console.error(error);
    }
  };

  const totalDue = async (account: `0x${string}`) => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.totalDue(account);
    } catch (error) {
      console.error(error);
    }
  };

  const applyTagsWithCompositeKey = async (
    tagIds: number[],
    targetId: number,
    recordType: string,
    tagger: `0x${string}`,
  ) => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.applyTagsWithCompositeKey(tagIds, targetId, recordType, tagger);
    } catch (error) {
      console.error(error);
    }
  };

  const appendTags = async (taggingRecordId: number, tagIds: number[]) => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.appendTags(taggingRecordId, tagIds);
    } catch (error) {
      console.error(error);
    }
  };

  const applyTagsWithRawInput = async (
    tagIds: number[],
    targetId: number,
    recordType: string,
    tagger: `0x${string}`,
  ) => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.applyTagsWithRawInput(tagIds, targetId, recordType, tagger);
    } catch (error) {
      console.error(error);
    }
  };

  const removeTags = async (taggingRecordId: number, tagIds: number[]) => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.removeTags(taggingRecordId, tagIds);
    } catch (error) {
      console.error(error);
    }
  };

  const replaceTags = async (taggingRecordId: number, tagIds: number[]) => {
    try {
      if (!tokenClient) throw new Error("Token client not initialized");
      return await tokenClient.replaceTags(taggingRecordId, tagIds);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    accrued,
    platformPercentage,
    relayerPercentage,
    taggingFee,
    taggingRecordExists,
    etsAccessControls,
    etsTarget,
    etsToken,
    totalDue,
    applyTagsWithCompositeKey,
    appendTags,
    applyTagsWithRawInput,
    removeTags,
    replaceTags,
  };
};
