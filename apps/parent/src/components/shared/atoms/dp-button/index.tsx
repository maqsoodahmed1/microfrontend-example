import { Button, type ButtonProps } from "antd";
import { cn } from "../../../../helpers/general.helpers";

export interface DPButtonProps extends ButtonProps {
    dpVariant?: "primary" | "secondary";
};

const variantClass = {
    primary: "!rounded-xl !h-10 !bg-white !text-dp-dark-blue !font-semibold !text-xs 2xl:text-sm",
    secondary: "!rounded-xl !h-10 !border-dp-blue !bg-dp-blue !text-white !font-semibold !text-xs 2xl:text-sm",
}

export default function DPButton({ className, children, dpVariant = "primary", ...props }: DPButtonProps) {
    return (
        <Button className={cn(variantClass[dpVariant], className)} {...props}>{children}</Button>
    )
}
