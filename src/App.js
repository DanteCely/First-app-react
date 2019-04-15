import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import TodoForm from "./components/TodoForm"

import { todos } from "./todo.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  removeTodo(index){
    if(window.confirm("Are you sure to delete it?")) {
      this.setState({
        todos: this.state.todos.filter(( _, i) => i !== index)
      });
    }    
  }

  render() {
    const todos = this.state.todos.map((todo,index) => {
      return (
        <div key={index}  className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>
                {todo.description}
              </p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button 
                className="btn btn-danger"
                onClick={ this.removeTodo.bind(this, index) }
                >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    })
      return ( 
        <div className="App">
          <Navigation titulo="Task" numTask={this.state.todos.length}/>
          <div className="container">
            <div className="row mt-4">
              <div className="col-md-3">
                <img src={logo} className="App-logo" alt="logo" />
                <TodoForm onAddTodo={ this.handleAddTodo }/>
              </div>
              <div className="col-md-9">
                <div className="row">
                  {todos}
                </div>
              </div>              
            </div>
          </div>
        </div>
      );
  }
}

export default App;