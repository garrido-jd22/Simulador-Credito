/* eslint-disable prettier/prettier */
import { Select, SelectItem } from "@heroui/select";
import { useState } from "react";

interface Line {
    name: string;
    type: string;
}

interface University {
    key: string;
    label: string;
    line: Line[];
    disabled: boolean;
}

export const university: University[] = [
    {
        key: "Universidad Reformada",
        label: "Universidad Reformada",
        line: [
            { name: "Pregrados", type: "undergraduate" },
            { name: "Posgrados", type: "postgraduate" }
        ],
        disabled: false
    },
    {
        key: "USB Cali",
        label: "USB Cali",
        line: [
            { name: "Pregrados", type: "undergraduate" },
            { name: "Posgrados", type: "postgraduate" },
            { name: "Técnico", type: "technical" }
        ],
        disabled: false
    },
    {
        key: "USB Cartagena",
        label: "USB Cartagena",
        line: [
            { name: "Pregrados", type: "undergraduate" },
            { name: "Posgrados", type: "postgraduate" }
        ],
        disabled: false
    },
    {
        key: "USB Bogotá",
        label: "USB Bogotá",
        line: [
            { name: "Pregrados", type: "undergraduate" },
            { name: "Posgrados", type: "postgraduate" },
            { name: "Técnico", type: "technical" }
        ],
        disabled: false
    },
    {
        key: "Universidad Areandina",
        label: "Universidad Areandina",
        line: [
            { name: "Pregrados", type: "undergraduate" },
            { name: "Posgrados", type: "postgraduate" }
        ],
        disabled: true
    },
    {
        key: "Universidad del Norte",
        label: "Universidad del Norte",
        line: [
            { name: "Pregrados", type: "undergraduate" },
            { name: "Posgrados", type: "postgraduate" }
        ],
        disabled: false
    },
    {
        key: "Universidad EAFIT",
        label: "Universidad EAFIT",
        line: [
            { name: "Pregrados", type: "undergraduate" },
            { name: "Posgrados", type: "postgraduate" }
        ],
        disabled: false
    },
    {
        key: "Universidad EAN",
        label: "Universidad EAN",
        line: [
            { name: "Pregrados", type: "undergraduate" },
            { name: "Posgrados", type: "postgraduate" }
        ],
        disabled: false
    },
    {
        key: "Universidad Rafael Nuñez",
        label: "Universidad Rafael Nuñez",
        line: [
            { name: "Pregrados", type: "undergraduate" }
        ],
        disabled: false
    }
];


export default function SelectUniversity({ selectItem }: { selectItem: (m: string) => void }) {

    const [itemUniversity, setUniversity] = useState<University | null>(null)

    const [lineItems, setLineItems] = useState<Line[]>([])
    const [lineValue, setLineItem] = useState<Line>()

    const readItems = (university: University) => {
        setUniversity(university)
        setLineItems(university.line)
        // ENVIA UNIVERSIDAD A OTRO COMPOMENTE
        selectItem(`${lineValue != null ? lineValue.name : ''} ${university.label}`)
    }

    const lineSelect = (line: Line) => {
        setLineItem(line)
        selectItem(`${line.name} ${itemUniversity?.label}`)
    }

    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Select className="max-w-xs" label="Universidad" variant="bordered">
                {university.map((item) => (
                    <SelectItem key={item.key} onPress={() => readItems(item)}>{item.label}</SelectItem>
                ))}
            </Select>
            <Select className="max-w-xs" label="Selecciona la linea" variant="bordered">
                {lineItems.map((line) => (
                    <SelectItem key={line.name} onPress={() => lineSelect(line)}>{line.name}</SelectItem>
                ))}
            </Select>
        </div>
    );
}
