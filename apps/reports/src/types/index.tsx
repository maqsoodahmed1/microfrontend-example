import { IStatisticsViewType } from "../store/slices/filter.slice";

export interface ApiResponse<T> {
    code: number;
    message: string;
    data: T;
  }
  
  export interface FilterValue {
    label: string;
    value: string;
  }

  export type FiltersRoute = 'analytics' | 'reports';
  
  export interface FilterDefinition {
    label: string;
    type: 'string' | 'select' | 'daterange' | 'timerange' | 'months' | 'weekdays' | 'monthdays' | 'timezone' | 'iso31661alpha2' | 'boolean' | 'did' | 'app' | 'appid' | 'extension' | 'queue' | 'agent' | 'exitreason' | 'groupby' | 'numberrange';
    multiple?: boolean;
    values?: FilterValue[];
  }
  
  // Report Definition Types
  export interface ReportDefinition {
    fields: Record<string, string>;
    defaultFields: string[];
    summaryFields: Record<string, string>;
    defaultSummaryFields: string[];
    filters: Record<string, FilterDefinition>;
    summaryFilters: Record<string, FilterDefinition>;
  }
  
  export interface DefinitionsData {
    calls: ReportDefinition;
    queues: ReportDefinition;
    users: ReportDefinition;
    agents: ReportDefinition;
  }
  
  // Field Types
  export interface FieldItem {
    id: string;
    label: string;
  }
  
  export type DateRange = string;
  export type TimeRange = string;
  
  // Redux State Types
  export interface DynamicFiltersState {
    filters: Record<FiltersRoute, Record<string, any>>;
    previouslyAppliedFilters: {
      filters: Record<string, any> | null;
      filterType: ReportType | null;
      statisticsType: IStatisticsViewType | null
    } | null;

    filterType: Record<FiltersRoute, ReportType>;
  
    definitions: DefinitionsData | null;
  
    loading: {
      definitions: boolean;
      data: boolean;
      summary: boolean;
    };
  }
  
  export interface DataApiParams {
    reportType: ReportType;
    fields: string[];
    filters: Record<string, any>;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    export?: 'csv' | 'json';
  }
  
  export interface SummaryApiParams {
    reportType: ReportType;
    summaryFields: string[];
    filters: Record<string, any>;
  }
  
  export interface DataApiResponse {
    data: any[];
    pagination: {
      limit: number;
      offset: number;
      total: number;
      hasMore: boolean;
    };
  }
  
  export interface SummaryApiResponse {
    summary: Record<string, number | string>;
    groupedData?: Array<{
      group: string;
      data: Record<string, number | string>;
    }>;
  }
  
  export type ReportType = 'calls' | 'queues' | 'users' | 'agents';
  