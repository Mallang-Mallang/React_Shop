import { useState } from "react";
import MainPage from "./MainPage";
import Header from "./Header";
import DetailItem from "./DetailItem";
import Data from "./data";
import "./App.css";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  const [shoes, setShoes] = useState(Data);
  return (
    <div className="app">
      <Header />

      <Switch>
        <Route exact path="/React_shop/">
          <MainPage shoes={shoes} />
        </Route>

        <Route path="/detail/:id">
          <DetailItem shoes={shoes} />
        </Route>

        {/* <Route path="/:id">
          <div>아무거나 블라블라</div>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
