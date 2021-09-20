import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Loading } from "./Loading";
import { RatingUser } from "./RatingUser";
import { ratingListFade } from "../animations";

export interface UserInfo {
  username: string;
  score: number;
  id: string;
  link: string;
}

export const RatingList: React.FC = () => {
  const [usersRating, setUsersRating] = useState<UserInfo[]>([]);
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
          <Loading height={80} />
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
  margin: auto;
  overflow: hidden;
  width: 75%;
  @media (max-width: 1024px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`;
