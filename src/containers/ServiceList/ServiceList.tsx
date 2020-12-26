import { Table } from "@/components";
import { getServiceList } from "@/shared/actions";
import { Service } from "@/shared/types";
import { get } from "lodash";

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
  return (
    <Wrapper>
      <Table<Service>
        columns={serviceListColumnsMemo}
        data={get(data, "data", [])}
        isLoading={isLoading}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ServiceList;
