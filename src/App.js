import React, { useState } from "react";
import Header from "./components/Header";
import Accordion from "./components/Accordion";
import ItemsData from "./data/ItemsData";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import ColorData from "./data/ColorData";
import Translate from "./components/Translate";
import Route from "./components/Route";

function App() {
  const [selected, setSelected] = useState(ColorData[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={ItemsData} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Langugage"
          options={ColorData}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
