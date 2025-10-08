import Stats from './components/Stats'
import Banner from '../../../../parent/src/components/shared/molecules/banner'
import ReportsTable from './components/ReportsTable'

export default function ReportsPage() {
  return (
    <div>
      <Banner title='Analytics' buttonText='Export Data' description='Complete communication suite for modern businesses' className='mb-6' />
      <Stats />
      <ReportsTable />
    </div>
  )
}