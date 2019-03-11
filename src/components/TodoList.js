import React from 'react'
import styled from 'styled-components'

import {connect} from 'react-redux'
import {toggleTodo} from '../todosActions'

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

const TodoList = ({ todos, toggleTodo, filter }) => {
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
                onTodoClick={toggleTodo}
                id={todo.id}
                text={todo.text}
                done={todo.done} />)}
    </StyledTodoList>
}


const mapStateToProps = state => ({
    todos: state.todos,
    filter: state.filter
})

export default connect(mapStateToProps, {toggleTodo})(TodoList)