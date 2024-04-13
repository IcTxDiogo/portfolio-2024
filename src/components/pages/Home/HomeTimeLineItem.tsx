type HomeTimeLineItemProps = {
  title: string;
  subtitle: string;
  description: string;
  date: string;
};
export default function HomeTimeLineItem(
  { title, subtitle, description, date }: HomeTimeLineItemProps,
  index: number,
) {
  return (
    <div className={"flex flex-col gap-2"}>
      <div className={"flex"}>
        <div
          className={
            "mx-8 h-8 w-8 rounded-full bg-primary shadow shadow-primary"
          }
        >
          <p
            className={
              "absolute -translate-x-[90px] rounded-xl bg-primary/30 p-1 "
            }
          >
            {date}
          </p>
        </div>
        <div className={"grow"}>
          <h3 className={"text-2xl font-semibold"}>{title}</h3>
        </div>
      </div>
      <div className={" flex"}>
        <div className={"mx-8 flex w-8 justify-center"}>
          <div className={"mx-3.5 h-full w-1 bg-white/80"}></div>
        </div>
        <div className={"grow"}>
          <h4 className={"text-lg"}>{subtitle}</h4>
          {description}
        </div>
      </div>
    </div>
  );
}
