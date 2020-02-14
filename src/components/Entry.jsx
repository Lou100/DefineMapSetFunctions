import React from "react";

//This function creates prop items from setmap.js and
//displays them here.
function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span raria-label="Tense Biceps" />
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default Entry;
