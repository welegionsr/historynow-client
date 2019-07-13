import React from "react";
import "./App.css";
import HeaderNav from "./components/HeaderNav/HeaderNav";

import ContentContainer from "./components/ContentContainer/ContentContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderNav />
        <ContentContainer />
      </div>
    );
  }
}

export default App;
