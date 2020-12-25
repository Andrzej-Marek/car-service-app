import React, { FC } from "react";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import styled, { keyframes } from "styled-components";
import { theme } from "@/shared/constants";

interface OwnProps {
  color?: string;
}

type Props = OwnProps;

const LoadingSpinner: FC<Props> = ({ color = theme.color.white }) => {
  return (
    <Wrapper color={color}>
      <AutorenewIcon />
    </Wrapper>
  );
};

const spinner = keyframes`
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

interface WrapperProps {
  color: string;
}
const Wrapper = styled.div<WrapperProps>`
  display: inline-flex;
  line-height: 0;

  svg {
    animation: ${spinner} linear 1s infinite;
    color: ${({ theme, color }) => (color ? color : theme.color.white)};
    font-size: ${({ theme }) => theme.iconSize.normal};
  }
`;

export default LoadingSpinner;
