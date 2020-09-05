import React, { Component } from 'react';
import TodoItem from './TodoItem';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            todos: [],
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
    }

    create(todo){
        this.setState({todos: [...this.state.todos, todo]});
    }

    remove(id){
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    render(){
        const todos = this.state.todos.map(todo=> {
            return<TodoItem task= {todo.task} id={todo.id} removeTodo={this.remove}/>
        });

        return(
            <div>
                <h1>Todo List</h1>
                <NewTodoForm createTodo={this.create}/>
                <ul>
                    {todos}
                 </ul>
            </div>
            
        )
       
    }
}

export default TodoList;