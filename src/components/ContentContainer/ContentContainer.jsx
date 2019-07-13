import React from "react";
import "./ContentContainer.css";
import EventCardList from "../EventCardList/EventCardList";
import { Route, Switch, withRouter } from "react-router-dom";
import { LoginPage } from "../LoginPage/LoginPage";
import { RegisterPage } from "../RegisterPage/RegisterPage";
import { WishListPage } from "../WishListPage/WishListPage";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { AdminDashboard } from "../AdminDashboard/AdminDashboard";

function ContentContainer({ location }) {
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames={"fade"}
      >
        <section className="route-section">
          <Switch location={location}>
            <Route exact path="/" component={EventCardList} />
            <Route path="/wishlist" component={WishListPage} />
            <Route path="/admin" component={AdminDashboard} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default withRouter(ContentContainer);
