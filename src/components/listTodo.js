import React from 'react';

const ListTodo = ({ todos, delteTodo }) => {
    return (
        <div className="collection container">
            {todos.length > 0 ?
                todos.map(todo =>
                    <div key={todo.id} className="collection-item" onClick={() => delteTodo(todo.id)}>
                        <span>
                            {todo.context}
                        </span>
                    </div>
                )
                :
                <div>There is not any todo</div>
            }
        </div>
    )
}

export default ListTodo;
