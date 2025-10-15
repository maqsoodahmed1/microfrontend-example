import React from 'react'
import { useSelector } from 'react-redux'

import MultiCardCarousel from '../../../../../parent/src/components/shared/molecules/multi-card-carousel'
import StatCard from '../../../../../parent/src/components/shared/atoms/stat-card'
import { COLORS } from '../../../../../parent/src/constants/colors.constants'
import { ReportIconWarn, ReportIconLeft, ReportIconRight } from '../../../../../parent/src/assets/icons' // todo: fix icons
import { SummaryData } from '../../../services/cdr.service'
import { RootState } from '../../../store/'

export default function Stats({ summary, selectedSummaryFieldIds, onAddSummaryField, onRemoveSummaryField }: {
  summary: SummaryData<any>,
  selectedSummaryFieldIds: string[];
  onAddSummaryField?: (id: string[]) => void;
  onRemoveSummaryField?: (id: string) => void;
}) {
  const { definitions, filterType } = useSelector((state: RootState) => state.filters);
  const route = 'reports' as const;
  const currentType = filterType[route];
  const currentDef = definitions ? definitions[currentType] : undefined;
  const internalSelected = React.useMemo(() => currentDef?.defaultSummaryFields || [], [currentDef]);
  const effectiveSelected = selectedSummaryFieldIds && selectedSummaryFieldIds.length ? selectedSummaryFieldIds : internalSelected;

  return (
    <MultiCardCarousel className='mb-6'>
      {effectiveSelected?.map((id, index) => {
        const label = currentDef?.summaryFields?.[id] || id;

        return (
          <StatCard
            key={index}
            fieldKey={id}
            label={label}
            value={summary?.[id]}
            color={COLORS.PRIMARY}
            icon={<ReportIconWarn className='text-white' />}
            availableSummaryFields={currentDef?.summaryFields}
            selectedSummaryFieldIds={effectiveSelected}
            onAddSummaryField={onAddSummaryField}
            onRemoveSummaryField={onRemoveSummaryField}
          />
        )
      })}
    </MultiCardCarousel>
  )
}
