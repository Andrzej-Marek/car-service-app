import { Button, ButtonProps } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {}

type Props = OwnProps & ButtonProps;

const AddNewElementButton: FC<Props> = ({ children, ...rest }) => {
  return (
    <Wrapper>
      <Button {...rest} variant="contained">
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
