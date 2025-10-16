import DPDateRangePicker from '../../../../parent/src/components/shared/atoms/dp-date-rangepicker'
import DPSelect from '../../../../parent/src/components/shared/atoms/dp-select'
import FloatingLabel from '../../../../parent/src/components/shared/atoms/floating-label'
import DPModal from '../../../../parent/src/components/shared/atoms/dp-modal'
import DPButton from '../../../../parent/src/components/shared/atoms/dp-button'
import { CloseIcon, CloseIcon2 } from '../../../../parent/src/assets/icons'
import DPInput from '../../../../parent/src/components/shared/atoms/dp-input'
import RangeNumberInput from '../../../../parent/src/components/shared/atoms/range-number-input.tsx'

import { RootState } from "../../store";
import { useSelector } from "react-redux";
import DynamicFilterInput from './DynamicFilterInput.tsx'
import { useState } from 'react'
export interface Filters {
    [key: string]: any;
}

export default function FiltersModal({
    filterOpen,
    setFilterOpen,
    route = 'reports',
    onClear,
    handleApply
}: {
    filterOpen: boolean,
    setFilterOpen: (open: boolean) => void;
    route?: 'analytics' | 'reports';
    handleApply: (filters: Filters) => void;
    onClear: () => void;
}) {
    const { definitions, filterType: reportType, filters } = useSelector((state: RootState) => state.filters);
    const filterDefinition = definitions?.[reportType?.[route]];
    const availableFilters = filterDefinition?.filters;

    const [activeFilters, setActiveFilters] = useState<Filters>(filters?.[route] || {});


    const handleChange = (key: string, value: any) => {
        setActiveFilters((prev) => ({ ...prev, [key]: value }));
    };

    const handleClearFilters = () => {
        onClear?.();
        setFilterOpen?.(false);
        setActiveFilters({});

    };

    const handleApplyFilters = () => {
        const cleanedFilters = Object.entries(activeFilters).reduce(
            (acc, [key, value]) => {
                if (Array.isArray(value)) {
                    if (value.length > 0) {
                        acc[key] = value;
                    }
                } else if (value !== undefined && value !== null && value !== "") {
                    acc[key] = value;
                }
                return acc;
            },
            {} as Filters
        );

        handleApply(cleanedFilters);
        setFilterOpen?.(false);
    };

  const excludedKeys = ["datetime", "exittime", "answertime", "entertime"];

console.log({availableFilters})
    return (
        <DPModal
            centered
            width={720}
            closable={false}
            open={filterOpen}
            onCancel={() => setFilterOpen(false)}
            footer={null}
        >
            <div className="flex items-center bg-[#f8f8f8] justify-between rounded-t-2xl px-4 py-3">
                <span className='text-dp-blue font-semibold text-lg'>Advanced Filter</span>
                <DPButton icon={<CloseIcon2 className='text-dp-blue size-4' />} type='text' className='!p-0 !bg-transparent' onClick={() => setFilterOpen(false)} />
            </div>
            <div className='grid grid-cols-3 gap-5 mt-5'>
                {
                    Object.entries(availableFilters || {}).map(([filterKey, filterDefinition]) => (
                        <DynamicFilterInput
                            key={filterKey}
                            filterKey={filterKey}
                            onChange={handleChange}
                            defaultValue={activeFilters?.[filterKey]}
                            filterDefinition={filterDefinition}
                        />
                    ))
                }
            </div>

            <div className="flex gap-5 mt-5">
                <DPButton onClick={handleApplyFilters} className='w-full !h-12 !rounded-lg' dpVariant='secondary'>Apply Filter</DPButton>
                <DPButton onClick={handleClearFilters} className='w-full !h-12 !rounded-lg'>Clear Filter</DPButton>
            </div>
        </DPModal >
    )
}
