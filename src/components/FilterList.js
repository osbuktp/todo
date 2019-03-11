import React from 'react'
import styled from 'styled-components'

import Filter from './Filter'

const StyledFilterList = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
`

const FilterList = ({ currentFilter, filters, onFilterChange }) => (
    <StyledFilterList>
        {filters.map(filter => 
        <Filter active={filter === currentFilter} key={filter} onClick={() => onFilterChange(filter)}>{filter}</Filter>)}
    </StyledFilterList>
)

export default FilterList