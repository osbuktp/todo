import React from 'react'
import styled from 'styled-components'

import Todo from './Todo';

const StyledTodoList = styled.div`
    max-height: 400px;
    overflow-y: auto;
    ::-webkit-scrollbar-track {
	    border-radius: 10px;
	    background-color: #F5F5F5;
    }
    ::-webkit-scrollbar {
        width: 8px;
        background-color: #F5F5F5;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #CCC;
    }
`

const TodoList = ({ todos, onTodoClick, filter }) => {
    todos = todos.filter(todo => {
        switch (filter) {
            case "ALL":
                return true
            case "DONE":
                return todo.done
            case "PENDING":
                return !todo.done
            default:
                return true
        }
    })
    return <StyledTodoList>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                onTodoClick={onTodoClick}
                id={todo.id}
                text={todo.text}
                done={todo.done} />)}
    </StyledTodoList>
}


export default TodoList