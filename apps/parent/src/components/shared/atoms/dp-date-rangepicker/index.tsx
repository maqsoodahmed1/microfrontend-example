import { DatePicker } from 'antd'
import { ArrowLeftRightIcon } from '../../../../assets/icons'
import { RangePickerProps } from 'antd/es/date-picker'

export interface DPDateRangePickerProps extends RangePickerProps {}

export default function DPDateRangePicker({...props}: DPDateRangePickerProps) {
    return (
        <DatePicker.RangePicker
            separator={<ArrowLeftRightIcon className='size-5 mx-3 text-dp-gray-blue' />}
            {...props}
        />
    )
}
