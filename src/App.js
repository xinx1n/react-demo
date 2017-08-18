import React, { Component } from 'react'
import './App.css'
import 'normalize.css'
import './reset.css'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import * as localStore from './localStore'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo:'',
      todoList:localStore.load('todoList')||[]
    }
  }
  render() {
    let todos = this.state.todoList.filter(item=>!item.deleted).map((item,index)=>{
      return (
        <li key={index}>
          <TodoItem todo={item} onToggle={this.toggle.bind(this)} onDelete={this.delete.bind(this)}/>
        </li>
      )
    })
    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrapper">
          <TodoInput 
            content={this.state.newTodo}
            onSubmit={this.addTodo.bind(this)}
            OnChange={this.changeTitle.bind(this)}/>
        </div>
        <ol className="todoList">
          {todos}
        </ol>
      </div>
    )
  }
  addTodo(event){
    if(this.state.newTodo.trim()===''){
      return
    }
    // this.state.todoList.push({
    //   id: idMaker(),
    //   title: event.target.value,
    //   status: false,
    //   deleted: false
    // })
    // this.setState({
    //   newTodo: '',
    //   todoList: this.state.todoList
    // })
    this.setState((state)=>{
      this.state.todoList.unshift({
        id: idMaker(),
        title: state.newTodo,
        status: false,
        deleted: false
      })
      state.newTodo = ''
      return state
    })
    localStore.save('todoList', this.state.todoList)
  }
  changeTitle(event){
    this.setState({
      newTodo:event.target.value
    })
  }
  toggle(e,todo){
    todo.status = !todo.status
    this.setState(this.state)
    localStore.save('todoList', this.state.todoList)
  }
  delete(e,todo){
    todo.deleted = true
    this.setState(this.state)
    localStore.save('todoList', this.state.todoList)
  }
}
let id = 0
function idMaker(){
   return ++id
}
export default App
