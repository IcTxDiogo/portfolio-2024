"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import ShowBoostCalculateDialog from "@/components/pages/Project/pokebro-map/ShowBoostCalculateDialog";

export default function MapTools() {
  const [tollDialog, setTollDialog] = useState(false);
  const [boostDialog, setBoostDialog] = useState(false);

  function dialogControl(callback: () => void) {
    setTollDialog(!tollDialog);
    callback();
  }

  return (
    <>
      <Dialog open={tollDialog} onOpenChange={setTollDialog}>
        <DialogTrigger asChild>
          <Button
            variant={"outline"}
            className={"absolute bottom-4 left-4 z-50"}
            size={"icon"}
          >
            <Menu />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ferramentas diponiveis</DialogTitle>
          </DialogHeader>
          <div className={"flex flex-col"}>
            <Button
              onClick={() => dialogControl(() => setBoostDialog(!boostDialog))}
              className={"w-full"}
            >
              Calcular boost
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <ShowBoostCalculateDialog
        boostDialog={boostDialog}
        setBoostDialog={setBoostDialog}
      />
    </>
  );
}
