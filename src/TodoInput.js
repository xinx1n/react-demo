import React,{Component} from 'react'
import './TodoInput.css'
class TodoInput extends Component{
  render(){
    return <input type="text" value={this.props.content}
    className = "TodoInput"
    onChange={this.changeTitle.bind(this)}
    onKeyUp={this.submit.bind(this)}/>
  }
  submit(e){
    if(e.key==='Enter'){
      this.props.onSubmit(e)
    }
  }
  changeTitle(e){
    this.props.OnChange(e)
  }
}
export default TodoInput