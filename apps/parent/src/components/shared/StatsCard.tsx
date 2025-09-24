import { ReportIconLeft } from '../../assets/icons'

export default function StatsCard() {
  return (
    <div>
      <div className="flex items-center gap-1 justify-between">
        <div>
          <p>Total Reports</p>
          <p>190</p>
        </div>
        <span className='size-20 bg-primary grid place-items-center'>
          <ReportIconLeft />
        </span>
      </div>
    </div>
  )
}
