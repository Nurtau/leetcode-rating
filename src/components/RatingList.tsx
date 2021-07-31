import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Loading } from "./Loading";
import { RatingUser } from "./RatingUser";

export interface UserInfo {
  username: string;
  score: number;
  id: string;
  link: string;
}

export const RatingList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [usersRating, setUsersRating] = useState<UserInfo[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<UserInfo[]>(
          "https://leetcode-rating.herokuapp.com/rating"
        );
        setIsLoading(false);
        setUsersRating(data);
      } catch (error) {
      }
    };
    fetchData();
  });

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
      {isLoading ? <LoadingWrapper><Loading /></LoadingWrapper> : renderList()}
    </StyledList>
  );
};


const LoadingWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 2rem;
`;

const StyledList = styled.div`
	padding: 1.2rem;
`;
