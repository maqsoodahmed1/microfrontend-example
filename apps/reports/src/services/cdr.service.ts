import {
    ApiResponse,
    DefinitionsData,
    DataApiParams,
    SummaryApiParams,
    ReportType
} from '../types';

import { api } from '../../../parent/src/api';

import qs from 'qs';


export interface CallFilters {
    dialednum: string[];
    direction: string[];
    ournum: string[];
    othernum: string;
    cidname: string;
    cidenum: string;
    app: keyof any; // todo: fix this
    appdata: string;
    datetime: string;
    time: string | string[];
    months: string[];
    weekdays: string | string[];
    monthdays: string | string[];
    timezone: string;
    country: string;
    status: string | string[];
    limit: number;
    offset: number;
    ext: string;
}

export interface QueueFilters {
    cidname: string;
    cidenum: string;
    entertime: string;
    exittime: string;
    answertime: string;
    exitreason: string;
    status: "answered" | "canceled";
    timezone: string;
    agent: string[];
    limit: number;
    offset: number;
}
export interface AgentFilters {
    agent: string[];
    queue: string[];
    cause: string;
    cidname: string;
    cidnum: string;
    datetime: string;
    missed: boolean;
    limit: number;
    offset: number;
}

export type UserFilters = CallFilters
/**
 * Interface representing a summary of report statistics.
 */
export interface CallSummary {
    total_calls: string;
    total_call_duration: string;
    average_call_duration: string;
    total_inbound_calls: string;
    total_inbound_call_duration: string;
    average_inbound_call_duration: string;
    total_outbound_calls: string;
    total_outbound_call_duration: string;
    average_outbound_call_duration: string;
    total_local_calls: string;
    total_local_call_duration: string;
    average_local_call_duration: string;
    total_inbound_calls_answered: string;
    total_inbound_calls_talked: string;
    total_inbound_calls_missed: string;
    total_outbound_calls_answered: string;
    total_outbound_calls_missed: string;
    total_local_calls_answered: string;
    total_local_calls_missed: string;
}

export type UserSummary = CallSummary;

export interface QueueSummary {
    avg_wait_time: string;
    max_wait_time: string;
    min_wait_time: string;
    total_calls: string;
    total_answered_calls: string;
    total_missed_calls: string;
}

export interface AgentFields {
    queue: string
    agent: string;
    caller_id_name: string;
    caller_id_number: string;
    missed: boolean,
    timestamp: string;
    cause: string
}

export interface AgentSummary {
    agent: string
    total_calls: string
    total_missed: string
    total_missed_answered_elsewhere: string
    total_answered: string
    percentage_answered: string
}

export interface QueueFields {
    cdr_id: string;
    queue_id: string;
    member_id: string;
    queue_name: string;
    leg: string;
    queue_duration: string;
    entered_at: string;
    original_entered_at: string;
    canceled_at: string;
    cancel_reason: string;
    status: string;
    agent: string;
    answered_at: string;
}

export interface CallFields {
    id: string;
    start_timestamp: string;
    domain_name: string;
    caller_id_name: string;
    caller_id_number: string;
    duration: string;
    dialed_number: string;
    end_timestamp: string;
    answer_timestamp: string;
    call_direction: string;
    country_code: string;
    hangup_cause: string;
    missed_call: string;
    other_e164: string[]
    our_e164: string[];
    dialed_extensions: string[];
    user_ext: string;
    call_flow: CallFlow;
    recorded: boolean;
}

export type UserFields = {
    id: string;
    start_timestamp: string;
    end_timestamp: string;
    duration: string;
    answer_timestamp: string;
    dialed_number: string;
    caller_id_name: string;
    caller_id_number: string;
    call_direction: string;
    country_code: string;
    user_agent: string;
    missed_call: string;
    user_ext: string;
    our_e164: string;
    other_e164: string;
}


interface CallFlow {
    flows: Flow[];
    version: number;
}

export interface Flow {
    id: string;
    destination: number;
    transferred?: boolean;
    transfer_type?: string;
    flow_duration?: string;
    transfered_at?: string;
    answered?: boolean;
    answered_at?: string;
    hangup?: boolean;
    bridged?: boolean;
    hangup_at?: string;
    bridged_at?: string;
    callcenter?: CallCenter;
    application?: Application;
}

interface Application {
    app: string;
    data: string;
}

interface CallCenter {
    name: string;
    agent: string | null;
    status?: string;
    queueID: string;
    enteredAt: string | null;
    answeredAt: string | null;
    canceledAt: string | null;
    agentNumber: number | null;
    cancelReason?: string | null;
}

export type ReportSummaryMap = {
    calls: CallSummary;
    queues: QueueSummary[];
    users: UserSummary;
    agents: AgentSummary
};

export type SummaryData<T extends ReportType> = ReportSummaryMap[T];

type ReportRecordsMap = {
    calls: CallFields[];
    queues: QueueFields[];
    users: UserFields[];
    agents: AgentFields[];
};

export type ReportData<T extends ReportType> = {
    [K in keyof ReportRecordsMap]: K extends T ? ReportRecordsMap[K] : never;
};

type ReportFiltersMap = {
    calls: CallFilters;
    queues: QueueFilters;
    users: UserFilters;
    agents: AgentFilters
};

export type FilterType = 'calls' | 'queues' | 'users' | 'agents';

export interface ReportResponseData<T extends ReportType> {
    summary: ReportSummaryMap[T];
    records: ReportRecordsMap[T];
    query: {
        fields: string[];
        filters: ReportFiltersMap[T];
    };
}

export class CdrApiService {

    static async fetchDefinitions(): Promise<DefinitionsData> {
        const response = await api.get<ApiResponse<DefinitionsData>>(`${import.meta.env.VITE_CDR_BASE_API_URL}/report/definitions`)
        return response.data

    }


    static async fetchData<T extends keyof ReportFiltersMap>(params: DataApiParams) {
        const endpointTypes = {
            calls: "cdr",
            queues: "qdr",
            agents: "agents",
            users: "users"
        }
        const { reportType, fields, filters, sortBy, sortOrder } = params;

        const limit = filters.limit || 500;
        const offset = filters.offset || 0;

        const { groupBy: ___, ...apiFilters } = filters;


        const queryString = qs.stringify(
            {
                filters: apiFilters,
                ...(fields.length > 0 && { fields }),
            },
            { encode: false }
        );

        const endpoint = `${import.meta.env.VITE_CDR_BASE_API_URL}/${endpointTypes[reportType as ReportType]}?${queryString}`;

        const response = await api.get(endpoint);
        if (response.code !== 200) {
            throw new Error(response.message);
        }
        return response.data;
    }


    static async fetchDataWithExport(params: DataApiParams) {
        const endpointTypes = {
            calls: "cdr",
            queues: "qdr",
            agents: "agents",
            users: "users"
        }

        const { fields, export: exportType, filters, reportType } = params;

        const queryString = qs.stringify(
            {
                filters: filters,
                ...(fields.length > 0 && { fields }),
                export: exportType
            },
            { encode: false }
        );

        const endpoint = `${import.meta.env.VITE_CDR_BASE_API_URL}/${endpointTypes[reportType as ReportType]}?${queryString}`;

        const response = await api.get<Blob>(endpoint);

        return response

    }

    static async fetchSummary(params: SummaryApiParams) {
        const { reportType, summaryFields, filters } = params;
        const endpointTypes = {
            calls: "cdr",
            queues: "qdr",
            agents: "agents",
            users: "users"
        }

        const queryParams = qs.stringify({
            filters: { ...filters, groupby: filters.groupby || "hour" },
            fields: summaryFields,
        }, { encode: false });

        const endpoint = `${import.meta.env.VITE_CDR_BASE_API_URL}/${endpointTypes[reportType as ReportType]}/${reportType === "users" ? "summary" : "stats"}?${queryParams}`;

        const response = await api.get(endpoint);
        return response;
    }
}
