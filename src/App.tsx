import React from "react";
import "./App.css";
import ContentContainer from "./components/Content/ContentContainer";
import HeaderNavLoggedIn from "./components/HeaderNav/HeaderNavLoggedIn";

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderNavLoggedIn />
        <ContentContainer />
      </div>
    );
  }
}

export default App;
