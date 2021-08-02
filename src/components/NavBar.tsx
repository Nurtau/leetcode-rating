import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../assets/Logo";
import { NavLine } from "./NavLine";

export const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <RightMenu>
        <div>
          <Link to="/">Rating</Link>
          <NavLine isActive={pathname === "/"} />
        </div>
        <div>
          <Link to="/settings">Settings</Link>
          <NavLine isActive={pathname === "/settings"} />
        </div>
      </RightMenu>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
`;

const RightMenu = styled.div`
  display: flex;
	a {
		display: block;
		margin-bottom: 5px;
	}
`;
