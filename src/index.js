// eslint-disable-next-line no-unused-vars
import React , { Component }from "react";
import ReactDOM from "react-dom";
import Todos from "./component/Todos";
import Addtodo from "./component/Addtodo";
 


//=======================
//  todolist 實作
//=======================

//TodoList
class App extends Component{
   constructor(props){
   super(props);
   this.deleteTodo = this.deleteTodo.bind(this);
   this.finishTodo = this.finishTodo.bind(this);
   this.AddTodo = this.AddTodo.bind(this);
    
   this.Alltodo = this.Alltodo.bind(this);
   this.Readytodo = this.Readytodo.bind(this);
   this.nottodo = this.nottodo.bind(this);
    
    this.state={
        show:"All",
        todos:[
            { id:0 , content:"買牛奶" , status:false},
            { id:1, content:"學習React", status:false },
            { id:2, content:"專案找資料", status:false }
        ]
    }    
    }


    //===將不要的點擊刪除===
    deleteTodo(id){
    const todos = this.state.todos.filter( todo=>{
        return todo.id !== id
      })
  
      this.setState({
        todos:todos
      })

    }

    //=== 點擊 完成的按鈕===
    finishTodo(id){
    const todos = this.state.todos.map(todo =>{
    if(id === todo.id ){
        return({
            id:todo.id,
            content:todo.content,
            status:!todo.status          
        })                 
    }else{
        return todo;
    }    
    })       
    this.setState({
        todos:todos
    })
 
    }

    //=================
    //增加 todo 項目
    //=================
    AddTodo(todo){
        todo.id = Math.random();
        let todos = [...this.state.todos , todo]
        this.setState({
            todos:todos
        }) 
        //console.log(this.state)       
        }
    
  
      


    //==============================
    //         按鈕分類欄位
    //==============================

    Alltodo(){
        this.setState({
            show:"All"
        })
    console.log(this.state.show)
    }

    // 已做完的項目
    Readytodo(){
        this.setState({
            show:"Ready"
    })
    console.log(this.state.show)
    }
    nottodo(){
        this.setState({
            show:"Not"
    })
    console.log(this.state.show)
    }
    


    render(){
   
    if(this.state.show === "All"){
    let todos = this.state.todos 
    console.log(todos) 
    //this.state.todos = this.state.todos

    } 
    // //如果狀態是完成的話
    else if(this.state.show === "Ready"){
    let todos = this.state.todos.filter( todo=>{    
        return todo.status == true    
    })
    this.state.todos = todos
    console.log(todos)    

    } 
    
    //如果狀態是未完成的話
    else if(this.state.show === "Not"){
    //console.log(this.state.todos)
    const todos = this.state.todos.filter( todo=>{
    return todo.status == false
    })
    this.state.todos = todos
    console.log(todos) 
     
    }     
    

        return(
        <div className="contain">
            <h1 className="center green-text">TODO'S</h1>
            <div className="center">
            <button onClick={this.Alltodo}>all</button>
            <button onClick={this.Readytodo}>ready</button>
            <button onClick={this.nottodo}>todo</button>
            </div>
            <Todos  todos={this.state.todos} deleteTodo={this.deleteTodo} 
             finishTodo={this.finishTodo}/>
            <Addtodo AddTodo={this.AddTodo} />
        </div>
        )
    }
}
ReactDOM.render(<App/>, document.querySelector("#root"));
