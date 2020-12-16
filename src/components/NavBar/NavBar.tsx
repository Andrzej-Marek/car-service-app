import { logout } from "@/shared/actions";
import { AppLogo } from "@/shared/assets/svg";
import { useAuthContext } from "@/shared/context";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import styled from "styled-components";

interface OwnProps {}

type Props = OwnProps;

const NavBar: FC<Props> = () => {
  const { t } = useTranslation("auth");
  const { setUser } = useAuthContext();
  const [logoutHandler] = useMutation(logout);

  const onClickLogout = async () => {
    try {
      await logoutHandler();
      setUser(null);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <AppLogo />
        <LinksWrapper>
          <StyledLink onClick={onClickLogout}>{t("auth:logout")}</StyledLink>
        </LinksWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 64px;
  width: 100%;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled.div`
  padding: 0 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinksWrapper = styled.div`
  padding: 0 15px;
  display: flex;
  align-items: center;
`;

const StyledLink = styled.div`
  margin: 0 10px;
  color: ${({ theme }) => theme.color.white};

  :hover {
    cursor: pointer;
  }
`;

export default NavBar;
