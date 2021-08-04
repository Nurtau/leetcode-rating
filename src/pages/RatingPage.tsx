import React from "react";
import { motion } from "framer-motion";
import { RatingList } from "../components/RatingList";

import { UserInfo } from "../components/RatingList";

import { pageFade } from "../animations";

export interface RatingPageProps {
  usersRating: UserInfo[];
  setUsersRating: (users: UserInfo[]) => void;
}

export const RatingPage: React.FC<RatingPageProps> = ({
  usersRating,
  setUsersRating,
}) => {
  return (
    <motion.div variants={pageFade} exit="exit">
      <RatingList usersRating={usersRating} setUsersRating={setUsersRating} />
    </motion.div>
  );
};
