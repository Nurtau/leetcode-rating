import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { getNavLineAnimation } from "../animations";

interface NavLineProps {
  isActive: boolean;
}

export const NavLine: React.FC<NavLineProps> = ({ isActive }) => {
  return (
    <StyledNavLine
      variants={getNavLineAnimation(isActive)}
      animate="show"
      initial="hidden"
    />
  );
};

const StyledNavLine = styled(motion.div)`
  height: 0.2rem;
  width: 0%;
  background-color: #ffd369;
`;
