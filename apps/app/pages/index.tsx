import ChainModalETS from "@app/components/ChainModalETS";
import SiteMessage from "@app/components/SiteMessage";
import { Stats } from "@app/components/Stats";
import { TaggingRecords } from "@app/components/TaggingRecords";
import { useEnvironmentContext } from "@app/context/EnvironmentContext";
import Layout from "@app/layouts/default";
import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  const { isIndexPage } = useEnvironmentContext();

  if (isIndexPage) {
    return (
      <div className="flex items-center justify-center h-screen px-6">
        <main className="max-w-sm py-6 my-auto space-y-6">
          <div className="flex items-center justify-center mt-10 mb-14">
            <svg className="w-8 h-8 text-slate-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <title>ETS Logo</title>
              <path
                fill="currentColor"
                d="M0 50 50 0H0v50zm100 50V50l-50 50h50zM50 0l50 50V0H50zM19.9 84.9c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.3 5 5z"
              />
            </svg>
            <span className="inline-flex ml-2.5 text-xl font-medium text-slate-900">Ethereum Tag Service</span>
          </div>

          <ChainModalETS show={true} onClose={() => {}} asModal={false} />
        </main>
      </div>
    );
  }

  return (
    <Layout>
      <div className="mb-4 col-span-12">
        <SiteMessage />
      </div>
      <Stats />
      <TaggingRecords title={t("latest-tagging-records")} />
    </Layout>
  );
};

export default Home;
