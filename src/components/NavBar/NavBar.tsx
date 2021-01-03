import React, { FC, useMemo, useRef, useState } from "react";
import { logout } from "@/shared/actions";
import { AppLogo } from "@/shared/assets/svg";
import { useAuthContext } from "@/shared/context";
import { RouteUrl } from "@/shared/enums";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { media } from "@/shared/utils";

interface OwnProps {}

type Props = OwnProps;

const NavBar: FC<Props> = () => {
  const { t } = useTranslation(["auth", "pages"]);
  const { setUser } = useAuthContext();
  const [isOpenMobileMenu, toggleIsOpenMobileMenu] = useState(false);
  const [logoutHandler] = useMutation(logout);

  const onClickLogout = async () => {
    try {
      await logoutHandler();
      setUser(null);
    } catch (error) {
      throw new Error(error);
    }
  };

  const NAV_LINKS = [
    {
      link: RouteUrl.ServiceList,
      label: t("pages:serviceList"),
    },
    {
      link: "/logout",
      label: t("auth:logout"),
      onClick: onClickLogout,
    },
    {
      link: RouteUrl.NewService,
      label: t("pages:newService"),
      type: "button",
    },
  ];

  const onMenuBarClickHandler = () => {
    toggleIsOpenMobileMenu(!isOpenMobileMenu);
  };

  const onLickClickHandler = (callback?: () => void) => {
    toggleIsOpenMobileMenu(false);
    if (callback) {
      callback();
    }
  };

  const navLinks = useMemo(
    () =>
      NAV_LINKS.map((link) => {
        const onClickParam = () => onLickClickHandler(link.onClick);
        if (link.type === "button") {
          return (
            <NavBtnLink to={link.link} onClick={onClickParam} key={link.link}>
              {link.label}
            </NavBtnLink>
          );
        }
        return (
          <NavLink to={link.link} key={link.link} onClick={onClickParam}>
            {link.label}
          </NavLink>
        );
      }),
    []
  );

  return (
    <>
      <Nav>
        <NavLink to="/">
          <AppLogo />
        </NavLink>
        <BarsWrapper onClick={onMenuBarClickHandler}>
          <MenuIcon />
        </BarsWrapper>
        <NavMenu>{navLinks}</NavMenu>
      </Nav>
      <MobileNavMenu isOpen={isOpenMobileMenu}>
        <LinksWrapper>{navLinks}</LinksWrapper>
      </MobileNavMenu>
    </>
  );
};

const Nav = styled.nav`
  background: ${({ theme }) => theme.color.primary};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0.5rem calc((100vw - 1000px) / 2); IF YOU WANT TO HAVE MAX WIDTH */
  padding: 0.5rem;
  z-index: 10;
`;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

const BarsWrapper = styled.div`
  display: none;

  svg {
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    display: inline-flex;
    position: absolute;
    cursor: pointer;
    right: 20px;

    svg {
      font-size: 2.2rem;
    }
  }
`;

interface MobileNavMenuProps {
  isOpen: boolean;
}
const MobileNavMenu = styled.div<MobileNavMenuProps>`
  background: ${({ theme }) => theme.color.primary};
  transition: 0.5s;
  overflow: hidden;
  height: ${({ isOpen }) => (isOpen ? "fit-content" : 0)}px;

  ${media.tablet`
      display: none;
  `}
`;

const LinksWrapper = styled.div`
  padding: 10px 0 10px;

  a {
    margin-bottom: 15px;
  }
`;

const NavMenu = styled.div`
  display: none;

  ${media.tablet`
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 24px;
      width: 100vw;
      white-space: nowrap;
  `}
`;

const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 14px;
  display: inline-block;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }

  ${media.tablet`
    margin-left: 24px;
  `}
`;
export default NavBar;
