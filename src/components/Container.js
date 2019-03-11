import styled from 'styled-components'

const Container = styled.div`
    box-sizing: border-box;
    max-width: 400px;
    margin: 20px auto;
    padding: 20px 10px;
    border: 2px solid #CCCCCC;
    background-color: white;
    @media (max-width: 400px) {
        margin: 0;
        border: 0;
    }
`

export default Container