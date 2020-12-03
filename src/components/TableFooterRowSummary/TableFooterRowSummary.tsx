import React, { FC } from "react";
import { Currency } from "@/shared/enums";

interface OwnProps {
  valueKey: string;
  info: any;
  currency?: Currency;
}

type Props = OwnProps;

const MAX_PRECISION_NUMBER = 2;

const TableFooterRowSummary: FC<Props> = ({ info, valueKey, currency }) => {
  // @ts-ignoree
  const total = info.rows.reduce((sum, row) => row.values[valueKey] + sum, 0);

  return (
    <>
      {total.toString().length >= MAX_PRECISION_NUMBER
        ? total.toFixed(2)
        : total}{" "}
      {currency && currency}
    </>
  );
};
export default React.memo(TableFooterRowSummary);
