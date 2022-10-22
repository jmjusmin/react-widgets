import React from "react";
import Accordion from "./components/Accordion";
import ItemsData from "./ItemsData";

function App() {
  return (
    <div>
      <Accordion items={ItemsData} />
    </div>
  );
}

export default App;
