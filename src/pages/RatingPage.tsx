import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { RatingList } from "../components/RatingList";

import { UserInfo } from "../components/RatingList";

import { pageFade } from "../animations";

export const RatingPage: React.FC = () => {
  return (
    <StyledRatingPage variants={pageFade} exit="exit">
      <RatingList />
    </StyledRatingPage>
  );
};

const StyledRatingPage = styled(motion.div)`
  flex-grow: 1;
`;
