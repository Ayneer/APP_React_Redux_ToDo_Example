import React, { Component } from 'react';

class AddTodo extends Component {

    state = {
        context: ""
    }

    typeInput = (e) =>{
        this.setState({
            context: e.target.value
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            context: ""
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm} > 
                    <input type="text" placeholder="Write the new todo" onChange={this.typeInput} value={this.state.context} />
                    <button type="submit" > Add </button>
                </form>
            </div>
        )
    }

}

export default AddTodo;