import React from "react";
import { motion } from "framer-motion";
import { RatingList } from "../components/RatingList";

import { UserInfo } from "../components/RatingList";

import { ratingPageFade } from "../animations";

export interface RatingPageProps {
  usersRating: UserInfo[];
  setUsersRating: (users: UserInfo[]) => void;
}

export const RatingPage: React.FC<RatingPageProps> = ({
  usersRating,
  setUsersRating,
}) => {
  return (
    <motion.div variants={ratingPageFade} exit="exit">
      <RatingList usersRating={usersRating} setUsersRating={setUsersRating} />
    </motion.div>
  );
};
