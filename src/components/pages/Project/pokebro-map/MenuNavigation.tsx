import { ReactNode } from "react";
import { ArrowDown, ArrowUp, Keyboard, Minus, Plus } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

type NavigationMenuProps = {
  floor: number;
  setFloor: (floor: number) => void;
  doZoom: (zoomIn: boolean) => void;
};

type Action = "up" | "down" | "7" | "in" | "out";

type MapNavigationItem = {
  content: ReactNode;
  parameter: Action;
  name: string;
};

export default function MenuNavigation({
  floor,
  setFloor,
  doZoom,
}: NavigationMenuProps) {
  function controlFloor(action: Action) {
    if (action === "up") {
      if (floor < 15) {
        setFloor(floor + 1);
      }
    } else if (action === "down") {
      if (floor > 0) {
        setFloor(floor - 1);
      }
    } else if (action === "in") {
      doZoom(true);
    } else if (action === "out") {
      doZoom(false);
    } else {
      setFloor(7);
    }
  }

  const navigationItems: MapNavigationItem[] = [
    {
      content: <Plus />,
      parameter: "in",
      name: "Zoom in",
    },
    {
      content: <ArrowUp />,
      parameter: "up",
      name: "Up floor",
    },
    {
      content: floor,
      parameter: "7",
      name: `Actual floor ${floor}`,
    },
    {
      content: <ArrowDown />,
      parameter: "down",
      name: "Down floor",
    },
    {
      content: <Minus />,
      parameter: "out",
      name: "Zoom out",
    },
  ];

  return (
    <>
      <div
        className={
          "absolute inset-y-0 right-4 z-50 my-20 flex flex-col items-center justify-center gap-2"
        }
      >
        <NavigationMenu>
          <NavigationMenuList
            className={
              "flex max-w-fit flex-col items-center justify-center gap-2 space-x-0"
            }
          >
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Button
                  variant={"outline"}
                  size={"icon"}
                  onClick={() => controlFloor(item.parameter)}
                  aria-label={item.name}
                >
                  {item.content}
                </Button>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}
