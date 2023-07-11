import React from 'react'
import styled from 'styled-components'

const Label = styled.span`
 font-weight: strong
`

const ListItem = styled.li`
 display: flex;
 justify-content: space-between;
`
const ListContainer = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0
`
const List = ({ items }) => (
    <ListContainer>
        {items.map(({label, value}) => <ListItem key={label}><Label>{label}:</Label> {value}</ListItem>)}
    </ListContainer>
)
export default List;