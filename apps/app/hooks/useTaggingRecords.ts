import useSWR from "swr";
import type { SWRConfiguration } from "swr";

export function useTaggingRecords({
  id,
  pageSize = 20,
  skip = 0,
  orderBy = "timestamp",
  config = {},
}: {
  id?: string;
  pageSize?: number;
  skip?: number;
  orderBy?: string;
  config?: SWRConfiguration;
}) {
  const { data, mutate, error } = useSWR(
    [
      `query taggingRecords($id: String, $first: Int!, $skip: Int!, $orderBy: String!) {
        taggingRecords: taggingRecords(
          id: $id
          first: $first
          skip: $skip
          orderBy: $orderBy
          orderDirection: desc
        ) {
          id
          recordType
          timestamp
          publisher {
            id
            name
          }
          tagger {
            id
          }
          tags {
            id
            display
            machineName
          }
          target {
            targetURI
            targetType
          }
        },
        nextTaggingRecords: taggingRecords(first: $first, skip: ${
          skip + pageSize
        }, orderBy: $orderBy, orderDirection: desc) {
          id
        }
      }`,
      {
        id,
        skip,
        first: pageSize,
        orderBy: orderBy,
      },
    ],
    config
  );

  return {
    taggingRecords: data?.taggingRecords,
    nextTaggingRecords: data?.nextTaggingRecords,
    isLoading: !error && !data?.taggingRecords,
    mutate,
    isError: error?.statusText,
  };
}
