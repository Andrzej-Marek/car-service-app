import React from "react";
import { Service, TableColumn } from "@/shared/types";
import { Cell } from "react-table";
import { TimeService } from "@/shared/services";
import { TableActionCell } from "@/components";
import EditIcon from "@material-ui/icons/Edit";
import DescriptionIcon from "@material-ui/icons/Description";
import { ENV, theme } from "@/shared/constants";
import { globalTranslation } from "@/shared/utils";
import { RouteUrl } from "@/shared/enums";
import { renderServiceLink } from "@/shared/helpers";
import { get } from "lodash";

export const serviceListColumns: TableColumn<Service>[] = [
  {
    Header: "lp.",
    styles: {
      width: "20px",
    },
    Cell: (data: { row: { index: number } }) => <>{data.row.index + 1}</>,
  },
  {
    Header: globalTranslation("vehicleSpecification:make"),
    accessor: (row) => row.vehicleDetails.make,
    styles: {
      width: "140px",
    },
  },
  {
    Header: globalTranslation("vehicleSpecification:model"),
    accessor: (row) => row.vehicleDetails.model,
    styles: {
      width: "140px",
    },
  },
  {
    Header: globalTranslation("vehicleSpecification:vinNumber"),
    accessor: (row) => row.vehicleDetails.vinNumber,
    styles: {
      width: "140px",
    },
  },
  {
    Header: globalTranslation("service:serviceId"),
    accessor: (row) => row.serviceId,
    styles: {
      width: "50px",
    },
    Cell: (data: Cell<Service>) => renderServiceLink(data.value),
  },
  {
    Header: globalTranslation("common:createdAt"),
    accessor: (row) => row.createdAt,
    styles: {
      width: "140px",
    },
    Cell: (data: Cell<Service>) => <>{TimeService.toFullDate(data.value)}</>,
  },
  {
    Header: globalTranslation("common:actions"),
    styles: {
      width: "100px",
    },
    Cell: (data: Cell<Service>) => (
      <TableActionCell
        options={[
          {
            color: theme.color.primary,
            icon: <DescriptionIcon />,
            tooltipText: globalTranslation("common:pdfRaport"),
            absoluteLink: `${ENV.BACKEND_URL}${data.row.original.pdfLink}`,
            show: get(data, "row.original.pdfLink") || false,
          },
          {
            color: theme.color.primary,
            icon: <EditIcon />,
            tooltipText: globalTranslation("common:edit"),
            link: `${RouteUrl.EditService}/${data.row.original.serviceId}`,
          },
        ]}
      />
    ),
  },
];
