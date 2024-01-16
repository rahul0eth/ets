//import { Share } from "./Share";
interface PageTitle {
  title: string;
  shareUrl?: string;
}

export default function PageTitle({ title, shareUrl }: PageTitle) {
  return (
    <>
      <div className="col-span-12 lg:hidden">
        <h1 className="text-xl font-medium">{title}</h1>
      </div>
      {/*{shareUrl && <Share url={shareUrl} />}*/}
    </>
  );
}
