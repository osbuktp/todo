import React from 'react'
import styled from 'styled-components'

import {connect} from 'react-redux'
import {changeFilter} from '../filterActions'

import Filter from './Filter'

const StyledFilterList = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
`

const filters = ["ALL", "DONE", "PENDING"]

const FilterList = ({ currentFilter, changeFilter }) => (
    <StyledFilterList>
        {filters.map(filter => 
        <Filter active={filter === currentFilter} key={filter} onClick={() => changeFilter(filter)}>{filter}</Filter>)}
    </StyledFilterList>
)

const mapStateToProps = state => ({
    currentFilter: state.filter
})

export default connect(mapStateToProps, {changeFilter})(FilterList)