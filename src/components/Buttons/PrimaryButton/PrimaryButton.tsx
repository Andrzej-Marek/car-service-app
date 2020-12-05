import { Button, ButtonProps } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {
  isLoading?: boolean;
}

type Props = OwnProps & ButtonProps;

const PrimaryButton: FC<Props> = ({ isLoading = false, children, ...rest }) => {
  return (
    <Wrapper>
      <Button {...rest} variant="contained">
        {isLoading && <span>Loading</span>} {children}
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
