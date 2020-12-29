import { Table } from "@/components";
import { getServiceList } from "@/shared/actions";
import { Service } from "@/shared/types";
import { get, orderBy } from "lodash";
import React, { FC, useMemo } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { serviceListColumns } from "./serviceList.columns";

interface OwnProps {}

type Props = OwnProps;

const ServiceList: FC<Props> = () => {
  const { isLoading, isError, data } = useQuery("serviceList", getServiceList);

  const serviceListColumnsMemo = useMemo(() => serviceListColumns, []);

  if (isError) {
    return <div>Problem z pobieraniem danych</div>;
  }

  const sortedTableData = useMemo(() => {
    const servicesList = get(data, "data", []);

    return orderBy(
      servicesList,
      (service) => {
        return new Date(service.createdAt);
      },
      ["desc"]
    );
  }, [data]);

  return (
    <Wrapper>
      <Table<Service>
        columns={serviceListColumnsMemo}
        data={sortedTableData}
        isLoading={isLoading}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ServiceList;
