import React, { PropsWithChildren } from "react";
import { TableColumn } from "@/shared/types";
import { useTable } from "react-table";
import styled from "styled-components";

interface OwnProps<T> {
  columns: TableColumn<T>[];
  data: T[];
}

type Props<T> = OwnProps<T>;

const Table = <T extends {}>({
  data,
  columns,
}: PropsWithChildren<Props<T>>) => {
  const { headerGroups, rows, prepareRow, footerGroups } = useTable<T>({
    columns,
    data,
  });

  return (
    <TableWrapper>
      <table>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                //@ts-ignore
                <StyledTh {...column.getHeaderProps()} style={column.styles}>
                  {column.render("Header")}
                </StyledTh>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <StyledBodyTr {...row.getRowProps()} isEven={!!(index % 2)}>
                {row.cells.map((cell) => {
                  return (
                    <StyledTd {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </StyledTd>
                  );
                })}
              </StyledBodyTr>
            );
          })}
        </tbody>
        {footerGroups && (
          <tfoot>
            {footerGroups.map((group) => (
              <tr {...group.getFooterGroupProps()}>
                {group.headers.map((column) => (
                  <StyledFooterTd {...column.getFooterProps()}>
                    {column.render("Footer")}
                  </StyledFooterTd>
                ))}
              </tr>
            ))}
          </tfoot>
        )}
      </table>
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  padding: 1rem;
  display: block;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  table {
    border-spacing: 0;
    width: 100%;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

const StyledTh = styled.th`
  text-align: left;
  padding: 10px 0.5rem;
`;

interface StyledBodyTrProps {
  isEven: boolean;
}
const StyledBodyTr = styled.tr<StyledBodyTrProps>`
  background: ${({ theme, isEven }) =>
    isEven ? theme.color.white : theme.color.lightBlue};
  td {
    padding: 20px 0.5rem;
  }
`;

const StyledTd = styled.td`
  padding: 10px 0.5rem;
`;
const StyledFooterTd = styled.td`
  padding: 10px 0.5rem;
  font-weight: 700;
`;

export default Table;
