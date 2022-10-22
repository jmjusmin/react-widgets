import React from "react";

function Accordion({ items }) {
  //receive an index when title clicked
  const onTitleClick = (index) => {
    console.log("Title clicked", index);
  };

  const renderItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active" onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderItems}</div>;
}

export default Accordion;

//arrow function: we want to call it in the future,
//not right away after the page is loaded
