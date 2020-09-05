import React, { Component } from 'react';

class NewTodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            task: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){

    }

    render(){
        return(
            <div>
                <form>
                    <input type="text" placeholder="New todo" name="task" id="task" value={this.state.task} onChange={this.handleChange}/>
                    <button>Add todo</button>
                </form>
            </div>
        );
    }
}

export default NewTodoForm;