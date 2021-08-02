import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

//components
import { RatingPage } from "./pages/RatingPage";
import { SettingsPage } from "./pages/SettingsPage";
import { NavBar } from "./components/NavBar";

//styles
import { GlobalStyle } from "./styles/GlobalStyle";

// const first = "#283046";
// const second = "#161D31";
// const text = "#D0D2D6";

export const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <NavBar />
      <Switch>
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
    </StyledApp>
  );
};

const StyledApp = styled.div`
  width: 80%;
  margin: auto;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
