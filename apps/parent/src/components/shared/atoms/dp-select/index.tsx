import { Select, type SelectProps } from "antd";
import { ArrowDownThin } from "../../../../assets/icons";
import { cn } from "../../../../helpers/general.helpers";

export type DPSelectProps = SelectProps & {
    iconClassName?: string;
};

export default function DPSelect({
    className,
    iconClassName,
    ...props
}: DPSelectProps) {
    return (
        <Select
            rootClassName="[&_.ant-select-item]:!font-normal [&_.ant-select-item]:!text-dp-gray-blue"
            className={cn(
                "[&_.ant-select-clear]:bg-white font-normal",
                className
            )}
            suffixIcon={
                <ArrowDownThin
                    className={cn("size-3", iconClassName)}
                    strokeWidth={0.4}
                />
            }
            {...props}
        />
    );
}

DPSelect.Option = Select.Option;
