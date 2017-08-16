import React,{Component} from 'react'

class TodoInput extends Component{
  render(){
    return <input type="text" defaultValue={this.props.content} onKeyUp={this.submit}/>
  }
  submit(e){
    if(e.key==='Enter'){
      console.log('回车了')
    }
  }
}
export default TodoInput