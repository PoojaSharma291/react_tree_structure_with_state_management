<!-- 
This challenge involves building a component to render a file tree. Your component, FileTree, should render a simple navigational user interface and maintain state on which directories have been expanded or collapsed by the user.

Please complete a brief written response to reflect on your design once you finish coding (details will be provided at the end of the instructions).

Props
The FileTree component will be provided with props containing a tree of nested objects which describe the files and directories in a file system. The format for props.root will follow this example:

<FileTree root={
  {
    name: "foo",
    type: "dir",
    children: [
      {
        name: "baz",
        type: "dir",
        children: [
          {
            name: "quux",
            type: "file"
          }
        ]
      },
      {
        name: "bar",
        type: "file"
      }
    ]
  }  
} />
The file system for the above sample structure is:

root/
    baz/
        quux
    bar
where root and baz are directories and bar and quux are files in these directories.

You can assume that props.root always contains a directory as the root object, even if this root directory has no children. You can also assume that the objects adhere strictly to the above structure and are well-formed. Objects with type: "file" will not have a children array, and objects with type: "dir" are guaranteed to have a children array, even if they have no children (the array is empty).

Rendering
The FileTree component should render the files and directories which are visible as elements with a data-test attribute: <li data-test="node">. The data-test attribute will be used by the testing suite to validate your code. You may add classes to this node element if you wish.

In keeping with the file/directory structure, there will be two <li data-test="node"> types: directory elements and name elements. In both cases, the value corresponding to the node's name key should be rendered somewhere within the inner HTML of the element (or one of its children). For expanded directory elements, all children should be rendered as child lists following the parent pattern depending on their type.

These elements should be rendered conditionally depending on which directories are expanded. Additionally, the order of elements in the original object should be preserved.

All <li data-test="node"> elements corresponding to directories should contain a child element <div data-test="dir-expand"> that can be clicked to expand the directory tree for that node. You're free to make this element any type you wish as long as it responds to a click event.

Behavior
Initially, all directories will be collapsed; only the lone root directory will be visible. A collapsed directory should not render any of its children.

Once a <div data-test="dir-expand"> element is clicked within a corresponding <li data-test="node"> element corresponding to a directory, the node should be expanded to reveal all of its immediate children, as well as any descendents which were expanded previously.

Each directory's state should not be dependent on any other directory. For example, if a directory is collapsed which has child directories which are open, those child directories should continue to be open upon re-expanding the parent directory.

Design and Style
As a manually tested part of the challenge, please add CSS necessary to present a clean and attractive user interface. There's no need for in-depth styling, but do take the time to show a basic grasp of CSS and design principles.

In particular, the resulting structure should be visibly nested to assist the user in determining which children belong to which directory. Include a distinguishing identifier (such as an icon) to differentiate files and folders.

Demo
This demo illustrates the expected behavior of the component; the style shown here is purely for demonstration purposes and need not be copied.

The props for your Web Preview environment can be adjusted in your workspace in ./src/App.jsx. These changes only affect the Web Preview environment and have to bearing on the test submission, the code for which will bypass App and instantiate your component directly using Enzyme.

Here are the props associated with the below demo screen capture:

<FileTree root={
  {
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
  }
} />
dt.gif

Written response
After you finish coding, please take 15 minutes to respond to a written prompt located in your workspace in the ./candidate-written-response.md file.

Persist
Changes Synced
Array [ [ "name", "foo" ], [ ... ] -->