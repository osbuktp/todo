import styled from 'styled-components'

const Filter = styled.a.attrs(({active}) => ({
    color: (active && "black") || "#CCC"
}))`
    color: ${props => props.color};
    cursor: pointer;
`

export default Filter