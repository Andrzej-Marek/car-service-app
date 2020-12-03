import { get } from "lodash";
import styled from "styled-components";

interface FieldWrapperProps {
  space?: {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  };
}
export const FieldWrapper = styled.div<FieldWrapperProps>`
  width: 100%;

  margin-right: ${({ space }) => get(space, "right", false) || 0}px;
  margin-top: ${({ space }) => get(space, "top", false) || 0}px;
  margin-left: ${({ space }) => get(space, "left", false) || 0}px;
  margin-bottom: ${({ space }) => get(space, "bottom", false) || 0}px;
`;
