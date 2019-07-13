import React from "react";
import "./App.css";
import EventCardList from "./components/EventCardList/EventCardList";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import { Route, Link, Switch } from "react-router-dom";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { RegisterPage } from "./components/RegisterPage/RegisterPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={EventCardList} />
          <Route
            path="/wishlist"
            render={props => (
              <div>this will show the Wishlist sometime soon</div>
            )}
          />
          <Route
            path="/admin"
            render={props => (
              <div>This will be the admin dashboard soon enough</div>
            )}
          />

          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

