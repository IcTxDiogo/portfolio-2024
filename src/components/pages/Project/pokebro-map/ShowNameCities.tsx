type ShowNameCityProps = {
  scale: number;
};

function getTextClass(scale: number) {
  if (scale > 13) {
    return "text-xs";
  }
  if (scale > 10) {
    return "text-sm";
  }
  if (scale > 7) {
    return "text-base";
  }
  if (scale > 5) {
    return "text-lg";
  }
  if (scale > 3) {
    return "text-xl";
  }
  if (scale > 1) {
    return "text-xl";
  }
  if (scale > 0.8) {
    return "text-2xl";
  }
  if (scale > 0.5) {
    return "text-3xl";
  }
  return "text-4xl";
}

const citiesNameMarker = [
  {
    name: "Cinnabar",
    posX: 360,
    posY: 1420,
  },
  {
    name: "Saffron",
    posX: 875,
    posY: 820,
  },
  {
    name: "Fuchsia",
    posX: 935,
    posY: 1440,
  },
  {
    name: "Celadon",
    posX: 645,
    posY: 790,
  },
  {
    name: "Lavender",
    posX: 1090,
    posY: 850,
  },
  {
    name: "Vermilion",
    posX: 950,
    posY: 1050,
  },
  {
    name: "Cerulean",
    posX: 870,
    posY: 580,
  },
  {
    name: "Pewter",
    posX: 320,
    posY: 675,
  },
  {
    name: "Viridian",
    posX: 300,
    posY: 1000,
  },
  {
    name: "Pallet",
    posX: 300,
    posY: 1200,
  },
];

export default function ShowNameCities({ scale }: ShowNameCityProps) {
  return (
    <>
      {citiesNameMarker.map((item, index) => (
        <div
          key={index}
          className={`absolute z-50 ${getTextClass(
            scale,
          )} font-semibold text-white`}
          style={{
            left: `${item.posX}px`,
            top: `${item.posY}px`,
            transform: `translate("-50%, -50%")`,
            textShadow: "0 0 10px black",
          }}
        >
          {item.name}
        </div>
      ))}
    </>
  );
}
