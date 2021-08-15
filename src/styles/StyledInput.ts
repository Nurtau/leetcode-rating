import styled from "styled-components";

export const StyledInput = styled.input`
  font-size: 18px;
  border: none;
  background: 0;
  border-radius: 0;
  border-bottom: 1px solid #eeeeee;
  color: #eeeeeea5;
  width: 300px;
  &:focus {
    outline: 0;
  }
  @media (max-width: 768px) {
    width: 250px;
  }
`;
