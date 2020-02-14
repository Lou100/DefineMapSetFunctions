import React from "react";
import Entry from "./Entry";
import setmap from "./setmap";

//This function creates prop items from setmap.js and
//displays them here.
function createEntry(mapSetTerm) {
  return (
    <Entry
      key={mapSetTerm.id}
      name={mapSetTerm.name}
      description={mapSetTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Javascript ES6 map() and set() Function Descriptions</span>
      </h1>
      <dl className="dictionary">{setmap.map(createEntry)}</dl>
    </div>
  );
}

export default App;
