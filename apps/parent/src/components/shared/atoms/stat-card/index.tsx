import { ReactNode } from 'react';
import { cn } from '../../../../helpers/general.helpers';
import { MinusIcon, PlusIcon } from '../../../../assets/icons';
import DropdownChecklist from '../../molecules/dropdown-checklist';
import Utils from '../../../../utils';

const isDurationField = (fieldTitle: string): boolean => {
  const durationKeywords = ['duration', 'time', 'hold', 'talk', 'wrap', 'queue'];
  return durationKeywords.some(keyword =>
    fieldTitle.toLowerCase().includes(keyword)
  );
};

const formatValue = (val: string, fieldTitle: string): string => {
  const numValue = Number(val || 0);
  if (isDurationField(fieldTitle)) {
    return Utils.formatDuration(numValue);
  }
  return Math.round(numValue).toString();
};

interface IStatCard {
  color: string;
  label: string;
  value: string;
  icon: ReactNode;
  fieldKey: string;
  availableSummaryFields?: Record<string, string>;
  selectedSummaryFieldIds?: string[];
  onAddSummaryField?: (id: string[]) => void;
  onRemoveSummaryField?: (id: string) => void;
}

export default function StatsCard({ color, label, value, icon, fieldKey, availableSummaryFields, selectedSummaryFieldIds, onAddSummaryField, onRemoveSummaryField }: IStatCard) {
  const summaryFieldsObj = availableSummaryFields || {};
  const excludeIds = (selectedSummaryFieldIds && selectedSummaryFieldIds.length)
    ? selectedSummaryFieldIds
    : [];

  return (
    <div className='group border-dp-gray-light border-2 rounded-2xl px-1.5 py-1.5'>
      {/* todo height change */}
      <div className="flex min-h-[98px] gap-1 justify-between shadow-sm shadow-off-white rounded-xl bg-white px-4 pt-5 pb-4">
        <div>
          <p className='text-dp-gray-semi font-medium !mb-0.5'>{label}</p>
          <p style={{ color: color }} className='text-xl font-bold !mb-0'>{formatValue(value, label)}</p>
        </div>
        <span style={{ background: color }} className={cn("size-10 rounded-full  grid place-items-center", {
          "group-hover:hidden": true
        })}>
          {icon}
        </span>
        <div className={cn('hidden flex-col items-center gap-3', {
          'group-hover:flex': true
        })}>
          <DropdownChecklist
            checkedItems={excludeIds}
            onChange={onAddSummaryField}
            options={Object.entries(summaryFieldsObj)
              .filter(([id]) => !(excludeIds.includes(id)))
              .map(([id, label]) => ({
                label: String(label),
                value: id,
              }))}
          >
            <span className='size-6 bg-dp-dark-green/5 rounded-full cursor-pointer grid place-items-center'>
              <PlusIcon className='text-dp-dark-green !size-3' />
            </span>
          </DropdownChecklist>
          <span
            onClick={(e) => {
              e.stopPropagation();
              onRemoveSummaryField && onRemoveSummaryField(fieldKey);
            }}
            className='size-6 rounded-full bg-dp-red/5 grid place-items-center cursor-pointer'>
            <MinusIcon className='text-dp-red size-3' />
          </span>
        </div>
      </div>
    </div >
  )
}
