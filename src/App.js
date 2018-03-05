import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Form = (props) => {
  return(
    <div>
        <input type="text" placeholder="first name" onChange={props.changeFirstname} value={props.firstname} /> <br/> <br/>
        <input type="text" placeholder="last name" onChange={props.changeLastname} value={props.lastname} /> <br/> <br/>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      arr: [
        {
          firstname: '',
          lastname: '',
          id:1
        }
      ],
      showOutput:false
    };
    this.addTextfields = this.addTextfields.bind(this);
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
  }

  addTextfields(e) {
    debugger
    let oldArray = this.state.arr;
    this.setState((prevState) => { 
      return {
        arr: oldArray.concat({
          firstname: '',
          lastname: '',
          id: prevState.arr.length + 2
        })
      }
    });
  }

  changeFirstName(e, selectedIndex) {
    let updatedArray =  this.state.arr.map((data) => {
      if(data.id === selectedIndex) {
        return Object.assign({}, data, {
          firstname: e.target.value
        })
      } else {
        return data
      }
    })

    this.setState({ arr: updatedArray });
    
  }

  changeLastName(e, selectedIndex) {
    let updatedArray =  this.state.arr.map((data) => {
      if(data.id === selectedIndex) {
        return Object.assign({}, data, {
          lastname: e.target.value
        })
      } else {
        return data
      }
    })
    this.setState({ arr: updatedArray });
  }

  showTexts() {
    this.setState({
      showOutput: true
    })
  }

  render() {
    return (
      <div>
        <div className="App">
          {
            this.state.arr.map((data, index) => {
              return <Form key={index} data={data} 
                      changeFirstname={(e) => this.changeFirstName(e, data.id)}
                      changeLastname={(e) => this.changeLastName(e, data.id)}
                    />
            })
          }
          <button type="submit" onClick={this.addTextfields}>Plus</button> 
        </div>
        <div className="submit-button">
          <button type="submit" onClick={this.showTexts.bind(this)}>Submit</button>
        </div>
        <div>
          {
            this.state.showOutput && 
            this.state.arr.map((data, index) => {
              return <div key={index}>
              {data.firstname}  {data.lastname}
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
