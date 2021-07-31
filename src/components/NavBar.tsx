import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Logo } from "../assets/Logo";

export const NavBar = () => {
  return (
    <StyledNav>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div>
        <Link to="/" style={{color: "#FFD369"}}>Rating</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;

`;
