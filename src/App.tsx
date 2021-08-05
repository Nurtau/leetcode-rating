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

//interfacess
import { UserInfo } from "./components/RatingList";

export const App = () => {
  const [usersRating, setUsersRating] = useState<UserInfo[]>([]);
  const location = useLocation();

  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <StyledApp>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <RatingPage
                usersRating={usersRating}
                setUsersRating={setUsersRating}
              />
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
    </div>
  );
};

const StyledApp = styled.div`
  width: 95%;
  margin: auto;
  overflow: hidden;
`;
