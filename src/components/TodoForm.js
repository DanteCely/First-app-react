import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    alert('sending...');
  }

  render() {
    return(
      <div className="card">
        <form className="card-body" onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <input
            type="text"
            name="title"
            className="form-control"
            placeholder="title"
            onChange={ this.handleInput }
            />
          </div>
          <div className="form-group">
            <input
            type="text"
            name="responsible"
            className="form-control"
            placeholder="responsible"
            onChange={ this.handleInput }
            />
          </div>
          <div className="form-group">
            <input
            type="text"
            name="description"
            className="form-control"
            placeholder="description"
            onChange={ this.handleInput }
            />
          </div>
          <div className="form-group">
            <select
              name="priority"
              className="form-control"
              onChange={ this.handleInput }
              >
              <option>low</option>  
              <option>medium</option> 
              <option>high</option> 
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    ); 
  }
}

export default TodoForm;