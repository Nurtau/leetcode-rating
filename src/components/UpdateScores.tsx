import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { Loading } from "./Loading";
import { StyledButton, StyledMessage } from "../styles";
import { useDisappearingMessage } from "../hooks/useDisapearingMessage";

export const UpdateScores = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useDisappearingMessage();
  const onButtonClick = async () => {
		setMessage("");
    try {
      setIsLoading(true);
      await axios.patch("https://leetcode-rating.herokuapp.com/update-scores");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Update of all users may take up to 5 minutes");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <StyledCaution>
        Only one update in one hour is allowed
      </StyledCaution>
      {isLoading ? (
        <Loading height={55} />
      ) : (
        <StyledButton onClick={onButtonClick}>Update scores</StyledButton>
      )}
      <StyledMessage>{message}</StyledMessage>
    </div>
  );
};

const StyledCaution = styled.p`
  margin-bottom: 1.2rem;
  margin-right: 1rem;
  font-size: 23px;
  @media (max-width: 1024px) {
    font-size: 19px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
