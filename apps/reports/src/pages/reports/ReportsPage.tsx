import Stats from './components/Stats'
import Banner from '../../../../parent/src/components/shared/molecules/banner'
import ReportTable from './components/ReportsTable'
import { CdrApiService, ReportData, FilterType, SummaryData } from '../../services/cdr.service';
import { useEffect, useState } from 'react';

export default function ReportsPage() {
  const [summary, setSummary] = useState<SummaryData<any>>();
  const [reports, setReports] = useState<ReportData<FilterType>[]>([]);

  const fetchData = async (type: 'summary' | 'report') => {
    const response = await CdrApiService.fetchData({
      reportType: 'calls',
      fields: [],
      filters: {}
    });
    setReports(response?.records);
  };

  useEffect(() => {
    fetchData('report');
  }, []);

  return (
    <div>
      <Banner title='Analytics' buttonText='Export Data' description='Complete communication suite for modern businesses' className='mb-6' />
      <Stats />
      <ReportTable
        records={reports}
        total={summary?.total_calls || 0}
        loading={false}
      />
    </div>
  )
}