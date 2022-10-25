import React, { useState } from "react";
import Dropdown from "./Dropdown";
import options from "../data/Languges.js";
import Convert from "./Convert";

function Translate() {
  const [language, setLanguage] = useState(options[4]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Langugage"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
}

export default Translate;
