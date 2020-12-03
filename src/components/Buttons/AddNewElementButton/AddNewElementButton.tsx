import { Button, ButtonTypeMap, ExtendButtonBase } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {
  onClick: () => void;
}

type Props = OwnProps;

const AddNewElementButton: FC<Props> = ({ onClick, children, ...rest }) => {
  return (
    <Wrapper>
      <Button {...rest} variant="contained" onClick={onClick}>
        {children}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .MuiButtonBase-root {
    background: ${({ theme }) => theme.color.grey.light};
    width: 100%;
    height: 50px;
  }
`;

export default AddNewElementButton;
