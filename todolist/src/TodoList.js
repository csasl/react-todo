import React, { Component } from 'react';
import TodoItem from './TodoItem';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            todos: [],
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
    }

    create(todo){
        //add new todo to todos
        this.setState({todos: [...this.state.todos, todo]});
    }

    remove(id){
        //find by id and remove
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    edit(updatedTask, id){
        //find todo by id and update task if found
       const updatedTodos = this.state.todos.map(todo=>{
           if(todo.id === id){
               return {...todo, task:updatedTask}
           }
           return todo;
       });
       this.setState({todos: updatedTodos});
    }

    

    render(){
        //show list of TodoItems
        const todos = this.state.todos.map(todo=> {
            return<TodoItem task= {todo.task} 
                            id={todo.id} 
                            removeTodo={this.remove}
                            editTodo = {this.edit}
                            />
        });

        return(
            <div className="TodoList">
                <h1>
                    Todo List <span>A Simple React Todo List App</span>
                    </h1>               
                <ul>
                    {todos}
                 </ul>
                 <NewTodoForm createTodo={this.create}/>
            </div>
            
        )
       
    }
}

export default TodoList;