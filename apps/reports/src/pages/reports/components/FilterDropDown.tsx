import { useState } from 'react'

import dayjs from 'dayjs'
import { Button } from 'antd'

import PopoverDropdown from '../../../../../parent/src/components/shared/molecules/popover-dropdown'
import { CalenderThinIcon, CloseIcon2 } from '../../../../../parent/src/assets/icons'
import DPDateRangePicker from '../../../../../parent/src/components/shared/atoms/dp-date-rangepicker'
import { cn } from '../../../../../parent/src/helpers/general.helpers'
import DPButton from '../../../../../parent/src/components/shared/atoms/dp-button'

export interface DateOption {
    key: string;
    label: string;
    startTime: string;
    endTime: string;
  }

export const DEFAULT_OPTIONS: DateOption[] = [
    {
      key: "Today",
      label: "Today",
      startTime: dayjs().startOf("day").toISOString(),
      endTime: dayjs().endOf("day").toISOString(),
    },
    {
      key: "Yesterday",
      label: "Yesterday",
      startTime: dayjs().subtract(1, "day").startOf("day").toISOString(),
      endTime: dayjs().subtract(1, "day").endOf("day").toISOString(),
    },
    {
      key: "WeekToDate",
      label: "Week to Date",
      startTime: dayjs().startOf("week").toISOString(),
      endTime: dayjs().endOf("day").toISOString(),
    },
    {
      key: "LastWeek",
      label: "Last Week",
      startTime: dayjs()
        .subtract(1, "week")
        .startOf("week")
        .add(1, "day")
        .toISOString(),
      endTime: dayjs()
        .subtract(1, "week")
        .endOf("week")
        .add(1, "day")
        .toISOString(),
    },
    {
      key: "Last7Days",
      label: "Last 7 Days",
      startTime: dayjs().subtract(7, "day").startOf("day").toISOString(),
      endTime: dayjs().subtract(1, "day").endOf("day").toISOString(),
    },
    {
      key: "MonthToDate",
      label: "Month to Date",
      startTime: dayjs().startOf("month").toISOString(),
      endTime: dayjs().endOf("day").toISOString(),
    },
    {
      key: "LastMonth",
      label: "Last Month",
      startTime: dayjs().subtract(1, "month").startOf("month").toISOString(),
      endTime: dayjs().subtract(1, "month").endOf("month").toISOString(),
    },
    {
      key: "Last30Days",
      label: "Last 30 Days",
      startTime: dayjs().subtract(30, "day").startOf("day").toISOString(),
      endTime: dayjs().subtract(1, "day").endOf("day").toISOString(),
    },
    {
      key: "Last90Days",
      label: "Last 90 Days",
      startTime: dayjs().subtract(90, "day").startOf("day").toISOString(),
      endTime: dayjs().endOf("day").toISOString(),
    },
    {
      key: "YearToDate",
      label: "Year to Date",
      startTime: dayjs().startOf("year").toISOString(),
      endTime: dayjs().endOf("day").toISOString(),
    },
    {
      key: "LastYear",
      label: "Last Year",
      startTime: dayjs().subtract(1, "year").startOf("year").toISOString(),
      endTime: dayjs().subtract(1, "year").endOf("year").toISOString(),
    },
  ];
  
  export function FilterDropdown() {
  
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<DateOption | null>(DEFAULT_OPTIONS[0]);
  
    return (
  
      <PopoverDropdown
        icon={<CalenderThinIcon className='text-dp-gray-blue' />}
        open={open}
        onOpenChange={setOpen}
        label="Filter"
        placement='bottom'
        content={
          <div className='p-3.5 !w-sm !space-y-3.5 pb-5 mb-5'>
            <div className="flex items-center justify-between bg-[#f1f1f1] py-4 px-5 rounded-t-xl">
              <span className='font-semibold text-dp-blue'>Filter By Date</span>
              <Button
                type='text'
                className='!p-0 !h-fit !bg-transparent'
                onClick={() => setOpen(false)}>
                <CloseIcon2 className='size-4.5 text-dp-blue' />
              </Button>
            </div>
  
            <DPDateRangePicker className='!w-full' placeholder={["Start Date", "End Date"]} />
  
            <div className='grid grid-cols-3 gap-2 text-xs 2xl:text-sm'>
              {DEFAULT_OPTIONS.map((option) => (
                <span key={option.key} aria-role='radio' onClick={() => setSelectedOption(option)} className={cn("bg-[#f3f4f5c4] border rounded-lg py-3 px-1 border-gray-200 hover:bg-gray-100 text-dp-gray-blue block font-semibold text-center w-full cursor-pointer", {
                  "bg-primary text-white hover:bg-primary border-primary": selectedOption?.key === option.key
                })}>
                  {option.label}
                </span>
              ))}
            </div>
  
            <div className='flex items-center gap-3'>
              <DPButton dpVariant='secondary'>Apply Filter</DPButton>
              <DPButton dpVariant='primary'>Clear Filters</DPButton>
            </div>
          </div>
        }
      />
    )
  }
  

export default function FilterDropDown() {
  return (
    <div>FilterDropDown</div>
  )
}
