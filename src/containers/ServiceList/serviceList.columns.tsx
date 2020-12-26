import React from "react";
import { Service, TableColumn } from "@/shared/types";
import { Cell } from "react-table";
import { TimeService } from "@/shared/services";
import { TableActionCell } from "@/components";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { theme } from "@/shared/constants";
import { RouteUrl } from "@/shared/enums";

export const serviceListColumns: TableColumn<Service>[] = [
  {
    Header: "lp.",
    styles: {
      width: "20px",
    },
    Cell: (data: { row: { index: number } }) => <>{data.row.index + 1}</>,
  },
  {
    Header: "Marka",
    accessor: (row) => row.vehicleDetails.make,
    styles: {
      width: "140px",
    },
  },
  {
    Header: "Model",
    accessor: (row) => row.vehicleDetails.model,
    styles: {
      width: "140px",
    },
  },
  {
    Header: "Numer VIN",
    accessor: (row) => row.vehicleDetails.vinNumber,
    styles: {
      width: "140px",
    },
  },
  {
    Header: "Data dodania",
    accessor: (row) => row.createdAt,
    styles: {
      width: "100px",
    },
    Cell: (data: Cell<Service>) => <>{TimeService.toFullDate(data.value)}</>,
  },
  {
    Header: "Akcje",
    styles: {
      width: "100px",
    },
    Cell: () => (
      <TableActionCell
        options={[
          {
            color: theme.color.primary,
            icon: <EditIcon />,
            tooltipText: "Edytuj",
          },
        ]}
      />
    ),
  },
];
