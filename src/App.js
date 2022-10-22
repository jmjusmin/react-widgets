import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import ItemsData from ".data/ItemsData";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import ColorData from "./data/ColorData";

function App() {
  const [selected, setSelected] = useState(ColorData[0]);
  return (
    <div>
      {/* <Accordion items={ItemsData} /> */}
      {/* <Search /> */}
      <Dropdown
        options={ColorData}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
}

export default App;
