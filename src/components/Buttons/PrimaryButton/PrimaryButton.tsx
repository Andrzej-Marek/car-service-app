import { LoadingSpinner } from "@/components";
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
        <span> {children} </span> {isLoading && <LoadingSpinner />}
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

    display: flex;
    align-items: center;

    span {
      margin-right: 10px;
    }
  }
`;

export default PrimaryButton;
