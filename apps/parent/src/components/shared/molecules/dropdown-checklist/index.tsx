import { ReactNode } from "react";
import { Dropdown, Spin } from "antd";
import DPCheckbox from "../../atoms/dp-checkbox";

type Option = {
    label: string;
    value: string;
};

type DropdownChecklistProps = {
    children: ReactNode;
    options: Option[];
    checkedItems?: string[];
    onChange?: (newCheckedItems: string[]) => void;
    loading?: boolean;
};

const DropdownChecklist = ({
    children,
    options,
    checkedItems = [],
    onChange,
    loading = false,
}: DropdownChecklistProps) => {
    const toggleItem = (value: string) => {
        let newChecked: string[];
        if (checkedItems?.includes(value)) {
            newChecked = checkedItems.filter((i) => i !== value);
        } else {
            newChecked = [...checkedItems, value];
        }
        onChange?.(newChecked);
    };

    const content = (
        <div className="!space-y-5 !text-base px-4 py-3 rounded-xl bg-white shadow-lg shadow-gray-200 text-dark-blue font-semibold">
            {options.map(({ label, value }) => (
                <div key={value} style={{ marginBottom: 8 }}>
                    <DPCheckbox
                        checked={checkedItems.includes(value)}
                        onChange={() => toggleItem(value)}
                    >
                        {label}
                    </DPCheckbox>
                </div>
            ))}
        </div>
    );

    return (
        <Dropdown dropdownRender={() => content} trigger={["click"]}>
            {children}
        </Dropdown>
    );
};

export default DropdownChecklist;
