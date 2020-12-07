import { DeleteOutlined } from "@material-ui/icons";
import React, { FC } from "react";

import styled from "styled-components";

interface OwnProps {
  deleteListElement: () => void;
}

type Props = OwnProps;

const ServiceCostsCellAction: FC<Props> = ({ deleteListElement }) => {
  return (
    <Wrapper>
      <StyledDeleteOutlined onClick={deleteListElement} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const StyledDeleteOutlined = styled(DeleteOutlined)`
  color: ${({ theme }) => theme.color.red};
  cursor: pointer;
`;
export default ServiceCostsCellAction;
