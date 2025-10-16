import { Avatar, Button, Flex, Tag } from "antd";
import { CallFields } from "../../services/cdr.service";
import { BookmarkIcon, CallIconPointy, Downloadcon, PencilIcon, PlayIcon } from "../../../../parent/src/assets/icons";
import Utils from "../../../../parent/src/utils";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { CallDirection } from "../../../../parent/src/components/Layout";
import CallDirectionWithIcon from "../../../../parent/src/components/shared/atoms/call-direction-with-icon";
import _ from "lodash";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function useCallRecordsTableColumns() {
    const columns = [
        {
            title: 'Caller ID Name',
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
            render: (startTime: string) => startTime ? `${dayjs(startTime).format("MM/DD/YYYY")} - ${dayjs(startTime).format("hh:mm A")}` : "-",
        },
        {
            title: "End Time",
            key: "end_timestamp",
            width: 200,
            dataIndex: "end_timestamp",
            render: (endTime: string) => endTime ? `${dayjs(endTime).format("MM/DD/YYYY")} - ${dayjs(endTime).format("hh:mm A")}` : "-",
        },
        {
            title: "Answer Time",
            key: "answer_timestamp",
            width: 260,
            dataIndex: "answer_timestamp",
            render: (answerTime: string) => answerTime ? `${dayjs(answerTime).format("MM/DD/YYYY")} - ${dayjs(answerTime).format("hh:mm:ss A")}` : "-",
        },
        {
            title: "Duration",
            key: "duration",
            render: (record: any) => {
                if (record.duration) {
                    const durationSeconds = Number(record.duration) || 0;
                    const formatted = dayjs.utc(durationSeconds * 1000).format("HH:mm:ss");
                    return <p className="text-dp-gray-blue !m-0">{formatted}</p>;
                } else if (!record.answered_at || !record.canceled_at) return null;
                const durationSeconds = dayjs(record.canceled_at).diff(dayjs(record.answered_at), "seconds");
                const formatted = dayjs.utc(durationSeconds * 1000).format("HH:mm:ss");
                return <p className="text-dp-gray-blue !m-0">{formatted}</p>;
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
                return <p className="text-dp-gray-blue !m-0">{formatted}</p>;
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
                        className="[&_.ant-avatar]:!size-7 [&_.ant-avatar_.ant-avatar-string]:!text-[9px]"
                        size="large"
                        maxCount={2}
                        style={{
                            color: "white",
                            cursor: "pointer",
                            fontWeight: "600",
                        }}
                        maxPopoverTrigger="hover"
                    >
                        {record?.dialed_extensions &&
                            record?.dialed_extensions
                                .filter(Utils.onlyUnique)
                                .map((extension: string) => (
                                    <Avatar
                                        className="[&_.ant-avatar]:!size-10"

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
                        {numbers?.map((num, index) => (
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

    return columns
}
