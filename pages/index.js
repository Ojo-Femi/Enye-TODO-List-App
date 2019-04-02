import Layout from "../components/myLayout.js"
import React, { Component } from "react"
import Link from "next/link"

const inputStyle = {
  margin: 20,
  padding: 20,
  border: "3px solid #DDD",
  "width": '300px',
  "textAlign": "center"
}

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      value: '',
      list: ["You can cancel any todo by pressing the done button"]
    };
  }
  
  formatString(string){
    return string[0].toUpperCase() + string.slice(1) + ". "
  }
  handle(event){
    event.preventDefault();
    this.setState( state => {
      const list =  [...state.list, state.value]
      
      return {
        list,
        value: ""
      }
    })
  }
  
  handleChange(event){
    this.setState({
      value: event.target.value
    })
  }
  
  deleteArray(i){
    this.setState( (state) => {
      const list = state.list.filter((item, j) => i!== j);
      return {
        list,
      };
    }
      
    );
  }
  
  render(){
    const data = this.state.list.map((item,index) => {
      
      return (
        <li key={index} >{this.formatString(item)}
          <Link>
              <a onClick={() => this.deleteArray(index)} href="#">Done</a>
          </Link>
        </li>
      )
    })
    return (
      <Layout>
        <div>
          <form onSubmit={this.handle.bind(this)} autoComplete="off">
            <input
              style={inputStyle}
              type="text"
              name="todo"
              onChange={this.handleChange.bind(this)}
                placeholder="Type your todo here and press enter"
              value={this.state.value}
            />
          </form>
          <ul>{data}</ul>
          <style jsx>{`
            ul {
              padding: 0
            }
            
            li {
              list-style: none;
              margin: 5px 0;
            }
          `}</style>
        </div>
      </Layout>
    )
  }
}

export default App
