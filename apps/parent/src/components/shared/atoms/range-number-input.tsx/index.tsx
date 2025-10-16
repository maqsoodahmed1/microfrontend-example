import React, { useState } from "react";
import { InputNumber } from "antd";
import FloatingLabel from "../floating-label";
import { ArrowLeftRightIcon } from "../../../../assets/icons";
import { cn } from "../../../../helpers/general.helpers";
import DPNumberInput from "../dp-number-input";

interface RangeNumberInputProps {
    defaultValue?: string;
    onChange?: (filterKey: string, value: string) => void;
    filterKey?: string;
    placeholder?: [string, string];
}

export default function RangeNumberInput({
    defaultValue,
    onChange,
    filterKey = "range",
    placeholder = ["Min*", "Max"],
}: RangeNumberInputProps) {
    const [minValue, setMinValue] = useState<number | null>(
        defaultValue?.split?.("-")?.[0] ? Number(defaultValue.split("-")[0]) : null
    );
    const [maxValue, setMaxValue] = useState<number | null>(
        defaultValue?.split?.("-")?.[1] ? Number(defaultValue.split("-")[1]) : null
    );

    const updateFilter = (
        min: number | null,
        max: number | null,
        updateState: () => void
    ) => {
        if (min !== null && max !== null && min > max) {
            return;
        }

        updateState();

        const composed =
            min !== null ? `${min}${max !== null ? `-${max}` : ""}` : "";
        onChange?.(filterKey, composed);
    };

    const getDisplayValue = (value: number | null) => {
        return value === 0 ? null : value;
    };

    return (
        <div className="flex items-center gap-2 border [&_.ant-input-number]:focus-within:!shadow-none [&_.ant-input-number]:focus:!shadow-none border-dp-ice-blue rounded-xl bg-white">
            <DPNumberInput
                className="flex-1 !border-none shadow-none"
                controls={false}
                min={0}
                placeholder={placeholder[0]}
                value={getDisplayValue(minValue)}
                onChange={(value) => {
                    const num = value ?? null;
                    updateFilter(Number(num), maxValue, () => setMinValue(Number(num)));
                }}
            />
            <ArrowLeftRightIcon className="text-dp-gray-blue size-5 flex-shrink-0" />
            <DPNumberInput
                className="flex-1 !border-none shadow-none"
                controls={false}
                min={0}
                placeholder={placeholder[1]}
                value={getDisplayValue(maxValue)}
                onChange={(value) => {
                    const num = value ?? null;
                    updateFilter(minValue, Number(num), () => setMaxValue(Number(num)));
                }}
            />
        </div>
    );
}
