import React, { Component } from 'react';
import './App.css';
import TodoInput from '../components/TodoInput/TodoInput';
import TodoList from '../components/TodoList/TodoList';

class App extends Component {
  state = {
    todo: "",
    todos: []
  }

  inputTodoHandler = event => {
    this.setState({todo: event.target.value})
  }

  addTodoHandler = () => {
    const newTodo = {
      id: Math.random(),
      text: this.state.todo,
      isToggled: false
    }

    const updatedTodos = [...this.state.todos, newTodo] 
    this.setState({todos: updatedTodos, todo: ""})
  }
  
  toggleTodoHandler = todoId => {
    const updatedTodos = this.state.todos.map(todo => todoId === todo.id ? {...todo, isToggled: !todo.isToggled} : todo)
    this.setState({todos: updatedTodos})
  }

  deleteTodoHandler = todoId => {
    const filterTodos = this.state.todos.filter(todo => todo.id !== todoId );
    this.setState({todos: filterTodos})
  }

  render() {
    return (
      <div className="App">
        <h1>Let's start!!!</h1>
        <TodoInput changed={this.inputTodoHandler} clicked={this.addTodoHandler} todo={this.state.todo}/>
        <TodoList 
          todos={this.state.todos}
          toggled={this.toggleTodoHandler} 
          deleted={this.deleteTodoHandler}
        />
      </div>
    );
  }
}

export default App;
