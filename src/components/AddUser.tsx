import React, { useState } from "react";
import axios from "axios";
import { useDisappearingMessage } from "../hooks/useDisapearingMessage";
import { Loading } from "./Loading";
import {
  StyledInput,
  StyledButton,
  StyledMessage,
  InputContainer,
} from "../styles";

export const AddUser = () => {
  const [nickname, setNickname] = useState<string>("");
  const [linkText, setLinkText] = useState<string>("https://leetcode.com/");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useDisappearingMessage();

  const onButtonClick = async () => {
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
    } catch (error: any) {
      const { data, status } = error.response;
      if (status === 400 || status === 406) {
        setMessage(data.message);
      } else if (status === 500) {
				setMessage("There is no such user");
      } else {
				setMessage(error.message);
			}
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
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
        <Loading height={55} />
      ) : (
        <StyledButton onClick={onButtonClick}>Add User</StyledButton>
      )}
      <StyledMessage>{message}</StyledMessage>
    </div>
  );
};
