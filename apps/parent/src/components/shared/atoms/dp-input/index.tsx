import { Input, InputProps } from "antd";
import { cn } from "../../../../helpers/general.helpers";

interface DPInputProps extends InputProps {}

export default function DPInput({ className, ...props }: DPInputProps) {
  return (
    <Input className={cn(className)} {...props} />
  )
}
