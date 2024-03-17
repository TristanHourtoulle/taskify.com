import { Header } from "@/features/layout/Header";
import { LayoutParams } from "@/types/next";

export default async function RouteLayout(props: LayoutParams<{}>) {
  return (
    <div className="h-screen flex">
      <Header />
      <div className="flex-1">{props.children}</div>
    </div>
  );
}
