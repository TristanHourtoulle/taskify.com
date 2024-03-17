export type TitlePageProps = {
  title: string;
};

export const TitlePage = (props: TitlePageProps) => {
  return (
    <div>
      <h1 className="text-white font-bold text-6xl">{props.title}</h1>
    </div>
  );
};
