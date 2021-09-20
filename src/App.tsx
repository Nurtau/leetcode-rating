import React, { useState } from "react";
import styled from "styled-components";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//components
import { RatingPage } from "./pages/RatingPage";
import { SettingsPage } from "./pages/SettingsPage";
import { NavBar } from "./components/NavBar";

//styles
import { GlobalStyle } from "./styles/GlobalStyle";

export const App = () => {
  const location = useLocation();

  return (
    <AppContainer>
      <GlobalStyle />
      <NavBar />
      <StyledApp>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <RatingPage />
            </Route>
            <Route exact path="/settings">
              <SettingsPage />
            </Route>
            <Route path="/">
              <h1>ERROR 404</h1>
            </Route>
          </Switch>
        </AnimatePresence>
      </StyledApp>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledApp = styled.div`
  width: 100%;
  margin: auto;
  overflow: hidden;
  flex-grow: 1;
  display: flex;
`;
