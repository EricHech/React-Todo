import React from "react";

class TodoForm extends React.Component {
  state = {
    input: ""
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState(prevState => ({
      input: prevState + event.target.value
    }));
    // this.setState({ input: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("The submission", this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>ToDo: </label>
          {/*Why isn't value necessary?*/}
          <input value={this.state.input} onChange={this.handleChange} />
          <button>Button</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
