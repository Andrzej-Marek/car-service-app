import React, { FC, Fragment } from "react";
import { TableActionCellOptions } from "@/shared/types";
import { IconWithTooltip } from "@/components";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface OwnProps {
  options: TableActionCellOptions[];
}

type Props = OwnProps;

const TableActionCell: FC<Props> = ({ options }) => {
  const displayCorrectIcon = (option: TableActionCellOptions) => {
    const commonProps = {
      icon: option.icon,
      tooltipText: option.tooltipText,
      color: option.color,
    };

    if (option.link) {
      return (
        <Link to={option.link} onClick={option.onClick}>
          <IconWithTooltip {...commonProps} />
        </Link>
      );
    }

    return <IconWithTooltip {...commonProps} onClick={option.onClick} />;
  };
  return (
    <Wrapper>
      {options.map((option, index) => (
        <Fragment key={index}>{displayCorrectIcon(option)}</Fragment>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default TableActionCell;
