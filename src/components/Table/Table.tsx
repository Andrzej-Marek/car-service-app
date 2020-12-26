import React, { PropsWithChildren } from "react";
import { TableColumn } from "@/shared/types";
import { useTable } from "react-table";
import styled from "styled-components";
import { LoadingSpinner } from "..";
import { theme } from "@/shared/constants";

interface OwnProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  isLoading?: boolean;
  withFooter?: boolean;
}

type Props<T> = OwnProps<T>;

const Table = <T extends {}>({
  data,
  columns,
  isLoading = false,
  withFooter = false,
}: PropsWithChildren<Props<T>>) => {
  const dataToTable = isLoading ? [] : data;

  const {
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
    getTableProps,
  } = useTable<T>({
    columns,
    data: dataToTable,
  });

  return (
    <TableWrapper>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                //@ts-ignore
                <StyledTh {...column.getHeaderProps()}>
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
        {footerGroups && withFooter && rows.length > 0 && (
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
      {isLoading && (
        <SpinnerWrapper>
          <LoadingSpinner color={theme.color.primary} />
        </SpinnerWrapper>
      )}
    </TableWrapper>
  );
};

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const TableWrapper = styled.div`
  padding: 1rem;
  /* display: inline-flex; */
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
  padding: 15px 0.5rem;
  background: #fafafa;
  border-bottom: 1px solid #f0f0f0;
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
  padding: 15px 0.5rem;
  background: #fafafa;
  font-weight: 700;
`;

export default Table;
