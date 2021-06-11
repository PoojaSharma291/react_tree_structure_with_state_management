import React from "react";
import AssemblyLine from "./AssemblyLine";
import FileTree from "./FileTree";

/* Changes made to this file will not affect your tests.
 * This file is used to control the behavior of the web preview. 
*/

const root = {
  name: "foo",
  type: "dir",
  children: [
    {
      name: "bar",
      type: "dir",
      children: [
        {
          name: "corge",
          type: "file"
        }
      ]
    },
    {
      name: "baz",
      type: "dir",
      children: [
        {
          name: "bar",
          type: "file"
        }
      ]
    },
    {
      name: "quux",
      type: "file"
    },
    {
      name: "grault",
      type: "file"
    },
  ]
}; 

const App = props => (
  <div id="app">
    <FileTree root={root} />
    {/* <AssemblyLine  stages={[        "Idea",         "Development",         "Testing",        "Deployment"      ]}/> */}
  </div>
);

export default App;
