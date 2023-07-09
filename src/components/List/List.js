import React from 'react'
const List = ({ items }) => (
    <ul>
        {items.map(({label, value}) => <li key={label}><strong>{label}:</strong> {value}</li>)}
    </ul>
)
export default List;