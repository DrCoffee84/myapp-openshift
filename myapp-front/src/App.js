import React from "react";
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = { bodyResponse: null };
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.callApiRest}>
          Soy re capo :)
        </button>
        {this.renderReponse()}
      </div>
    );
  }

  renderReponse() {
    if (this.state.bodyResponse == null) {
      return;
    }

    const { status } = this.state.bodyResponse;

    return (
      <div>
        <h1>{status}</h1>
      </div>
    );
  }

  callApiRest = () => {

    var url = `${process.env.REACT_APP_NODE_API}/health`;
    // AJAX 
    fetch(url)
      .then(response => {
        if (!response.ok) {
          return Promise.reject(response);
        }
        return response;
      })
      .then(response => response.json())
      .then(bodyResponse => this.setState({ bodyResponse }))
      .catch(error => {
        this.setState({ bodyResponse: { status: "you are bad boy" } })
        console.log("Error: " + error);
      });

  }

}


export default App;