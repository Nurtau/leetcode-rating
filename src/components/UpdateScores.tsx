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
      const response = await axios.patch("https://leetcode-rating.herokuapp.com/update-scores");
			if (response.status === 200) {
				setMessage("Successfully updated");
			}
    } catch (error: any) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else if(error.status === 429) {
				setMessage("Please try again")
			} else {
        setMessage(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <StyledCaution>Now there is no limit</StyledCaution>
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
  font-size: 28px;
  @media (max-width: 1024px) {
    font-size: 25;
  }
  @media (max-width: 768px) {
    font-size: 23px;
  }
`;
