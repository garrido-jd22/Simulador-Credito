// "use client";
import { Slider } from "@heroui/slider";
import {
  Listbox,
  ListboxItem
} from "@heroui/listbox";
import { NumberInput } from "@heroui/number-input";
import { ThemeSwitch } from "@/components/theme-switch";
import SelectUniversity from "@/components/select";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function IndexPage() {

  const [universityItem, setUniversityItem] = useState<any | null>(null);

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="grid grid-cols-3 gap-4 rounded-2xl shadow-xl w-3/4 max-w-5xl p-6">

          {/* Columna Izquierda (2/3 del ancho) */}
          <div className="col-span-2 p-4">
            <SelectUniversity selectItem={setUniversityItem} />
            <div className="text-center mb-6 mt-8">
              <h1 className="text-3xl font-bold mb-2">{universityItem}</h1>
            </div>

            {/* Input numérico */}
            <div className="text-center mb-6 mt-12">
              <h2 className="text-2xl font-bold mb-1">¿Cuanto necesitas?</h2>
              <p className="leading-tight mb-8 text-xs">
                (Ingresa el valor para tu matricula)
              </p>
              <NumberInput
                placeholder="0.00"
                variant="bordered"
                color="success"
                size="lg"
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-500 text-3xl">$</span>
                  </div>
                }
                classNames={{
                  base: "w-64 mx-auto",
                  input: "text-4xl text-center font-semibold", // Cambia el tamaño del texto del input
                }}
              />
            </div>

            {/* Segundo título */}
            <div className="text-center mt-12">
              <h2 className="text-2xl font-bold mb-1">¿En cuántas cuotas?</h2>
              <p className="leading-tight mb-6 text-xs">
                (Desliza para ajustar el plazo de tu crédito)
              </p>
            </div>
            <Slider
              className="w-full"
              color="foreground"
              defaultValue={2}
              label="Plazo en meses"
              maxValue={6}
              minValue={1}
              showSteps={true}
              size="md"
              step={1}
            />
          </div>

          {/* Columna Derecha (1/3 del ancho) */}
          <div className="col-span-1 p-4 rounded-lg flex flex-col items-center">
            {/* Imagen */}
            <img
              src="https://www.one2credit.com/wp-content/uploads/2025/05/ONE2credit_Pieza-1-copia.png"
              alt="Resumen"
              className="w-40 h-auto mb-4"
            />

            {/* Título */}
            <h3 className="text-lg font-semibold mb-4">Resumen de la solicitud</h3>

            {/* ListBox con valores */}
            <Listbox aria-label="Resumen de la solicitud" className="w-full max-w-xs">
              <ListboxItem key="intereses">
                <div className="flex justify-between w-full">
                  <span>Interés</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">0.20 %</span>
                    <Tooltip content="Los intereses corresponden al costo del dinero prestado durante el plazo del crédito.">
                      <InformationCircleIcon className="w-5 h-5 text-secondary cursor-pointer" />
                    </Tooltip>
                  </div>
                </div>
              </ListboxItem>
              <ListboxItem key="deducciones">
                <div className="flex justify-between w-full">
                  <span>Deducciones</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">$ 150.000</span>
                    <Tooltip content="Las deducciones incluyen costos adicionales como comisiones o seguros asociados al crédito.">
                      <InformationCircleIcon className="w-5 h-5 text-secondary cursor-pointer" />
                    </Tooltip>
                  </div>
                </div>
              </ListboxItem>
              <ListboxItem key="valorCredito">
                <div className="flex justify-between w-full">
                  <span>Valor del crédito</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">$ 1.000.000</span>
                    <Tooltip content="El valor del crédito es el monto total aprobado para el préstamo.">
                      <InformationCircleIcon className="w-5 h-5 text-secondary cursor-pointer" />
                    </Tooltip>
                  </div>
                </div>
              </ListboxItem>
              <ListboxItem key="valorCuota">
                <div className="flex justify-between w-full">
                  <span>Valor de la cuota</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">$ 120.000</span>
                    <Tooltip content="El valor de la cuota es la cantidad a pagar periódicamente, calculada con intereses y deducciones.">
                      <InformationCircleIcon className="w-5 h-5 text-secondary cursor-pointer" />
                    </Tooltip>
                  </div>
                </div>
              </ListboxItem>
            </Listbox>

            <h3 className="text-lg font-semibold mb-4 mt-10">Cuota inicial</h3>
            <NumberInput
              placeholder="0.00"
              variant="bordered"
              disabled={true}
              color="success"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-500 text-2xl">$</span>
                </div>
              }
              classNames={{
                base: "w-54 mx-auto",
                input: "text-2xl text-center font-semibold", // Cambia el tamaño del texto del input
              }}
            />

            <Button color="secondary" variant="shadow" className="w-full mt-auto">
              Obtener
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 m-5">
        <ThemeSwitch />
      </div>
    </div>
  );
}
