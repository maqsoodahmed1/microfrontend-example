import { PlusIcon, MinusIcon } from "../../../../assets/icons"
import DropdownChecklist from "../dropdown-checklist"

export default function TableHeaderWithIcons({ title }: { title: string }) {
    return (
        <div className="group flex items-cneter justify-between">
            {title}

            <div className="opacity-0 flex group-hover:opacity-100 items-center me-3">
                <DropdownChecklist
                    options={[
                        { label: "Call Duration", value: "callDuration" },
                        { label: "Average Call Duration", value: "avgCallDuration" },
                        { label: "Inbound Call Duration", value: "inboundCallDuration" },
                        { label: "Outbound Call Duration", value: "outboundCallDuration" },
                    ]}
                >
                    <span
                        onClick={(e) => {
                            e.stopPropagation()
                        }} className='size-5 scale-[0.8] bg-dp-dark-green/5 rounded-full cursor-pointer grid place-items-center'><PlusIcon className='text-dp-dark-green' /></span>
                </DropdownChecklist>
                <span className='size-5 scale-[0.8] rounded-full bg-dp-red/5 grid place-items-center cursor-pointer'><MinusIcon className='text-dp-red' /></span>
            </div>
        </div >
    )
}
