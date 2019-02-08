import React from "react";
import ReactDOM from "react-dom";
import Character from "./components/Characters"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page:1
    }
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleNext(){
    let page = this.state.page + 1;
   this.setState({page:page})
  }

  handlePrev(){
    let page = this.state.page >=2 ? this.state.page -1: 1
    this.setState({page:page})
  }

  render(){
    return (<div>
      <div>
        <button onClick={this.handlePrev}>Prev</button>
        <button onClick={this.handleNext}>Next</button>
      </div>
      <Character page={this.state.page}/>
    </div>)
  }
}
const root = document.getElementById("root");
ReactDOM.render(<App />, root)