import React, { useState } from "react";
import Dropdown from "./Dropdown";
import options from "../data/Languges.js";

function Translate() {
  const [language, setLanguage] = useState(options[0]);
  return (
    <div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
    </div>
  );
}

export default Translate;
