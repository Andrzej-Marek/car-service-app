import { ENV } from "@/shared/constants";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface OwnProps {
  createdServiceId: string;
}

type Props = OwnProps;

const ServisLinkForClient: FC<Props> = ({ createdServiceId }) => {
  const { t } = useTranslation("notifications");
  const url = `${ENV.CLIENT_URL}/${createdServiceId}`;
  return (
    <Wrapper>
      <Label>{t("servisLinkForClient")}</Label>
      <div>
        <a href={url} target="_blank">
          {url}
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Label = styled.div`
  margin: 10px 0;
`;

export default ServisLinkForClient;
