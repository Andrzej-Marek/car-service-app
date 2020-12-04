import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface OwnProps {}

type Props = OwnProps;

const FormLink: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  color: ${({ theme }) => theme.color.primary};
  transition: 0.3s;
  font-size: ${({ theme }) => theme.fontSize.small};
  margin-top: 10px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
    transform: scale(1.1);
    font-weight: 700;
  }
`;
export default FormLink;
