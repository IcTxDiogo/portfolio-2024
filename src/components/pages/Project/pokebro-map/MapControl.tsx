"use client";

import { useState } from "react";

import useMapControl from "@/Hooks/mapControl/useMapControl";
import MenuNavigation from "@/components/pages/Project/pokebro-map/MenuNavigation";
import SuspendButtons from "@/components/pages/Project/pokebro-map/SuspendButtons";

export const IMAGE_SIZE = 2048;

export default function MapControl() {
  const {
    posX,
    posY,
    scale,
    divRef,
    isLoaded,
    onMouseDown,
    onZoom,
    onTouchStart,
    doZoom,
  } = useMapControl();

  const [floor, setFloor] = useState(7);

  function calculateStyle() {
    let fileFloor = 7;

    if (floor < 7) {
      fileFloor = 7 + (7 - floor);
    }
    if (floor > 7) {
      fileFloor = 7 - (floor - 7);
    }
    return {
      transform: `translate(${posX}px, ${posY}px) scale(${scale})`,
      backgroundImage: `url(/pokebro-map/map-images/${fileFloor}.webp)`,
      width: `${IMAGE_SIZE}px`,
      height: `${IMAGE_SIZE}px`,
    };
  }

  const mapStyles = calculateStyle();

  return (
    <>
      {!isLoaded ? (
        <main className="flex h-screen flex-col items-center justify-center">
          <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-gray-900" />
          <span className={"animate-pulse"}>Loading...</span>
        </main>
      ) : (
        <main
          className={
            "pokebro-map m-0 h-screen w-screen overflow-x-hidden overflow-y-hidden bg-black"
          }
          onMouseDown={(e) => onMouseDown(e.nativeEvent)}
          onWheel={(e) => onZoom(e.nativeEvent)}
          onTouchStart={(e) => onTouchStart(e.nativeEvent)}
        >
          <div style={mapStyles} ref={divRef}></div>
          <MenuNavigation floor={floor} setFloor={setFloor} doZoom={doZoom} />
          <SuspendButtons />
        </main>
      )}
    </>
  );
}
