// Layout.jsx
import { HeadSection } from "@/features/layout/HeadSection";
import { Header } from "@/features/layout/Header";
import { LayoutParams } from "@/types/next";

export default async function RouteLayout(props: LayoutParams<{}>) {
  return (
    <div className="flex h-screen w-full">
      <div className="w-[20%]">
        <Header />
      </div>
      <div className="flex flex-1">
        <div className="py-[2%] px-[2%] w-[99%]">
          <HeadSection title={""} />
          {props.children}
        </div>
      </div>
    </div>
  );
}
