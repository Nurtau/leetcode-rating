import React from "react";
import styled from "styled-components";

interface NamedIconProps {
  description: string;
  isActive: boolean;
}

export const NamedIcon: React.FC<NamedIconProps> = ({
  description,
  children,
  isActive,
}) => {
  return (
    <IconContainer active={isActive}>
      {children}
      <p>{description}</p>
    </IconContainer>
  );
};

const IconContainer = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  font-size: 20px;
  p {
    margin-left: 1rem;
    color: ${(props) => (props.active ? "inherit" : "#eeeeee65")};
  }
  svg {
    fill: ${(props) => (props.active ? "#EEEEEE" : "#eeeeee65")};
  }

  &:hover {
    p {
      color: ${(props) => (props.active ? "inherit" : "#eeeeeecc")};
    }
    svg {
      fill: ${(props) => (props.active ? "#EEEEEE" : "#eeeeeecc")};
    }
  }
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    p {
      display: none;
    }
  }
`;
