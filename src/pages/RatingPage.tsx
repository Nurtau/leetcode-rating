import React from "react";
import { RatingList } from "../components/RatingList";

import { UserInfo } from "../components/RatingList";

export interface RatingPageProps {
  usersRating: UserInfo[];
  setUsersRating: (users: UserInfo[]) => void;
}

export const RatingPage: React.FC<RatingPageProps> = ({
  usersRating,
  setUsersRating,
}) => {
  return (
    <div>
      <RatingList usersRating={usersRating} setUsersRating={setUsersRating} />
    </div>
  );
};
