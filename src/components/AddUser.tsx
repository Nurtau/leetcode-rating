import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { useDisappearingMessage } from "../hooks/useDisapearingMessage";
import { Loading } from "./Loading";
import { StyledInput } from "../styles/StyledInput";
import { StyledButton } from "../styles/StyledButton";

export const AddUser = () => {
  const [nickname, setNickname] = useState<string>("");
  const [linkText, setLinkText] = useState<string>("https://leetcode.com/");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useDisappearingMessage();

  const onButtonClick = async () => {
		setMessage("");
    if (nickname === "" || linkText === "") {
      setMessage("The fields must be filled");
      return;
    }
    try {
      setIsLoading(true);
      await axios.post("https://leetcode-rating.herokuapp.com/add-user", {
        username: nickname,
        link: linkText,
      });
      setMessage("User was successfully added");
      setNickname("");
      setLinkText("https://leetcode.com/");
    } catch (error) {
      const { data, status } = error.response;
      if (status === 400) {
        setMessage(data.message);
      } else {
        setMessage(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledAddUser>
      <InputContainer>
        <label htmlFor="nickname">Nickname</label>
        <StyledInput
          type="text"
          id="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="link">Link</label>
        <StyledInput
          type="text"
          id="link"
          placeholder="https://leetcode.com/"
          value={linkText}
          onChange={(e) => setLinkText(e.target.value)}
        />
      </InputContainer>
      {isLoading ? (
        <Loading height={50} />
      ) : (
        <StyledButton onClick={onButtonClick}>Add User</StyledButton>
      )}
      <StyledMessage>{message}</StyledMessage>
    </StyledAddUser>
  );
};

const StyledAddUser = styled.div`
  margin: 1.3rem 4rem;
  padding: 1.1rem;
  width: 100%;
  @media (max-width: 768px) {
    margin: 1.3rem 2rem;
  }
`;

const InputContainer = styled.div`
  margin-bottom: 1.2rem;
  width: 80%;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  label {
    width: 30%;
    display: inline-block;
    margin-bottom: 0.5rem;
  }
`;

const StyledMessage = styled.p`
	font-size: 23px;
	color: #eeeeeea5;
	margin-top: 1rem;

	@media (max-width: 768px) {
		font-size: 15px;
	}

`;
