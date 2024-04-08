import React from 'react'
import Item from '../Item';

export default function List (props) {
    const { todoList } = props
    return (
      <ul>
        {
          todoList.map(todo => {
            return (
              <Item todo={todo}></Item>
            )
          })
        }
      </ul>
    )
}
