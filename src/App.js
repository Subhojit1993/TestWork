import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        {
          firstname: "",
          lastname: ""
        }
      ],
      displayValues: []
    };
    this.addTextfields = this.addTextfields.bind(this);
    this.changeFirstname = this.changeFirstname.bind(this);
    this.changeLastname = this.changeLastname.bind(this);
  }

  addTextfields(e) {
    let arr = this.state.arr;
    arr.push({
      firstname: "",
      lastname: ""
    });
    this.setState({ arr });
  }

  changeFirstname(e, index) {
    let arr = this.state.arr;
    arr[index].firstname = e.target.value;
    this.setState({ arr });
  }

  changeLastname(e, index) {
    let arr = this.state.arr;
    arr[index].lastname = e.target.value;
    this.setState({ arr });
  }

  showTexts() {
    let displayValues = [];
    this.state.arr.map(element => {
      console.log(element.firstname, element.lastname);
      var add = element.firstname + " " + element.lastname;
      displayValues.push(add);
    });
    this.setState({ displayValues });
  }

  render() {
    return (
      <div>
        <div className="App">
          {this.state.arr.map((element, index) => {
            return (
              <div key={index}>
                <input
                  type="text"
                  onChange={e => this.changeFirstname(e, index)}
                  placeholder="first name"
                  value={this.state.firstname}
                />{" "}
                <br /> <br />
                <input
                  type="text"
                  onChange={e => this.changeLastname(e, index)}
                  placeholder="last name"
                  value={this.state.lastname}
                />{" "}
                <br /> <br />
              </div>
            );
          })}
          <button type="submit" onClick={this.addTextfields}>
            Plus
          </button>
        </div>
        <div className="submit-button">
          <button type="submit" onClick={this.showTexts.bind(this)}>
            Submit
          </button>
        </div>
        <div>
          {this.state.displayValues.map(element => {
            return <p>{element}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
