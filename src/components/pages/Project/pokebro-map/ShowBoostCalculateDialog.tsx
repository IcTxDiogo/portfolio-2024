import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import {
  type PokemonTypes,
  type BoostType,
  getTotalBoost,
  pokemonTypesWithBoost,
} from "@/lib/pokebro-map/boost";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type ResultType = {
  initialBoost: BoostType;
  finalBoost: BoostType;
  tipoPokemon: PokemonTypes;
  result: number;
};

type ShowFindDialogProps = {
  boostDialog: boolean;
  setBoostDialog: (open: boolean) => void;
};

const minimalBoost = 0;
const maximalBoost = 50;

export default function ShowBoostCalculateDialog({
  boostDialog,
  setBoostDialog,
}: ShowFindDialogProps) {
  const [tipoPokemon, setTipoPokemon] = useState<PokemonTypes>("grass");
  const [initialBoost, setInitialBoost] = useState<BoostType>(minimalBoost);
  const [finalBoost, setFinalBoost] = useState<BoostType>(maximalBoost);
  const [result, setResult] = useState<ResultType>();

  useEffect(() => {
    function down(e: KeyboardEvent) {
      if (e.key === "b" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setBoostDialog(!boostDialog);
      }
    }
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [boostDialog, setBoostDialog]);

  useEffect(() => {
    if (!boostDialog) {
      setTipoPokemon("grass");
      setInitialBoost(minimalBoost);
      setFinalBoost(maximalBoost);
    }
  }, [boostDialog]);

  function verifyBoost(boost: string, setBoost: (boost: BoostType) => void) {
    const number = parseInt(boost);
    if (number >= 0) {
      if (number <= 50) {
        setBoost(number as BoostType);
      } else {
        setBoost(maximalBoost);
      }
    } else {
      setBoost(minimalBoost);
    }
  }

  function handleResetar() {
    setTipoPokemon("grass");
    setInitialBoost(minimalBoost);
    setFinalBoost(maximalBoost);
    setResult(undefined);
  }

  function handlegetTotalBoost() {
    const result = getTotalBoost(initialBoost, finalBoost, tipoPokemon);
    setResult({ initialBoost, finalBoost, tipoPokemon, result });
  }

  return (
    <div
      onWheel={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <Dialog open={boostDialog} onOpenChange={setBoostDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Calculadora de Boost</DialogTitle>
          </DialogHeader>
          <div className={"flex flex-col gap-4 py-4"}>
            <Label>Tipo do pokemon</Label>
            <Select
              onValueChange={(value) => setTipoPokemon(value as PokemonTypes)}
              value={tipoPokemon}
            >
              <SelectTrigger className="flex">
                <SelectValue placeholder="Selecione o tipo do pokemon" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {Object.entries(pokemonTypesWithBoost).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Label>Boost atual</Label>
            <Input
              value={initialBoost}
              type="number"
              onChange={(e) => verifyBoost(e.target.value, setInitialBoost)}
            />
            <Label>Boost final</Label>
            <Input
              value={finalBoost}
              type="number"
              onChange={(e) => verifyBoost(e.target.value, setFinalBoost)}
            />
          </div>
          <Button onClick={handlegetTotalBoost}>Calcular</Button>
          <Button onClick={handleResetar} variant={"outline"}>
            Reset
          </Button>
          {result && (
            <div className="flex flex-col gap-4 py-4 text-2xl font-extralight">
              <p>
                O boost para {pokemonTypesWithBoost[result.tipoPokemon].label}
              </p>
              <p>
                Do {result.initialBoost} até {result.finalBoost} é:{" "}
                {result.result} pedras.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
