import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NamedIcon } from "../assets/NamedIcon";
import { pageFade } from "../animations";

export const SettingsPage = () => {
  return (
    <StyledSettingsPage
      variants={pageFade}
      animate="show"
      initial="hidden"
      exit="exit"
    >
      <SettingsContainer>
        <UtilsContainer>
          <UtilContainer>
            <NamedIcon description="Add User">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="#EEEEEE"
              >
                <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" />
              </svg>
            </NamedIcon>
          </UtilContainer>
          <UtilContainer>
            <NamedIcon description="Update Scores">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
								fill="#EEEEEE"
              >
                <path d="M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z" />
              </svg>
            </NamedIcon>
          </UtilContainer>
          <UtilContainer>
            <NamedIcon description="Reset Scores">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#EEEEEE"
              >
                <path d="M2.458 9.012c-.297.947-.458 1.955-.458 3 0 5.52 4.481 10 10 10 5.52 0 10-4.48 10-10 0-5.519-4.48-10-10-10-2.121 0-4.083.668-5.703 1.796l1.703 2.204h-6.58l1.935-6.012 1.718 2.223c1.958-1.389 4.346-2.211 6.927-2.211 6.623 0 12 5.377 12 12s-5.377 11.988-12 11.988-12-5.365-12-11.988c0-1.036.132-2.041.379-3h2.079zm10.35-3.012c.292.821.375 1.346 1.01 1.609.637.264 1.073-.052 1.854-.423l1.142 1.142c-.373.787-.687 1.218-.423 1.854.262.634.784.716 1.609 1.009v1.617c-.816.29-1.347.375-1.61 1.01-.264.636.052 1.071.424 1.853l-1.142 1.142c-.79-.375-1.219-.687-1.85-.424-.639.265-.723.793-1.014 1.611h-1.616c-.292-.821-.375-1.347-1.01-1.61-.637-.264-1.072.052-1.854.423l-1.142-1.142c.366-.771.689-1.212.423-1.854-.263-.635-.793-.719-1.609-1.009v-1.617c.817-.29 1.346-.373 1.609-1.009.264-.637-.051-1.07-.423-1.854l1.142-1.142c.788.374 1.218.687 1.854.423.635-.263.719-.792 1.01-1.609h1.616zm-.808 8c-1.105 0-2-.896-2-2 0-1.105.895-2.001 2-2.001 1.104 0 2 .896 2 2.001 0 1.104-.896 2-2 2z" />
              </svg>
            </NamedIcon>
          </UtilContainer>
        </UtilsContainer>
        <DescriptionContainer></DescriptionContainer>
      </SettingsContainer>
    </StyledSettingsPage>
  );
};

const StyledSettingsPage = styled(motion.div)`
`;

const SettingsContainer = styled.div`
  display: flex;
	height: 100%;
`;

const DescriptionContainer = styled.div`
  flex: 1;
`;

const UtilsContainer = styled.div`
	padding: 1rem 1rem 0 1rem;
	box-shadow: 2px 2px 10px rgba(41, 31, 39, 0.8);
`;

const UtilContainer = styled.div`
  padding: 1.5rem 1.6rem;
  border-left: 0;
  border-top: 0;
`;
