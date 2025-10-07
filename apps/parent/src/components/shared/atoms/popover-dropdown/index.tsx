import { Button, Popover, PopoverProps } from "antd"
import { ArrowDownThin, CalenderThinIcon, FilterIcon } from "../../../../assets/icons"
import { cn } from "../../../../helpers/general.helpers";

interface PopoverDropdownProps extends PopoverProps {
    icon: React.ReactNode;
    label: string;
    buttonClassName?: string;
}

export default function PopoverDropdown({
    style,
    icon,
    label,
    buttonClassName,
    ...props
}: PopoverDropdownProps) {
    return (
        <Popover overlayInnerStyle={{padding: 0}} trigger="click"  {...props} >
            <Button type="text" className={cn("!border-dp-ice-blue !rounded-md !py-5 !min-w-fit !bg-transparent", buttonClassName)}>
                <div className="flex items-center gap-2.5">
                    {icon}
                    <p className="!m-0 font-semibold text-dp-gray-blue">{label}</p>
                    <ArrowDownThin className="text-dp-gray-blue size-4" />
                </div>
            </Button>
        </Popover >
    )
}