import React from "react";
import styled from "styled-components";

import { UserInfo } from "./RatingList";

interface UserInfoWithPlace extends UserInfo {
  place: number;
}

export const RatingUser: React.FC<UserInfoWithPlace> = ({
  username,
  score,
  link,
  place,
}) => {
  return (
    <StyledUser>
      <TopInfo>{place}</TopInfo>
      <BottomInfo>
        <a href={link}>{username}</a>
        {score}
      </BottomInfo>
      <Line />
    </StyledUser>
  );
};

const StyledUser = styled.div`
  margin-bottom: 1rem;
`;

const TopInfo = styled.div`
  color: #ffd369;
`;

const BottomInfo = styled.div`
  margin: 0.5rem 0rem;
  display: flex;
  justify-content: space-between;
  /* a {
    color: #ffd369;
  } */
`;

const Line = styled.div`
  height: 1.5px;
  width: 100%;
  background: linear-gradient(to right, #ffd26977, #eeeeee);
`;
