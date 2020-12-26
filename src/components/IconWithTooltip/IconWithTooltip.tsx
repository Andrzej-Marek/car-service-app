import React, { FC, ReactNode } from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import styled from "styled-components";

interface OwnProps {
  icon: ReactNode;
  tooltipText?: string;
  color?: string;
  onClick?: () => void;
}

type Props = OwnProps;

const IconWithTooltip: FC<Props> = ({ color, icon, tooltipText, onClick }) => {
  const actionButton = <IconButton>{icon}</IconButton>;
  const withTooltip = (
    <Tooltip title={tooltipText || ""}>{actionButton}</Tooltip>
  );
  return (
    <Wrapper color={color} onClick={onClick}>
      {tooltipText ? withTooltip : actionButton}
    </Wrapper>
  );
};

interface WrapperProps {
  color?: string;
}
const Wrapper = styled.span<WrapperProps>`
  svg {
    color: ${({ color }) => color && color};
  }
`;
export default IconWithTooltip;
