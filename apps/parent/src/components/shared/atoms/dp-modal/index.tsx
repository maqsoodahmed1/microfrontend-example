import { Modal, ModalProps } from "antd";
import { cn } from "../../../../helpers/general.helpers";

interface DPModalProps extends ModalProps { }

export default function DPModal({ wrapClassName, ...props }: DPModalProps) {
    return (
        <Modal wrapClassName={cn("[&_*]:!font-rethink-sans", wrapClassName)} {...props} />
    )
}
