import React from "react";

function FileTree({ root }) {
  function createInstance() {
    var map = new Map();
    return {
      save: function (key, value) {
        map.set(key, value);
      },
      restore: function (key) {
        let value = map.get(key);
        return value === undefined ? false : value;
      },
    };
  }

  return (
    <ul>
      {[root].map(({ name, children, type }, index) => (
        <Node
          id={name + type + index}
          key={name + type + index}
          name={name}
          children={children}
          type={type}
          instance={createInstance()}
        />
      ))}
    </ul>
  );
}

class Node extends React.Component {
  state = {
    isOpen: false,
  };

  constructor(props) {
    super(props);
    this.state.isOpen = this.props.instance.restore(
      this.props.name + this.props.type + this.props.id
    );
  }

  componentWillUnmount = () => {
    this.props.instance.save(
      this.props.name + this.props.type + this.props.id,
      this.state.isOpen
    );
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { name, children, type } = this.props;
    const { isOpen } = this.state;
    const dirImage =
      "https://image.freepik.com/free-vector/illustration-data-folder-icon_53876-6329.jpg";
    const fileImage =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Text-x-generic.svg/1024px-Text-x-generic.svg.png";

    return (
      <li data-test="node">
        <span
          className="imgContainer"
          onClick={this.toggle}
          data-test={type === "dir" ? "dir-expand" : ""}
        >
          <img
            alt={type}
            src={type === "dir" ? dirImage : fileImage}
          />
          {name}
        </span>
        {children && isOpen && (
          <ul>
            {children.map(({ name, children, type }, index) => (
              <Node
                key={name + type + index}
                id={name + type + index}
                name={name}
                children={children}
                type={type}
                instance={this.props.instance}
              />
            ))}
          </ul>
        )}
      </li>
    );
  }
}

export default FileTree;
