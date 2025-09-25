import { ReactNode } from 'react';
import { cn } from '../../../../helpers/general.helpers';
import { MinusIcon, PlusIcon } from '../../../../assets/icons';
import DropdownChecklist from '../../molecules/dropdown-checklist';

interface IStatCard {
  color: string;
  label: string;
  value: string;
  icon: ReactNode
}

export default function StatsCard({ color, label, value, icon }: IStatCard) {
  return (
    <div className='group border-dp-gray-light border-2 rounded-2xl px-1.5 py-2.5'>
      <div className="flex min-h-[110px] gap-1 justify-between shadow-sm shadow-off-white rounded-xl bg-white px-4 pt-5 pb-4">
        <div>
          <p className='text-dp-gray-semi font-medium !mb-0.5'>{label}</p>
          <p style={{ color: color }} className='text-xl font-bold !mb-0'>{value}</p>
        </div>
        <span style={{ background: color }} className={cn("size-10 rounded-full  grid place-items-center", {
          "group-hover:hidden": true
        })}>
          {icon}
        </span>
        <div className={cn('hidden flex-col items-center gap-1', {
          'group-hover:flex': true
        })}>
          <DropdownChecklist
            options={[
              { label: "Call Duration", value: "callDuration" },
              { label: "Average Call Duration", value: "avgCallDuration" },
              { label: "Inbound Call Duration", value: "inboundCallDuration" },
              { label: "Outbound Call Duration", value: "outboundCallDuration" },
            ]}
          >
            <span className='size-6 bg-dp-dark-green/5 rounded-full cursor-pointer grid place-items-center'><PlusIcon className='text-dp-dark-green' /></span>
          </DropdownChecklist>
          <span className='size-6 rounded-full bg-dp-red/5 grid place-items-center cursor-pointer'><MinusIcon className='text-dp-red' /></span>
        </div>
      </div>
    </div >
  )
}
