import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCreators } from "@app/hooks/useCreators";
import useTranslation from "next-translate/useTranslation";
import { timestampToString } from "@app/utils";
import { toEth } from "@app/utils";
import Layout from "@app/layouts/default";
import { Tags } from "@app/components/Tags";
import { Number } from "@app/components/Number";
import { CopyAndPaste } from "@app/components/CopyAndPaste";
import { Truncate } from "@app/components/Truncate";

import { Panel } from "@app/components/Panel";
import PageTitle from "@app/components/PageTitle";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Creator: NextPage = () => {
  const { query } = useRouter();
  const { creator } = query;
  const { t } = useTranslation("common");
  const filter = {
    creator_: { id: creator },
  };
  const { creators } = useCreators({
    pageSize: 1,
    skip: 0,
    filter: { id: creator },
    config: {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      revalidateOnReconnect: false,
      refreshWhenOffline: false,
      refreshWhenHidden: false,
      refreshInterval: 0,
    },
  });

  const pageTitle = `${t("creator")}: ${creators && Truncate(creators[0].id)}`;
  const browserTitle = `${pageTitle} | ETS`;

  return (
    <Layout>
      <div className="col-span-12">
        <div className="grid gap-6 mx-auto mt-8 lg:mb-12 mb-6 lg:gap-12 md:space-y-0 md:grid sm:w-full md:grid-cols-2">
          <div className="grid content-start w-full gap-6 mx-auto lg:gap-12 text-sm">
            <div>
              <Panel title={t("overview")}>
                <div className="grid grid-cols-2 px-6 py-4 space-x-4 md:grid-flow-col hover:bg-slate-100">
                  <div className="font-semibold">{t("id")}</div>
                  <div className="flex space-x-1 justify-end">
                    <div className="">{creators && Truncate(creators[0].id)}</div>
                    <CopyAndPaste value={creators && creators[0].id} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 px-6 py-4 md:grid-flow-col hover:bg-slate-100">
                  <div className="font-semibold">{t("first-seen")}</div>
                  <div className="text-right">
                    <div className="">{creators && timestampToString(parseInt(creators[0].firstSeen))}</div>
                  </div>
                </div>
              </Panel>
            </div>
          </div>
          <div className="grid content-start w-full gap-6 mx-auto lg:gap-12 text-sm">
            <div>
              <Panel title={t("stats")}>
                <div className="grid grid-cols-2 gap-4 px-6 py-4 md:grid-flow-col hover:bg-slate-100">
                  <div className="font-semibold">{t("tags-created")}</div>
                  <div className="text-right">
                    <div className="">{creators && <Number value={creators[0].tagsCreated} />}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 px-6 py-4 md:grid-flow-col hover:bg-slate-100">
                  <div className="font-semibold">{t("created-tags-in-tagging-record")}</div>
                  <div className="text-right">
                    <div className="">
                      {creators && <Number value={creators[0].createdTagsAddedToTaggingRecords} />}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 px-6 py-4 md:grid-flow-col hover:bg-slate-100">
                  <div className="font-semibold">{t("created-tags-auction-revenue")}</div>
                  <div className="text-right">
                    <div className="">
                      {creators && toEth(creators[0].createdTagsAuctionRevenue, 4)}
                      &nbsp;{t("matic")}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 px-6 py-4 md:grid-flow-col hover:bg-slate-100">
                  <div className="font-semibold">{t("created-tags-tagging-revenue")}</div>
                  <div className="text-right">
                    <div className="">
                      {creators && toEth(creators[0].createdTagsTaggingFeeRevenue, 4)}
                      &nbsp;{t("matic")}
                    </div>
                  </div>
                </div>
              </Panel>
            </div>
          </div>
        </div>
        <div>
          <Tags
            filter={filter}
            title={t("tags-created-by", {
              creator: creators && Truncate(creators[0].id),
            })}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Creator;
