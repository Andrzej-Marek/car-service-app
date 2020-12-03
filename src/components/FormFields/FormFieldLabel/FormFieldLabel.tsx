import { media } from "@/shared/utils";
import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {
  text: string;
}

type Props = OwnProps;

const FormFieldLabel: FC<Props> = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

const Wrapper = styled.div`
  color: ${({ theme }) => theme.color.grey.dark};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 700;
  margin: 10px 0;

  ${media.tablet`
        font-size: ${({ theme }) => theme.fontSize.medium};
        margin: 20px 0;
    `}
`;

export default FormFieldLabel;
