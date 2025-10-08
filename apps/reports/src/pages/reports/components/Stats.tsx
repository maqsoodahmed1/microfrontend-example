import MultiCardCarousel from '../../../../../parent/src/components/shared/molecules/multi-card-carousel'
import StatCard from '../../../../../parent/src/components/shared/atoms/stat-card'
import { COLORS } from '../../../../../parent/src/constants/colors.constants'
import { ReportIconWarn, ReportIconLeft, ReportIconRight } from '../../../../../parent/src/assets/icons'

export default function Stats() {
  return (
    <MultiCardCarousel className='mb-6'>
      <StatCard label="Total Reports" value="190" color={COLORS.PRIMARY} icon={<ReportIconWarn className='text-white' />} />
      <StatCard label="Received Reports" value="140" color={COLORS.DP_DARK_GREEN} icon={<ReportIconLeft className='text-white' />} />
      <StatCard label="Sent Reports" value="50" color={COLORS.DP_PURPLE_V2} icon={<ReportIconRight className='text-white' />} />
      <StatCard label="Bulk Reports" value="19" color={COLORS.DP_LIME_GREEN} icon={<ReportIconLeft className='text-white' />} />
      <StatCard label="Failed Reports" value="10" color={COLORS.DP_RED} icon={<ReportIconWarn className='text-white' />} />
    </MultiCardCarousel>
  )
}
