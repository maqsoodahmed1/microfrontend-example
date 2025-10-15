import { PlusIcon, MinusIcon } from "../../../../assets/icons"
import DropdownChecklist from "../dropdown-checklist"

export default function TableHeaderWithIcons({ title, selectedColumnFields, onRemove, onAddSummaryField, items, fieldId }: {
    title: string,
    selectedColumnFields: string[],
    onRemove: (id: string) => void;
    onAddSummaryField?: (id: string[]) => void;
    items: { label: string, value: string }[];
    fieldId: string;
}) {
    return (
        <div className="group flex items-cneter justify-between">
            {title}

            <div className="opacity-0 flex group-hover:opacity-100 items-center"> {/* me-3 */}
                <DropdownChecklist
                    onChange={onAddSummaryField}
                    options={items}
                >
                    <span
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                        className='size-5 scale-[0.8] bg-dp-dark-green/5 rounded-full cursor-pointer grid place-items-center'>
                        <PlusIcon className='text-dp-dark-green' />
                    </span>
                </DropdownChecklist>
                <span onClick={() => onRemove(fieldId)} className='size-5 scale-[0.8] rounded-full bg-dp-red/5 grid place-items-center cursor-pointer'>
                    <MinusIcon className='text-dp-red' />
                </span>
            </div>
        </div >
    )
}
