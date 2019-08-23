import React ,{Component} from "react"

class Addtodo extends Component{
    constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
    this.state={
        content:"",
        status:false
    }
    }

    handleChange(e){
    this.setState({
        content: e.target.value
    })
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.AddTodo(this.state);
        this.setState({
           content:""
        })

    }

    render(){
        return(
            <form onSubmit={ this.handleSubmit }>
             <label>todo</label>
             <input type="text" onChange={ this.handleChange } value={ this.state.content }/>
            </form>
        )
    }
}

export default Addtodo;