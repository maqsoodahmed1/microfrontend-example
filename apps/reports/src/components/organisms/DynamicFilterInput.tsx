import DPInput from "../../../../parent/src/components/shared/atoms/dp-input";
import DPSelect from "../../../../parent/src/components/shared/atoms/dp-select/index.tsx";
import FloatingLabel from "../../../../parent/src/components/shared/atoms/floating-label";
import RangeNumberInput from "../../../../parent/src/components/shared/atoms/range-number-input.tsx";
import { FilterDefinition } from "../../types";

import IsoCountryList from "../../data/iso31661alpha2.json";
import TimeZonesList from "../../data/timezones.json";


export interface DynamicFilterInputProps {
    filterKey: string;
    onChange: (filterKey: string, value: any) => void;
    defaultValue?: any;
    // selectedApp?: keyof AppData; // todo: add this later
    filterDefinition: FilterDefinition;
}

export default function DynamicFilterInput({
    filterKey,
    onChange,
    defaultValue,
    // selectedApp, // todo: add this later,
    filterDefinition,
}: DynamicFilterInputProps) {
    const {
        label,
        type: filterType,
        multiple,
        values,
    } = filterDefinition;

    if (!filterDefinition) return null;

    switch (filterType) {
        case "numberrange":
            return (
                <FloatingLabel label={label}>
                    <RangeNumberInput filterKey={filterKey} onChange={onChange} defaultValue={defaultValue} />
                </FloatingLabel>
            );
        case "string":
            return (
                <FloatingLabel label={label}>
                    <DPInput
                        value={defaultValue || ""}
                        placeholder={label}
                        type="text"
                        onChange={(e) => onChange(filterKey, e.target.value)}
                    />
                </FloatingLabel>
            );

        case "select":
            return (
                <FloatingLabel label={label} className="w-full">
                    <DPSelect
                        className="w-full"
                        placeholder={label}
                        allowClear
                        mode={multiple ? "multiple" : undefined}
                        onChange={(value) => onChange(filterKey, value)}
                        defaultValue={defaultValue || null}
                        options={values || []}
                    />
                </FloatingLabel>
            );
        // case "did": // todo: add this later
        //     return (
        //         <Select
        //             style={filtersWrapperStyle}
        //             placeholder={<DropDownTitle label={label} value={""} />}
        //             mode="multiple"
        //             onChange={(value) => onChange(filterKey, value)}
        //             defaultValue={defaultValue || null}
        //             allowClear
        //             options={dids.map((did) => ({
        //                 label: Utils.formatPhoneNumber(did.did),
        //                 value: did.did,
        //             }))}
        //             filterOption={(input, option) =>
        //                 (option?.label || "").toLowerCase().includes(input.toLowerCase())
        //             }
        //         />
        //     );
        // case "app": todo: add this later
        //     return (
        //       <Select
        //         placeholder={<DropDownTitle label={"Applications"} value={""} />}
        //         style={filtersWrapperStyle}
        //         defaultValue={defaultValue || null}
        //         allowClear
        //         onChange={(value) => onChange(filterKey, value)}
        //         options={Object.keys(applicationsGroup).map((key) => ({
        //           label: key,
        //           value: key,
        //         }))}
        //         filterOption={(input, option) =>
        //           (option?.label || "").toLowerCase().includes(input.toLowerCase())
        //         }
        //         showSearch
        //       />
        //     );

        case "exitreason":
            return (
                <FloatingLabel label={label}>
                    <DPSelect
                        placeholder={"Exit Reason"}
                        className="w-full"
                        defaultValue={defaultValue || null}
                        allowClear
                        mode="multiple"
                        onChange={(value) => onChange(filterKey, value)}
                        options={[
                            { label: "TIMEOUT", value: "TIMEOUT" },
                            { label: "NO_AGENT_TIMEOUT", value: "NO_AGENT_TIMEOUT" },
                            { label: "BREAK_OUT", value: "BREAK_OUT" },
                            { label: "EXIT_WITH_KEY", value: "EXIT_WITH_KEY" },
                        ]}
                        filterOption={(input, option) =>
                            (option?.label || "" as any).toLowerCase().includes(input?.toLowerCase() || "")
                        }
                        showSearch
                    />
                </FloatingLabel>
            );
        case "boolean":
            return (
                <FloatingLabel label={label}>
                    <DPSelect
                        placeholder={label}
                        className="w-full"
                        defaultValue={defaultValue || null}
                        allowClear
                        onChange={(value) => onChange(filterKey, value)}
                        options={[
                            { label: "Yes", value: "true" },
                            { label: "No", value: "false" },
                        ]}
                        filterOption={(input, option) =>
                            (option?.label || "" as any).toLowerCase().includes(input?.toLowerCase() || "")
                        }
                        showSearch
                    />
                </FloatingLabel>
            );
        // case "appid":
        //     return (
        //         <Select
        //             placeholder={<DropDownTitle label={"Applications Data"} value={""} />}
        //             style={filtersWrapperStyle}
        //             disabled={!selectedApp}
        //             defaultValue={defaultValue || null}
        //             allowClear
        //             mode="multiple"
        //             onChange={(value) => onChange(filterKey, value)}
        //             options={
        //                 selectedApp && Object.keys(applicationsGroup).includes(selectedApp)
        //                     ? applicationsGroup[selectedApp]?.map((app: any) => ({
        //                         label: app.name,
        //                         value: app.id,
        //                     }))
        //                     : []
        //             }
        //         />
        //     );
        // case "timerange":
        //     return (
        //       <TimePicker.RangePicker
        //         style={{ ...filtersWrapperStyle, minWidth: 280 }}
        //         allowClear
        //         defaultValue={
        //           defaultValue
        //             ? [
        //               dayjs(defaultValue.split("~")[0], "HH:mm"),
        //               dayjs(defaultValue.split("~")[1], "HH:mm"),
        //             ]
        //             : undefined
        //         }
        //         placeholder={["Start Time", "End Time"]}
        //         format="HH:mm A"
        //         onChange={(value: [Dayjs | null, Dayjs | null] | null) => {
        //           if (!value || !value[0] || !value[1]) return;
        //           onChange(
        //             filterKey,
        //             `${value[0].format("HH:mm")}~${value[1].format("HH:mm")}`
        //           );
        //         }}
        //       />
        //     );
        case "weekdays":
            return (
                <FloatingLabel label={label}>
                    <DPSelect
                        placeholder={"Day"}
                        className="w-full"
                        allowClear
                        mode="multiple"
                        defaultValue={defaultValue || null}
                        onChange={(value) => onChange(filterKey, value)}
                        options={[
                            { label: "Monday", value: "monday" },
                            { label: "Tuesday", value: "tuesday" },
                            { label: "Wednesday", value: "wednesday" },
                            { label: "Thursday", value: "thursday" },
                            { label: "Friday", value: "friday" },
                            { label: "Saturday", value: "saturday" },
                            { label: "Sunday", value: "sunday" },
                        ]}
                    />
                </FloatingLabel>
            );
        case "months":
            return (
                <FloatingLabel label={label}>
                    <DPSelect
                        placeholder={"Month"}
                        className="w-full"
                        allowClear
                        mode="multiple"
                        defaultValue={defaultValue || null}
                        onChange={(value) => onChange(filterKey, value)}
                        options={[
                            { label: "January", value: "january" },
                            { label: "February", value: "february" },
                            { label: "March", value: "march" },
                            { label: "April", value: "april" },
                            { label: "May", value: "may" },
                            { label: "June", value: "june" },
                            { label: "July", value: "july" },
                            { label: "August", value: "august" },
                            { label: "September", value: "september" },
                            { label: "October", value: "october" },
                            { label: "November", value: "november" },
                            { label: "December", value: "december" },
                        ]}
                    />
                </FloatingLabel>
            );
        case "iso31661alpha2":
            return (
                <FloatingLabel label={label}>
                    <DPSelect
                        placeholder={"Country"}
                        allowClear
                        className="w-full"
                        showSearch
                        defaultValue={defaultValue || null}
                        onChange={(value) => onChange(filterKey, value)}
                        options={Object.keys(IsoCountryList).map((key) => ({
                            label: IsoCountryList[key as keyof typeof IsoCountryList],
                            value: key,
                        }))}
                    />
                </FloatingLabel>
            );
        case "timezone":
            return (
                <FloatingLabel label={label}>
                    <DPSelect
                        placeholder={"Timezone"}
                        allowClear
                        className="w-full"
                        showSearch
                        defaultValue={defaultValue || null}
                        onChange={(value) => onChange(filterKey, value)}
                        options={TimeZonesList.map((timezone) => ({
                            label: timezone,
                            value: timezone,
                        }))}
                    />
                </FloatingLabel>
            );
        // case "agent":
        //     return (
        //       <Select
        //         style={filtersWrapperStyle}
        //         placeholder={<DropDownTitle label={"Agent"} value={""} />}
        //         allowClear
        //         showSearch
        //         filterOption={(input, option) =>
        //           (option?.label ?? "").toString().toLowerCase().includes(input.toLowerCase())
        //         }
        //         mode="multiple"
        //         defaultValue={defaultValue || null}
        //         onChange={(value) => onChange(filterKey, value)}
        //         options={Object.values(agents).map((agent: AgentData) => ({
        //           label: agent.description,
        //           value: agent.name,
        //         }))}
        //       />
        //     );
        // case "queue":
        //     return (
        //       <Select
        //         style={filtersWrapperStyle}
        //         placeholder={<DropDownTitle label={"Queue"} value={""} />}
        //         allowClear
        //         showSearch
        //         filterOption={(input, option) =>
        //           (option?.label ?? "").toString().toLowerCase().includes(input.toLowerCase())
        //         }
        //         mode="multiple"
        //         defaultValue={defaultValue || null}
        //         onChange={(value) => onChange(filterKey, value)}
        //         options={applicationsGroup?.queue?.map((queue: any) => ({
        //           label: queue.name,
        //           value: queue.id,
        //         }))}
        //       />
        //     );
        case "monthdays":
            return (
                <FloatingLabel label={label}>
                    <DPSelect
                        placeholder={"Month day"}
                        allowClear
                        className="w-full"
                        mode="multiple"
                        defaultValue={defaultValue || null}
                        onChange={(value) => onChange(filterKey, value)}
                        options={[
                            { label: "1", value: "1" },
                            { label: "2", value: "2" },
                            { label: "3", value: "3" },
                            { label: "4", value: "4" },
                            { label: "5", value: "5" },
                            { label: "6", value: "6" },
                            { label: "7", value: "7" },
                            { label: "8", value: "8" },
                            { label: "9", value: "9" },
                            { label: "10", value: "10" },
                            { label: "11", value: "11" },
                            { label: "12", value: "12" },
                            { label: "13", value: "13" },
                            { label: "14", value: "14" },
                            { label: "15", value: "15" },
                            { label: "16", value: "16" },
                            { label: "17", value: "17" },
                            { label: "18", value: "18" },
                            { label: "19", value: "19" },
                            { label: "20", value: "20" },
                            { label: "21", value: "21" },
                            { label: "22", value: "22" },
                            { label: "23", value: "23" },
                            { label: "24", value: "24" },
                            { label: "25", value: "25" },
                            { label: "26", value: "26" },
                            { label: "27", value: "27" },
                            { label: "28", value: "28" },
                            { label: "29", value: "29" },
                            { label: "30", value: "30" },
                            { label: "31", value: "31" },
                        ]}
                    />
                </FloatingLabel>
            );
        // case "daterange":
        //     return (
        //       <DateSelector
        //         label={label}
        //         onChange={(value) => onChange(filterKey, value)}
        //       />
        //     );
        // case "extension":
        //     return (
        //         <Select
        //             style={filtersWrapperStyle}
        //             placeholder={<DropDownTitle label={"Extension"} value={""} />}
        //             defaultValue={defaultValue || null}
        //             mode="multiple"
        //             allowClear
        //             onChange={(value) => onChange(filterKey, value)}
        //             options={
        //                 applicationsGroup.extension
        //                     ? applicationsGroup.extension
        //                         .map((item: any) => ({
        //                             label: item.extension,
        //                             value: item.extension,
        //                         }))
        //                         .sort((a: any, b: any) => Number(a.value) - Number(b.value))
        //                     : []
        //             }
        //         />
        //     );
        case "groupby":
            return (
                <FloatingLabel label={label}>
                    <DPSelect
                    className="w-full"
                        placeholder={"Group By"}
                        defaultValue={defaultValue || null}
                        allowClear
                        onChange={(value) => onChange(filterKey, value)}
                        options={[
                            { label: "Hour", value: "hour" },
                            { label: "Day", value: "day" },
                            { label: "Month", value: "month" },
                        ]}
                    />
                </FloatingLabel>
            );
    }
}
