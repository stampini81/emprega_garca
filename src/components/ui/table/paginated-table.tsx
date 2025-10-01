import { useSearchParams } from "react-router-dom";
import { CustomPagination } from "./custom-pagination";
import { BaseTable, TableHeaderType, TableRowType } from "./base-table";
import { DataPagination } from "@/types/api/responses/data-pagination";
import { KeyUtil } from "@/utils/key-util";

interface PaginatedTableProps<T> {
  data?: DataPagination<T>;
  tableHeaders: TableHeaderType[];
  buildTableRow(value: T): TableRowType;
  isLoading?: boolean;
  isSelectable?: boolean;
  onSelectAll?: () => void;
  onRemoveAll?: () => void;
  className?: string;
}

export function PaginatedTable<T>({
  data,
  tableHeaders,
  buildTableRow,
  isLoading = false,
  isSelectable = false,
  onSelectAll,
  onRemoveAll,
  className = "",
}: PaginatedTableProps<T>) {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  function buildTableData(data: T[]): TableRowType[] {
    return data.map((value) => buildTableRow(value));
  }

  return (
    <>
      {isLoading ? (
        <p className="font-medium text-lg">Carregando informações...</p>
      ) : (
        <div className={`w-11/12 block mx-auto mt-5 ${className}`}>
          {data && data.data.length ? (
            <>
              <BaseTable
                tableHeaders={tableHeaders}
                tableRows={buildTableData(data.data)}
                isSelectable={isSelectable}
                onSelectAll={onSelectAll}
                onRemoveAll={onRemoveAll}
              />

              <CustomPagination
                page={page}
                perPage={data.data.length || 0}
                totalItems={data.total || 0}
                totalPages={data.lastPage || 0}
                key={KeyUtil.generateRandomKey()}
              />
            </>
          ) : (
            <div className="text-center">Nenhum registro encontrado</div>
          )}
        </div>
      )}
    </>
  );
}
