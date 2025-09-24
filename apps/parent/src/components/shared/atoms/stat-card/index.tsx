import { ReactNode } from 'react';
import { ReportIconLeft } from '../../../../assets/icons'

interface IStatCard {
  color: string;
  label: string;
  value: string;
  icon: ReactNode
}

export default function StatsCard({ color, label, value, icon }: IStatCard) {
  return (
    <div className='border-dp-gray-light border-2 rounded-2xl px-1.5 py-2.5'>
      <div className="flex items-center gap-1 justify-between shadow-sm shadow-off-white rounded-xl bg-white px-4 pt-2 pb-4">
        <div>
          <p className='text-dp-gray-semi font-medium !mb-0.5'>{label}</p>
          <p style={{ color: color }} className='text-xl font-bold !mb-0'>{value}</p>
        </div>
        <span style={{ background: color }} className='size-10 rounded-full  grid place-items-center'>
          {icon}
        </span>
      </div>
    </div>
  )
}
