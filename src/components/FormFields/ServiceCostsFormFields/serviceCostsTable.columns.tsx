import React from "react";
import { TableFooterRowSummary } from "@/components";
import { TableColumn, ServiceCostTable } from "@/shared/types";
import { globalTranslation } from "@/shared/utils";
import { CellProps } from "react-table";
import { get } from "lodash";
import { taxRateOptions } from "@/shared/selectOptions";

const TRANSLATION_PATH = "serviceCosts";

const getFooterCurrency = (
  info: React.PropsWithChildren<CellProps<any, any>>
) => {
  return get(info, "rows[0].original.currency", undefined);
};

const getCellCurrency = (
  info: React.PropsWithChildren<CellProps<ServiceCostTable, number>>
) => {
  return get(info, "row.original.currency", undefined);
};

export const serviceCostsTableColumns: TableColumn<ServiceCostTable>[] = [
  {
    Header: globalTranslation(`${TRANSLATION_PATH}:lp`),
    styles: {
      width: "40px",
    },
    Cell: (data: { row: { index: number } }) => <>{data.row.index + 1}</>,
  },
  {
    Header: globalTranslation(`${TRANSLATION_PATH}:title`),
    accessor: "title",
    styles: {
      minWidth: "200px",
      width: "350px",
    },
    maxWidth: 250,
    Footer: () => <>{globalTranslation(`${TRANSLATION_PATH}:summary`)}:</>,
  },
  {
    Header: globalTranslation(`${TRANSLATION_PATH}:quantity`),
    accessor: "quantity",
    Footer: (info) => <TableFooterRowSummary info={info} valueKey="quantity" />,
  },
  {
    Header: globalTranslation(`${TRANSLATION_PATH}:priceNet`),
    accessor: "priceNet",
    styles: {
      minWidth: "100px",
    },
    Cell: (info) => (
      <>
        {info.value.toFixed(2)} {getCellCurrency(info)}
      </>
    ),
    Footer: (info) => (
      <TableFooterRowSummary
        info={info}
        valueKey="priceNet"
        currency={getFooterCurrency(info)}
      />
    ),
  },
  {
    Header: globalTranslation(`${TRANSLATION_PATH}:taxRate`),
    accessor: "taxRate",
    styles: {
      minWidth: "100px",
    },
    Cell: (info) => {
      const { value } = info;
      const selectedOption = taxRateOptions.find(
        (taxRateOptions) => taxRateOptions.value === value
      );
      return <>{selectedOption ? selectedOption.label : "-"}</>;
    },
  },
  {
    Header: globalTranslation(`${TRANSLATION_PATH}:priceGross`),
    accessor: "priceGross",
    styles: {
      minWidth: "100px",
    },
    Cell: (info) => (
      <>
        {info.value.toFixed(2)} {getCellCurrency(info)}
      </>
    ),
    Footer: (info) => (
      <TableFooterRowSummary
        info={info}
        valueKey="priceGross"
        currency={getFooterCurrency(info)}
      />
    ),
  },
  {
    Header: globalTranslation(`${TRANSLATION_PATH}:summary`),
    accessor: "total",
    styles: {
      minWidth: "100px",
    },
    Cell: (info: any) => {
      const total = info.row.values.quantity * info.row.values.priceGross;
      return (
        <>
          {total} {getCellCurrency(info)}
        </>
      );
    },
    Footer: (info) => {
      const total = React.useMemo(
        () => info.rows.reduce((sum, row) => row.values.total + sum, 0),
        [info.rows]
      );

      return (
        <>
          {total} {getFooterCurrency(info)}
        </>
      );
    },
  },
];
