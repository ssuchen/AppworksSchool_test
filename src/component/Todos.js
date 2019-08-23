import React from "react";

const Todos = (props)=>{
const {todos,deleteTodo,finishTodo} = props 
const todolen = todos.length
const todolist = todos.map(todo =>{
if(todolen !== 0){
 return(
    <div className="center collection-item"  key= {todo.id} >
    <p style={{
     //textDecoration: "line-through"    
     //textDecoration: todos.status ? "line-through":" "       
    }}> {todo.content} </p>
    <button onClick = {()=>{deleteTodo(todo.id)}}>刪除</button>
    <button onClick = {()=>{finishTodo(todo.id)}}>完成</button>
    </div>
    )
}
else{ 
    return(
     <p>沒有任務需要完成!</p>   
    )   
} 
})
return(
    <div className=" collection">{ todolist }</div>
)





}






export default Todos

