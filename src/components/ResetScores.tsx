import React from "react";

import {
  StyledButton,
  StyledInput,
  InputContainer,
  StyledMessage,
} from "../styles";

export const ResetScores = () => {
  return (
    <div>
      <InputContainer>
        <label htmlFor="password">Password</label>
        <StyledInput type="text" id="password" />
      </InputContainer>
      <StyledButton>Reset scores</StyledButton>
    </div>
  );
};
