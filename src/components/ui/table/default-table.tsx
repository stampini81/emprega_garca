import { BaseTable, TableHeaderType, TableRowType } from './base-table';

interface DefaultTableProps<T> {
  data?: T[];
  tableHeaders: TableHeaderType[];
  buildTableRow(value: T): TableRowType;
  isLoading?: boolean;
  className?: string;
}

export function DefaultTable<T>({
  data,
  tableHeaders,
  buildTableRow,
  isLoading = false,
  className = '',
}: DefaultTableProps<T>) {
  function buildTableData(data: T[]): TableRowType[] {
    return data.map((value) => buildTableRow(value));
  }

  return (
    <>
      {isLoading ? (
        <p className='font-medium text-lg'>Carregando informações...</p>
      ) : (
        <div className={`block mx-auto mt-5 ${className}`}>
          {data && data.length ? (
            <BaseTable
              tableHeaders={tableHeaders}
              tableRows={buildTableData(data)}
            />
          ) : (
            <div className='text-center'>Nenhum registro encontrado</div>
          )}
        </div>
      )}
    </>
  );
}
