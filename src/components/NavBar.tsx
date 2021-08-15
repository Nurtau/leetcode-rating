import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../assets/Logo";
import { NavLine } from "./NavLine";

export const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <NavContainer>
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
    </NavContainer>
  );
};
const NavContainer = styled.div`
  width: 100%;
  background-color: #29334183;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
`;

const StyledNav = styled.nav`
  padding: 1.1rem 1.2rem;
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: auto;
  @media (max-width: 1024px) {
    padding: 0.9rem 1.2rem;
  }
  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
  }
`;

const RightMenu = styled.div`
  display: flex;
  a {
    display: block;
    margin: 0;
    margin-bottom: 5px;
  }

  & > div {
    margin-left: 2.5rem;

    @media (max-width: 768px) {
      margin-left: 1.1rem;
    }
  }
`;
