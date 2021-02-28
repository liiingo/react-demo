import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from './pages/Home';

const NavBar = styled.nav`
  display: flex;
  height: 70px;
  background-color: #7f6a93;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  li {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  a {
    color: white;
    font-size: 1.25rem;
    font-weight: 800;
    text-decoration: none;
    padding: 25px 15px;
    white-space: nowrap;
    flex-grow: 1;
  }
  a: hover {
    background-color: #675676;
  }
`;
const ActiveAwareNavLink = styled(NavLink)`
  &.active {
    background-color: #675676;
  }
`;

const Content = styled.div`
  padding: 15px;
`;

const App = () => {
  return (
    <div className="App">
      <NavBar>
        <ul>
          <li>
            <ActiveAwareNavLink to="/home">Home</ActiveAwareNavLink>
          </li>
        </ul>
      </NavBar>

      <Content>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Content>
    </div>
  );
};

export default App;
