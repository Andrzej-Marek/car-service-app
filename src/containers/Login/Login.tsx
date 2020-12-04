import React, { FC } from "react";
import { AppLogo } from "@/shared/assets/svg";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { LoginForm } from "..";

interface OwnProps {}

type Props = OwnProps;

const Login: FC<Props> = () => {
  const { t } = useTranslation("auth");

  return (
    <Wrapper>
      <AppLogoWrapper>
        <AppLogo />
      </AppLogoWrapper>
      <LoginLabel>{t("auth:login")}</LoginLabel>
      <LoginForm />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px 0;
`;
const AppLogoWrapper = styled.div`
  padding-bottom: 10px;
`;

const LoginLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSize.info};
  margin-bottom: 20px;
  font-weight: 700;
`;
export default Login;
