import styled from "styled-components";

export const StyledButton = styled.button`
	margin-top: 0.5rem;
  background: transparent;
  color: #eeeeee;
  padding: 0.5rem 1.5rem;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  transition: all 0.3s ease;
	font-size: 15px;
  &:hover {
    background: #eeeeee;
    color: #222831;
  }
  &:active {
    background: #eeeeeecc;
  }
`;
