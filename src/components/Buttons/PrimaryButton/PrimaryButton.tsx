import { Button, ButtonProps } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {}

type Props = OwnProps & ButtonProps;

const PrimaryButton: FC<Props> = ({ children, ...rest }) => {
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
    background: ${({ theme }) => theme.color.primary};
    width: 100%;
    height: 50px;
    color: ${({ theme }) => theme.color.white};
  }
`;

export default PrimaryButton;
