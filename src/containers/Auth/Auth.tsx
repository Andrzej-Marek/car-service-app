import React, { FC } from "react";
import { AppLogoBlack } from "@/shared/assets/svg";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { LoginForm } from "..";
import { Modal } from "@/components";

interface OwnProps {}

type Props = OwnProps;

const Auth: FC<Props> = () => {
  const { t } = useTranslation("auth");

  return (
    <Modal isOpen>
      <Wrapper>
        <AppLogoWrapper>
          <AppLogoBlack />
        </AppLogoWrapper>
        <LoginLabel>{t("auth:login")}</LoginLabel>
        <LoginForm />
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  padding: 10px 0;
`;
const AppLogoWrapper = styled.div`
  height: 60px;
  padding-bottom: 20px;
`;

const LoginLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSize.info};
  margin-bottom: 20px;
  font-weight: 700;
`;
export default Auth;
