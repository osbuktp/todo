import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    /* border: none; */
    box-sizing: border-box;
    padding: 5px 0 5px 10px;
    width: 100%;
    margin-bottom: 10px;
    ::placeholder {
        color: #CCC;
    }
`

const AddTodo = ({onAddTodo}) => {
    const keyPressed = e => {
        if (e.which === 13) {
            onAddTodo(e.target.value)
            e.target.value = ""
        }
    }
    return <StyledInput placeholder="Add todo" type="input" onKeyPress={keyPressed} />
}

export default AddTodo