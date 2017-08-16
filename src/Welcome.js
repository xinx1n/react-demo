import React from 'react'
class Welcome extends React.Component {
    constructor(props){
        super(props)
        this.state = {
					fl: true,
          data: new Date()
        }
        // setInterval(()=>{
        //     this.setState({
				// 				data: new Date(),
        //     })
				// },200)
				console.log('我已经在 constructor 里将 props 和 state 初始化好了')
		}
		componentWillMount(){
			console.log('will mount,下边应该是 render 了')
		}
    render(){
			console.log('嗯，这里是 render')
			return  (
					<div>
							<h1>{this.props.name||'no name'}</h1>
							<h2>{this.state.data.toString()}</h2>
							<h3>{this.props.time||0}</h3>
					</div>
			)
		}
		componentDidMount(){
			console.log('did mount 已经挂载到页面里了')
		}

		compontentWillReceiveProps(nextProps){
			console.log(nextProps,'compontentWillReceiveProps 我要读取 props 啦')
		}
		shouldComponentUpdate(nextProps, nextState){
			console.log(nextProps, nextState,'要不要更新组件？')
			return this.state.fl
		}
		componentWillUpdate(){
			console.log('componentWillUpdate() - 我要更新组件啦！')
		}
		componentDidUpdate(){
			console.log('componentDidUpdate() - 更新完毕啦！')
		}
}
export default Welcome