import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { DynamicFiltersState, ReportType, DataApiParams, SummaryApiParams, FiltersRoute } from '../../../src/types';
import { CdrApiService } from '../../services/cdr.service';
import dayjs from 'dayjs';

export type IStatisticsViewType = "barView" | "tableView"


const getDefaultFilters = (reportType: ReportType) => {
  const dateRange = `${dayjs().startOf('day').toISOString()}~${dayjs().endOf('day').toISOString()}`;
  const baseFilters = { limit: 500, offset: 0, groupby: 'hour' };
  if (reportType === 'queues') return { ...baseFilters, entertime: dateRange };
  return { ...baseFilters, datetime: dateRange };
};

const initialState: DynamicFiltersState = {
  filters: {
    analytics: getDefaultFilters('calls'),
    reports: getDefaultFilters('calls'),
  },
  previouslyAppliedFilters: {
    filters: null,
    filterType: null,
    statisticsType: null
  },
  filterType: {
    analytics: 'calls',
    reports: 'calls',
  },
  definitions: null,
  loading: { definitions: false, data: false, summary: false },
};

export const fetchDefinitions = createAsyncThunk(
    'dynamicFilters/fetchDefinitions',
    async () => {
        const data = await CdrApiService.fetchDefinitions();
        return data;
    }
);

export const fetchReportData = createAsyncThunk(
    'dynamicFilters/fetchReportData',
    async (params: DataApiParams) => {
        const data = await CdrApiService.fetchData(params);
        return data;
    }
);

export const fetchReportSummary = createAsyncThunk(
    'dynamicFilters/fetchReportSummary',
    async (params: SummaryApiParams) => {
        const data = await CdrApiService.fetchSummary(params);
        return data;
    }
);

const dynamicFiltersSlice = createSlice({
    name: 'dynamicFilters',
    initialState,
    reducers: {
        setFilterType: (state, action: PayloadAction<{ route: FiltersRoute; value: ReportType }>) => {
          const { route, value } = action.payload;
          const existingGroupby = state.filters[route]?.groupby;
          state.filterType[route] = value;
          const defaultFilters = getDefaultFilters(value);
          state.filters[route] = {
            ...defaultFilters,
            groupby: existingGroupby || defaultFilters.groupby,
          };
        },

        setFilter: (state, action: PayloadAction<{ route: FiltersRoute; filterId: string; value: any }>) => {
          const { route, filterId, value } = action.payload;
          state.filters[route][filterId] = value;
        },
        setMultipleFilters: (state, action: PayloadAction<{ route: FiltersRoute; values: Record<string, any> }>) => {
          const { route, values } = action.payload;
          state.filters[route] = { ...state.filters[route], ...values };
        },
        clearFilter: (state, action: PayloadAction<{ route: FiltersRoute; filterId: string }>) => {
          delete state.filters[action.payload.route][action.payload.filterId];
        },
        clearAllFilters: (state, action: PayloadAction<{ route: FiltersRoute }>) => {
          const { route } = action.payload;
          state.filters[route] = {};
        },
        setPreviouslyAppliedFilters: (state,  action: PayloadAction<{
          filters: Record<string, any> | null;
          filterType: ReportType | null;
          statisticsType: IStatisticsViewType
        } | null>) => {
          state.previouslyAppliedFilters = action.payload;
        },
        
        clearpreviouslyAppliedFilters: (state) => {
          state.previouslyAppliedFilters = null;
        },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchDefinitions.pending, (state) => {
          state.loading.definitions = true;
        })
        .addCase(fetchDefinitions.fulfilled, (state, action) => {
          state.loading.definitions = false;
          state.definitions = action.payload;
          const analyticsType = state.filterType.analytics;
          const reportsType = state.filterType.reports;
          const analyticsDef = action.payload[analyticsType];
          const reportsDef = action.payload[reportsType];
          state.filters.analytics = getDefaultFilters(analyticsType);
          state.filters.reports = getDefaultFilters(reportsType);
        })
        .addCase(fetchDefinitions.rejected, (state) => {
          state.loading.definitions = false;
        })
        .addCase(fetchReportData.pending, (state) => {
          state.loading.data = true;
        })
        .addCase(fetchReportData.fulfilled, (state) => {
          state.loading.data = false;
        })
        .addCase(fetchReportData.rejected, (state) => {
          state.loading.data = false;
        })
        .addCase(fetchReportSummary.pending, (state) => {
          state.loading.summary = true;
        })
        .addCase(fetchReportSummary.fulfilled, (state) => {
          state.loading.summary = false;
        })
        .addCase(fetchReportSummary.rejected, (state) => {
          state.loading.summary = false;
        });
    },
});

export const {
    setFilterType,
    setFilter,
    clearFilter,
    setMultipleFilters,
    clearAllFilters,
    setPreviouslyAppliedFilters,
    clearpreviouslyAppliedFilters
} = dynamicFiltersSlice.actions;

export default dynamicFiltersSlice.reducer;
