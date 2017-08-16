import React from 'react'
class Welcome extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: new Date()
        }
    }
    render(){
        return  (
            <div>
                <h1>{this.props.name||'no name'}</h1>
                <h2>{this.state.data.toString()}</h2>
            </div>
        )
    }
}
export default Welcome