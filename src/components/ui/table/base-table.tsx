import { KeyUtil } from '@/utils/key-util';
import { ReactNode } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../table';
import { twMerge } from 'tailwind-merge';

export type TableHeaderType = {
  label: string;
  className?: string;
};

type TableCellType = {
  content: string | ReactNode;
  className?: string;
};

export type TableRowType = {
  className?: string;
  tableCells: TableCellType[];
  onSelect?: () => void;
  onRemove?: () => void;
};

interface BaseTableProps {
  tableHeaders: TableHeaderType[];
  tableRows: TableRowType[];
  isSelectable?: boolean;
  onSelectAll?: () => void;
  onRemoveAll?: () => void;
}

export function BaseTable({ tableHeaders, tableRows }: BaseTableProps) {
  function buildTableHeaders(): ReactNode[] {
    const elements: ReactNode[] = [];

    elements.push(
      ...tableHeaders.map((tableHead) => (
        <TableHead
          key={KeyUtil.generateRandomKey()}
          className={`p-5 text-white ${tableHead.className}`}
        >
          {tableHead.label}
        </TableHead>
      )),
    );

    return elements;
  }

  function buildTableCells(row: TableRowType): ReactNode[] {
    const elements: ReactNode[] = [];

    elements.push(
      ...row.tableCells.map((cell) => (
        <TableCell key={KeyUtil.generateRandomKey()} className={cell.className}>
          {cell.content}
        </TableCell>
      )),
    );

    return elements;
  }

  return (
    <Table className='dark:bg-zinc-950 border rounded-lg w-full'>
      <TableHeader className='bg-secondary'>
        <TableRow key={KeyUtil.generateRandomKey()}>
          {buildTableHeaders()}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableRows.map((tableRow: TableRowType) => {
          return (
            <TableRow
              key={KeyUtil.generateRandomKey()}
              className={twMerge(tableRow.className, 'text-black')}
            >
              {buildTableCells(tableRow)}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
