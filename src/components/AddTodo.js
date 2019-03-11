import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {addTodo} from '../todosActions'

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

const AddTodo = props => {
    const keyPressed = e => {
        if (e.which === 13) {
            props.addTodo(e.target.value)
            e.target.value = ""
        }
    }
    return <StyledInput placeholder="Add todo" type="input" onKeyPress={keyPressed} />
}

export default connect(null, {addTodo})(AddTodo)