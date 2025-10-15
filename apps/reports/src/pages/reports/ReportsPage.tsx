import Stats from './components/Stats'
import Banner from '../../../../parent/src/components/shared/molecules/banner'
import ReportTable from './components/ReportsTable'
import { CdrApiService, ReportData, FilterType, SummaryData } from '../../services/cdr.service';
import { useEffect, useMemo, useState } from 'react';
import { fetchDefinitions } from '../../store/slices/filter.slice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../parent/src/sharedStore';
import { RootState } from '../../store';
import { FieldItem, ReportType } from '../../types';
import { Spin } from 'antd';

export default function ReportsPage() {
  const [summary, setSummary] = useState<SummaryData<any>>();
  const [reports, setReports] = useState<ReportData<FilterType>[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const { filterType, definitions, filters } = useSelector((state: RootState) => state.filters);

  const route = 'reports' as const;
  const routeFilterType = filterType[route] as ReportType;

  const currentDefinitions = useMemo(() => definitions ? definitions[routeFilterType] : undefined, [definitions, routeFilterType]);

  const allReportFields: FieldItem[] = useMemo(() => {
    if (!currentDefinitions) return [];
    return Object.entries(currentDefinitions?.fields || {})?.map(([id, label]) => ({ id, label: String(label) }));
  }, [currentDefinitions]);

  const defaultReportFields: FieldItem[] = useMemo(() => {
    if (!currentDefinitions) return [];
    return currentDefinitions.defaultFields.map((id: string) => ({ id, label: String(currentDefinitions?.fields?.[id] || id) }));
  }, [currentDefinitions]);


  const [selectedReportFields, setSelectedReportFields] = useState<FieldItem[] | []>(defaultReportFields);

  const [reportLoading, setReportLoading] = useState<boolean>(false);
  const [summaryLoading, setSummaryLoading] = useState<boolean>(false);

  const [selectedSummaryFieldIds, setSelectedSummaryFieldIds] = useState<string[] | []>([]);

  const filtersWithoutLimitOffset = useMemo(() => {
    const { limit, offset, ...rest } = filters[route];
    return rest;
  }, [filters]);

  const fetchData = async (type: 'summary' | 'report') => {
    if (!selectedReportFields.length && !selectedSummaryFieldIds.length) return;

    if (type === 'report') {
      setReportLoading(true);

      const response = await CdrApiService.fetchData({
        reportType: routeFilterType,
        fields: JSON.stringify(defaultReportFields) === JSON.stringify(selectedReportFields) ? [] : selectedReportFields.map(field => field.id),
        filters: filters[route]
      });
      setReports(response?.records);

      setReportLoading(false);
    } else {
      setSummaryLoading(true);
      const params = {
        filters: filtersWithoutLimitOffset,
        reportType: routeFilterType,
        summaryFields: selectedSummaryFieldIds,
      };
      const response = await CdrApiService.fetchSummary(params);
      setSummary(response.data.summary[0]);
      setSummaryLoading(false);
    }
  };

  useEffect(() => {
    setSelectedSummaryFieldIds(currentDefinitions?.defaultSummaryFields || []);
  }, [currentDefinitions]);

  useEffect(() => {
    setSelectedReportFields(defaultReportFields);
  }, [defaultReportFields]);

  useEffect(() => {
    fetchData('report');
  }, [filters, selectedReportFields]); // todo: account_id;

  useEffect(() => {
    fetchData('summary');
  }, [filtersWithoutLimitOffset, selectedSummaryFieldIds]) // todo: account_id;


  useEffect(() => {
    dispatch(fetchDefinitions());
  }, [])

  return (
    <div>
      {/* <Banner title='Analytics' buttonText='Export Data' description='Complete communication suite for modern businesses' className='mb-3.5' /> */}
      <Banner title='Analytics' buttonText='Export Data' description='Complete communication suite for modern businesses' className='mb-3.5' />
      {summaryLoading ?
        <Spin spinning className='w-full h-[210px] !grid place-items-center mt-20' />
        :
        <Stats
          summary={summary}
          selectedSummaryFieldIds={selectedSummaryFieldIds}
          onAddSummaryField={(ids) => setSelectedSummaryFieldIds(ids)}
          onRemoveSummaryField={(id) => setSelectedSummaryFieldIds((prev: string[]) => prev.filter((x) => x !== id))}
        />

      }
      <ReportTable
        allFields={allReportFields}
        onAddField={(selectedItems: string[]) => {
          const toAdd = allReportFields.find(f => selectedItems.includes(f.id));
          if (toAdd && !selectedReportFields.some(f => f.id === toAdd.id)) {
            setSelectedReportFields(prev => [...prev, toAdd]);
          }
        }}
        onRemoveField={(id) => setSelectedReportFields((prev: FieldItem[]) => prev.filter((x) => x.id !== id))}
        records={reports}
        total={summary?.total_calls ?? 0}
        loading={reportLoading}
        selectedFields={selectedReportFields}
        setSelectedReportsFields={setSelectedReportFields}
        setSelectedSummaryFieldIds={setSelectedSummaryFieldIds}

      />
    </div>
  )
}