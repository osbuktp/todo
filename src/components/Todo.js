import React from 'react'
import styled from 'styled-components'

const TodoText =  styled.p.attrs(({done}) => ({
    decoration: (done && "line-through") || "none"
}))`
    text-decoration: ${props => props.decoration}
`

const TodoWrapper = styled.div`
    border-bottom: 1px solid #CCC;
    :last-of-type {
        border-bottom: none;
    }
    display: flex;
    cursor: pointer;
    padding: 10px;
    align-items: center;
`
const StyledCheckbox = styled.input`
    margin: 0 5px 0 0;
`

const Todo = ({ id, text, done, onTodoClick }) => (
    <TodoWrapper id={id} onClick={() => onTodoClick(id)}>
        <StyledCheckbox type="checkbox" checked={done} readOnly/>
        <TodoText done={done}>{text}</TodoText>
    </TodoWrapper>
)

export default Todo