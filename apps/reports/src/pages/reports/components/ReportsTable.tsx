import React, { useMemo, useState } from 'react'

import { Flex, Modal, Divider, Button, Avatar, Tag } from 'antd'

import dayjs from 'dayjs'
import utc from "dayjs/plugin/utc";
import _ from 'lodash'
import timezone from "dayjs/plugin/timezone";

import DPDateRangePicker from '../../../../../parent/src/components/shared/atoms/dp-date-rangepicker'
import DPSelect from '../../../../../parent/src/components/shared/atoms/dp-select'
import DPTable from '../../../../../parent/src/components/shared/atoms/dp-table'
import CallDirectionWithIcon from '../../../../../parent/src/components/shared/atoms/call-direction-with-icon'
import DPButton from '../../../../../parent/src/components/shared/atoms/dp-button'
import DPInput from '../../../../../parent/src/components/shared/atoms/dp-input'

import { DownloadStackIcon } from '../../../../../parent/src/assets/icons'
import { ArrowDownThin } from '../../../../../parent/src/assets/icons'
import { SearchIcon } from '../../../../../parent/src/assets/icons'
import { FilterIcon } from '../../../../../parent/src/assets/icons'
import { ArrowReloadIcon } from '../../../../../parent/src/assets/icons'
import { CallIconPointy } from '../../../../../parent/src/assets/icons'
import { BookmarkIcon } from '../../../../../parent/src/assets/icons'
import { PencilIcon } from '../../../../../parent/src/assets/icons'
import { Downloadcon } from '../../../../../parent/src/assets/icons'
import { PlayIcon } from '../../../../../parent/src/assets/icons'
import TableHeaderWithIcons from '../../../../../parent/src/components/shared/molecules/table-header-with-icons'

import { CallFields } from '../../../../../parent/src/components/Layout'
import { CallDirection } from '../../../../../parent/src/components/Layout'

import Utils from '../../../../../parent/src/utils'

import { FilterDropdown } from './FilterDropDown'

import useCallRecordsTableColumns from '../../hooks/useCallRecordsTableColumns'

dayjs.extend(utc);
dayjs.extend(timezone);

interface ReportTableProps<T> {
    records: T[];
    total: number;
    loading: boolean;
    tableHeight?: number;
}

const reportSelectedFields = [
    { id: "id", label: "ID" },
    { id: "caller_id_name", label: "Caller ID Name" },
    { id: "caller_id_number", label: "Caller ID Number" },
    { id: "dialed_number", label: "Dialed Number" },
    { id: "start_timestamp", label: "Start Time" },
    { id: "end_timestamp", label: "End Time" },
    { id: "answer_timestamp", label: "Answer Time" },
    { id: "duration", label: "Duration" },
    { id: "call_direction", label: "Direction" },
    { id: "missed_call", label: "Missed Call" },
    { id: "call_flow", label: "call_flow" },
    { id: "user_ext", label: "User Extension" },
    { id: "dialed_extensions", label: "Dialed Extensions" },
    { id: "our_e164", label: "Phone Number" },
    { id: "other_e164", label: "Other Phone Number" },
    { id: "recorded", label: "Recorded" },
];

const data = [
    {
        key: Math.random(),
        caller_id_name: "13472180110",
        caller_id_number: "13472180110",
        dialed_number: '13472180110',
        start_timestamp: '2025-09-26T13:40:18.000Z',
        answer_timestamp: '2025-09-26T13:40:18.000Z',
        duration: '70',
        call_direction: 'inbound',
        dialed_extensions: ['123', '323', '532', '532'],
        user_ext: "494",
        our_e164: ["13472180110"],
        other_e164: ["13472180110", "13472180110"],
        recorded: true,
        country_code: "US",
        hangup_cause: "busy"
    },
    {
        key: Math.random(),
        caller_id_name: "13472180110",
        caller_id_number: "13472180110",
        dialed_number: '13472180110',
        start_timestamp: '2025-09-26T13:40:18.000Z',
        answer_timestamp: '2025-09-26T13:40:18.000Z',
        duration: '70',
        call_direction: 'outbound',
        hangup_cause: "NOT_ANSWERED"
    },
    {
        key: Math.random(),
        caller_id_name: "13472180110",
        caller_id_number: "13472180110",
        dialed_number: '13472180110',
        start_timestamp: '2025-09-26T13:40:18.000Z',
        answer_timestamp: '2025-09-26T13:40:18.000Z',
        duration: '70',
        call_direction: 'local',
    },

];

function ReportsTableInner<T>({ records, total, loading, tableHeight }: ReportTableProps<T>) {
    const [filterOpen, setFilterOpen] = useState(false);

    const columns = useCallRecordsTableColumns()


    const tableColumns = useMemo(() => {
        const baseColumns = reportSelectedFields
            .filter((field) => !["id", "call_flow", 'cdr_id', 'queue_id', 'member_id'].includes(field.id))
            .map((field) => {
                const columnDef = columns.find((col: any) => col.key === field.id);

                return {
                    key: field.id,
                    title: <TableHeaderWithIcons title={field.label} />,
                    dataIndex: columnDef?.dataIndex,
                    render: (text: any, record: any) =>
                        columnDef && typeof columnDef.render === 'function'
                          ? columnDef.render(text)
                          : record[field.id],
                }

            })

        return baseColumns;
    }, [columns])

    return (
        <div className='bg-white rounded-xl'>
            <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-2 2xl:gap-4">
                    <h2 className='text-2xl font-bold !mb-0 text-dp-dark-blue'>Reportss</h2>
                    <Divider type="vertical" className='text-dp-gray-blue !h-8 !border-gray-300 !border-s-2' />
                    <Button type='text' className='!p-0 !h-fit !bg-transparent'>
                        <DownloadStackIcon className='text-dp-blue' />
                        <p className='!m-0 font-semibold !text-base text-dp-blue'>Export Report</p>
                    </Button>
                    <Divider type="vertical" className='text-dp-gray-blue !h-8 !border-gray-300 !border-s-2' />
                    <FilterDropdown />
                    <Divider type="vertical" className='text-dp-gray-blue !h-8 !border-gray-300 !border-s-2' />
                    <div className="relative">
                        <DPSelect
                            options={[
                                { label: "Calls", value: "calls" },
                                { label: "Queues", value: "queues" },
                                { label: "User", value: "users" },
                                { label: "Agents", value: "agents" }
                            ]}
                            placeholder="Select Report Type"
                            suffixIcon={<ArrowDownThin className="text-dp-dark-blue !size-4" />}
                            className="!w-[140px] [&_.ant-select-selector]:!rounded-md [&_.ant-select-selection-item]:!text-dp-gray-blue [&_.ant-select-selection-item]:!font-semibold !h-10 [&_.ant-select-selector]:!pl-11 [&_.ant-select-selection-search-input]:!pl-8"
                            showSearch
                        />
                        <CallIconPointy className="absolute top-[50%] text-dp-dark-blue -translate-y-[50%] left-4" />
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <DPButton type='text' className='!p-0 !text-dp-dark-green !h-fit !bg-transparent'><ArrowReloadIcon className='text-dp-dark-green' /> Refresh</DPButton>
                    <DPInput placeholder="Search" className='!py-2.5 !rounded-md' prefix={<SearchIcon className="text-dp-gray-semi !size-4" />} />
                    <DPButton onClick={() => setFilterOpen(true)} dpVariant='secondary' className='!px-2 !rounded-lg !bg-primary'>
                        <FilterIcon className='text-white' />
                    </DPButton>
                </div>
            </div>
            <Modal width={720} closable={false} open={filterOpen} onCancel={() => setFilterOpen(false)} footer={null}>
                <div className="flex items-center justify-between">
                    <span className='text-primary font-semibold '>Advanced Filter</span>
                </div>
                <div className='grid grid-cols-3 gap'>
                    <DPDateRangePicker className='!w-full col-span-2' placeholder={["Start Date", "End Date"]} />
                    <DPSelect className='' />
                </div>
            </Modal>
            <DPTable scroll={{ x: columns.length * 150 + 100 }} columns={tableColumns} dataSource={records} />
        </div>
    )
}

export default React.memo(ReportsTableInner) as typeof ReportsTableInner;