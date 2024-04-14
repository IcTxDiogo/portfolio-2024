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
    posY: 1430,
  },
  {
    name: "Saffron",
    posX: 890,
    posY: 825,
  },
  {
    name: "Fuchsia",
    posX: 945,
    posY: 1440,
  },
  {
    name: "Celadon",
    posX: 655,
    posY: 800,
  },
  {
    name: "Lavender",
    posX: 1090,
    posY: 860,
  },
  {
    name: "Vermilion",
    posX: 950,
    posY: 1060,
  },
  {
    name: "Cerulean",
    posX: 870,
    posY: 590,
  },
  {
    name: "Pewter",
    posX: 330,
    posY: 685,
  },
  {
    name: "Viridian",
    posX: 315,
    posY: 1010,
  },
  {
    name: "Pallet",
    posX: 315,
    posY: 1210,
  },
];

export default function ShowNameCities({ scale }: ShowNameCityProps) {
  return (
    <>
      {citiesNameMarker.map((item, index) => (
        <div
          key={index}
          className={`absolute z-50 font-semibold text-white`}
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
