import React from "react";
import Login from "./Login";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Login} exact />
      </Switch>
    </main>
  );
}

export default App;
