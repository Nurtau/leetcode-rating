import React, { useState } from "react";
import axios from "axios";

import { useDisappearingMessage } from "../hooks/useDisapearingMessage";
import { Loading } from "./Loading";
import {
  StyledButton,
  StyledInput,
  InputContainer,
  StyledMessage,
} from "../styles";

export const ResetScores = () => {
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useDisappearingMessage();

  const onButtonClick = async () => {
    setMessage("");
    try {
      setIsLoading(true);
      const response = await axios.patch(
        "https://leetcode-rating.herokuapp.com/reset-scores",
        {},
        {
          headers: {
            Authorization: password,
          },
        }
      );
			if (response.status === 200) {
				setMessage("Sucessfully resetted");
			}
    } catch (error) {
      setMessage("Wrong password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <InputContainer>
        <label htmlFor="password">Password</label>
        <StyledInput
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputContainer>
      {isLoading ? (
        <Loading height={55} />
      ) : (
        <StyledButton onClick={onButtonClick}>Reset scores</StyledButton>
      )}
      <StyledMessage>{message}</StyledMessage>
    </div>
  );
};
