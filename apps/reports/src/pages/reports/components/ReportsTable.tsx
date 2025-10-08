import { useState } from 'react'

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


dayjs.extend(utc);
dayjs.extend(timezone);


export default function ReportsTable() {
    const [filterOpen, setFilterOpen] = useState(false);

    const columns = [
        {
            title: <TableHeaderWithIcons title='Caller ID Name' />,
            dataIndex: "caller_id_name",
            width: 180,
            render: (name: string) => name ? <p className='font-bold flex items-center gap-2'>{<Avatar className='!size-8 min-w-8' style={{ backgroundColor: Utils.getAvatarColor(name) }} size="default"
            >{name[0]}</Avatar>} {name}</p> : "-",
            key: "name",
            sorter: (a: CallFields, b: CallFields) => a.caller_id_name.localeCompare(b.caller_id_name),
        },
        {
            title: "Caller ID Number",
            dataIndex: "caller_id_number",
            width: 180,
            key: "caller_id_number",
            render: (number: string) => number ? <div className='flex items-center gap-2'><CallIconPointy className='text-dp-dark-green min-w-fit ' /> {Utils.formatPhoneNumber(number)}</div> : "-",
        },
        {
            title: "Dialed Number",
            dataIndex: "dialed_number",
            width: 180,
            key: "dialed_number",
            render: (number: string) => number ? <div className='flex items-center gap-2'><CallIconPointy className=' min-w-fit text-primary' /> {Utils.formatPhoneNumber(number)}</div> : "-",
        },
        {
            title: "Start Time",
            key: "start_timestamp",
            width: 200,
            dataIndex: "start_timestamp",
            render: (startTime: string) => `${dayjs(startTime).format("MM/DD/YYYY")} - ${dayjs(startTime).format("hh:mm A")}`,
        },
        {
            title: "End Time",
            key: "end_timestamp",
            width: 200,
            dataIndex: "end_timestamp",
            render: (endTime: string) => `${dayjs(endTime).format("MM/DD/YYYY")} - ${dayjs(endTime).format("hh:mm A")}`,
        },
        {
            title: "Answer Time",
            key: "answer_timestamp",
            width: 200,
            dataIndex: "answer_timestamp",
            render: (answerTime: string) => `${dayjs(answerTime).format("MM/DD/YYYY")} - ${dayjs(answerTime).format("hh:mm:ss A")}`,
        },


        {
            title: "Duration",
            key: "duration",
            render: (record: any) => {
                if (record.duration) {
                    const durationSeconds = Number(record.duration) || 0;
                    const formatted = dayjs.utc(durationSeconds * 1000).format("HH:mm:ss");
                    return <Tag>{formatted}</Tag>;
                } else if (!record.answered_at || !record.canceled_at) return null;
                const durationSeconds = dayjs(record.canceled_at).diff(dayjs(record.answered_at), "seconds");
                const formatted = dayjs.utc(durationSeconds * 1000).format("HH:mm:ss");
                return <Tag>{formatted}</Tag>;
            },
        },

        {
            title: "Status",
            key: "status",
            dataIndex: "status",
            render: (record: string) => {
                const status = record ? record.toLowerCase() : "";
                let color = "default";
                if (status === "answered") {
                    color = "green";
                } else if (status === "cancelled" || status === "canceled" || status === "cancel") {
                    color = "red";
                }
                return status ? <Tag color={color}>{_.capitalize(status)}</Tag> : "-";
            },
        },

        {
            title: "Queue Duration",
            key: "queue_duration",
            dataIndex: "queue_duration",
            render: (record: string) => {
                const durationSeconds = Number(record) || 0;
                const formatted = dayjs.utc(durationSeconds * 1000).format("HH:mm:ss");
                return <Tag>{formatted}</Tag>;
            },
        },
        {
            title: "Destination",
            key: "dialed_number",
            render: (record: CallFields) => {
                return record.dialed_number ? Utils.formatPhoneNumber(record.dialed_number) : "-";
            },
        },

        {
            title: "Direction",
            key: "call_direction",
            dataIndex: "call_direction",
            render: (direction: CallDirection) => <CallDirectionWithIcon direction={direction} />,
        },

        {
            title: "Missed Call",
            key: "missed_call",
            dataIndex: "missed_call",
            render: (missed: boolean) => missed ? "Yes" : "No",
        },

        {
            title: "Dialed Extensions",
            key: "dialed_extensions",
            width: 150,
            render: (record: CallFields) => (
                <Flex vertical>
                    <Avatar.Group
                        size="large"
                        max={{
                            count: 2,
                            style: {
                                color: "white",
                                backgroundColor: Utils.getAvatarColor(record?.user_ext),
                                cursor: "pointer",
                                fontWeight: "600",
                            },
                            popover: { trigger: "hover" },
                        }}
                    >
                        {record?.dialed_extensions &&
                            record?.dialed_extensions
                                .filter(Utils.onlyUnique)
                                .map((extension: string) => (
                                    <Avatar
                                        style={{
                                            backgroundColor: Utils.getAvatarColor(extension),
                                            cursor: "pointer",
                                            color: "white",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {extension}
                                    </Avatar>
                                ))}
                    </Avatar.Group>
                </Flex>
            ),
        },


        {
            title: "Phone Number",
            key: "our_e164",
            dataIndex: "our_e164",
            render: (numbers: string[]) =>
                numbers?.length
                    ? numbers.map(num => Utils.formatPhoneNumber(num)).join(", ")
                    : "-",
        },
        {
            title: "Other Phone Number(s)",
            key: "other_e164",
            dataIndex: "other_e164",
            width: 210,
            render: (numbers: string[]) =>
                numbers?.length ? (
                    <div className="flex flex-col gap-1 max-h-[100px] overflow-y-auto">
                        {numbers.map((num, index) => (
                            <div key={index} className="flex items-center gap-2">
                                {Utils.formatPhoneNumber(num)}
                                <BookmarkIcon className="text-dp-dark-green" />
                                {index === 0 && <Button type='text' className='!p-0 !h-fit'>
                                    <PencilIcon className='text-dp-gray-blue' />
                                </Button>}
                            </div>
                        ))}
                    </div>
                ) : (
                    "-"
                ),
        },
        {
            title: "Country Code",
            key: "country_code",
            dataIndex: "country_code",
            render: (country_code: string) => country_code || "-",
        },
        {
            title: "Recording",
            fixed: "right",
            key: "recorded",
            dataIndex: "recorded",
            render: (recorded: boolean) => {
                return recorded ? (
                    <div className='flex items-center gap-2'>
                        <Button type='text' className='!p-0.5'>
                            <Downloadcon className="text-dp-gray-blue" />
                        </Button>
                        <Button type='text' className='!p-0.5'>
                            <PlayIcon className="text-primary" />
                        </Button>
                    </div>
                ) : "-";
            },
        },
        {
            title: "Hangup Cause",
            key: "hangup_cause",
            dataIndex: "hangup_cause",
            render: (hangupCause: string) => _.startCase(hangupCause) || "-",
        },

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

    return (
        <div className='bg-white rounded-xl'>
            <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-2 2xl:gap-4">
                    <h2 className='text-2xl font-bold !mb-0 text-dp-dark-blue'>Reports</h2>
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
            <DPTable scroll={{ x: columns.length * 150 + 100 }} columns={columns} dataSource={data} />
        </div>
    )
}
