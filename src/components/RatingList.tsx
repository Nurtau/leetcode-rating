import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Loading } from "./Loading";
import { RatingUser } from "./RatingUser";
import { ratingListFade } from "../animations";
import { RatingPageProps } from "../pages/RatingPage";
export interface UserInfo {
  username: string;
  score: number;
  id: string;
  link: string;
}

interface RatingListProps extends RatingPageProps {}

export const RatingList: React.FC<RatingListProps> = ({
  usersRating,
  setUsersRating,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(usersRating.length === 0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<UserInfo[]>(
          "https://leetcode-rating.herokuapp.com/rating"
        );
        setIsLoading(false);
        setUsersRating(data);
      } catch (error) {}
    };
    if (isLoading) fetchData();
  }, [setUsersRating, isLoading]);

  const renderList = () =>
    usersRating.map(
      ({ username, id, link, score }, index): React.ReactElement => {
        return (
          <div key={id}>
            <RatingUser
              place={index + 1}
              username={username}
              score={score}
              link={link}
              id={id}
            />
          </div>
        );
      }
    );

  return (
    <StyledList>
      {isLoading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <motion.div variants={ratingListFade} animate="show" initial="hidden">
          {renderList()}
        </motion.div>
      )}
    </StyledList>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const StyledList = styled.div`
  padding: 1.2rem;
`;
