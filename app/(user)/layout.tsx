import { HeadSection } from "@/features/layout/HeadSection";
import { Header } from "@/features/layout/Header";
import { LayoutParams } from "@/types/next";

export default async function RouteLayout(props: LayoutParams<{}>) {
  return (
    <div className="h-screen flex">
      <Header />
      <div className="h-full w-full px-[3%] py-[2%]">
        <HeadSection title={""} />
        <div className="flex-1">{props.children}</div>
      </div>
    </div>
  );
}
