import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Timer from'./components/timer'
import './components/time.css'



export default class App extends Component {
  constructor (props){
    super(props)
    this.state={
      timeMs:0,
      isStart:false
    }

  
      setInterval(()=>{ if(this.state.isStart)
        {this.setState({timeMs:this.state.timeMs+1})}},1000)  };
     
       
        onStartClick = () => {
          this.setState({ isStart: !this.state.isStart });
        };
     onResetClick=()=>{
       this.setState({timeMs:0, isState:false})
     }
     
  

 

  render() {
    return (
      <div>
         <Timer ls={this.state.timeMs}/>
         <button className={this.state.isStart ? "btn-stop" : "btn btn-start"} onClick={this.onStartClick}>{this.state.isStart ? "Pause" : "Start"}</button>
         <button className="btn-reset"onClick={this.onResetClick}>Reset</button>
      </div>
    )
  }
}


