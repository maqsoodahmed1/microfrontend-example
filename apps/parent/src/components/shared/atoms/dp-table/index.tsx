import { ConfigProvider, Table, type TableProps } from "antd";
import { cn } from "../../../../helpers/general.helpers";
import { SortOrder } from "antd/es/table/interface";
import { SortIconAsc, SortIconDsc } from "../../../../assets/icons";

const defaultSortIcon = ({ sortOrder }: { sortOrder: SortOrder }) => {
    if (sortOrder === "ascend") return <SortIconAsc />;
    if (sortOrder === "descend") return <SortIconDsc />;
    return <SortIconAsc />;
};

export interface DPTableProps extends TableProps {
    showPagination?: boolean;
}

export default function DPTable({
    scroll,
    showPagination = true,
    pagination,
    className,
    ...props
}: DPTableProps) {
    const enhancedColumns = props.columns?.map((col) =>
        col.sorter
            ? {
                ...col,
                sortIcon: col.sortIcon || defaultSortIcon, // apply if missing
                sortDirections: col.sortDirections || ["ascend", "descend"],
            }
            : col
    );


    return (
        <ConfigProvider theme={{
            components: {
                Pagination: {
                    borderRadius: 4,
                }
            }
        }}>
            <Table
                className={cn(
                    `w-full 
  
                    [&_*]:!text-xs 
                    xl:[&_*]:!text-xs

                    [&_.ant-table-cell]:!font-semibold 
                    [&_.ant-table-thead>tr>th]:!font-medium   
                    [&_.ant-table-cell]:!py-2.5
                    [&_.ant-table-cell]:!px-6
                    [&_.ant-pagination_*]:!font-semibold 
                    [&_.ant-pagination-item_*]:!text-dp-gray 
                    [&_.ant-select-selector]:!text-dp-gray 
                    [&_.ant-select-selector]:!rounded-md
                    [&_.ant-pagination-item-ellipsis]:!text-dp-gray 
                  
                    [&_.ant-pagination]:!py-4 
                    [&_.ant-pagination]:!px-4 
                    [&_.ant-pagination]:!my-0 
                    [&_.ant-pagination_.ant-pagination-total-text]:order-3 
                    [&_.ant-pagination_.ant-pagination-total-text]:ml-3 
                    [&_.ant-pagination_.ant-pagination-total-text]:mt-2.5 
                    [&_.ant-pagination-item]:!px-3 
                    [&_.ant-pagination-item-link]:!px-6 
                    [&_.ant-select-single]:!h-[34px] 
                    [&_.ant-pagination-item-ellipsis]:!mr-5 
                  
                    [&_.ant-pagination]:!bg-white 
                    [&_.ant-pagination_.ant-pagination-item-active]:!border-primary 
                    [&_.ant-pagination-item]:!border-dp-gray-semi/50 
                    [&_.ant-pagination-item-link]:!border-dp-gray-semi/50 
                    [&_.ant-pagination-item-link]:!text-dp-gray 
                  
                    [&_.ant-pagination-item]:!grid 
                    [&_.ant-pagination-item]:!place-items-center 
                    [&_.ant-pagination-jump-next]:!grid 
                    [&_.ant-pagination-jump-prev]:!grid 
                    [&_.ant-pagination-jump-next]:!place-items-center 
                    [&_.ant-pagination-jump-prev]:!place-items-center

                    [&_.ant-spin-dot]:!w-[20px]
                    [&_.ant-spin-dot]:!h-[20px]
                    `,
                    className
                )}
                {...props}
                pagination={{ position: ["bottomLeft"], showLessItems: true, ...pagination }}
                columns={enhancedColumns}
                scroll={{ ...scroll, x: scroll?.x ?? 300 }}
            />
        </ConfigProvider>
    );
}
