import React from "react";
import styled from "styled-components";

interface LoadingProps {
  height: number;
}

export const Loading: React.FC<LoadingProps> = ({ height }) => {
  return (
    <StyledRing height={height}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledRing>
  );
};

const StyledRing = styled.div<LoadingProps>`
  display: inline-block;
  position: relative;
  width: ${props => `${props.height}px`};
  height: ${props => `${props.height}px`};;
  animation-delay: -0.45s;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${props => `${props.height / 2}px`};
    height: ${props => `${props.height / 2}px`};
    margin: ${props => `${props.height / 10}px`};
    border: ${props => `${props.height / 20}px  solid #eeeeee`};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #eeeeee transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
