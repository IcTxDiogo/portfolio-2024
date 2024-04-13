import MapControl from "@/components/pages/Project/pokebro-map/MapControl";
import SuspendButtons from "@/components/pages/Project/pokebro-map/SuspendButtons";

export default function Page() {
  return (
    <>
      <div className={"h-screen w-screen bg-black"}>
        <SuspendButtons />
        <MapControl />
      </div>
    </>
  );
}
