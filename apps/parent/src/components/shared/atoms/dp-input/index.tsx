import { Input, InputProps } from "antd";
import { cn } from "../../../../helpers/general.helpers";

interface DPInputProps extends InputProps {}

export default function DPInput({ className, ...props }: DPInputProps) {
  return (
    <Input className={cn("!text-dp-gray-semi placeholder:!text-dp-gray-semi",className)} {...props} />
  )
}
