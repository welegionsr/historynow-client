import React from "react";
import "./Content.css";
import EventCardList from "../EventCardList/EventCardList";
import { Route, Switch, withRouter } from "react-router-dom";
import { LoginPage } from "../LoginPage/LoginPage";
import { RegisterPage } from "../RegisterPage/RegisterPage";
import { WishListPage } from "../WishListPage/WishListPage";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { AdminDashboard } from "../AdminDashboard/AdminDashboard";
import PrivateRoute from "../common/PrivateRoute/PrivateRoute";

function Content({ location, isLoggedIn }) {
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames={"fade"}
      >
        <section className="route-section">
          <Switch location={location}>
            <PrivateRoute exact authed={isLoggedIn} path="/" component={EventCardList} />
            <PrivateRoute authed={isLoggedIn} path="/wishlist" component={WishListPage} />
            <PrivateRoute authed={isLoggedIn} path="/admin" component={AdminDashboard} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default withRouter(Content);
