import React from 'react'

export const Todos = (props) => {

  const todoList = props.todos.length ? (
    props.todos.map(todo => {
        return (
            <div style={{marginBottom: "10px", cursor: "pointer"}} key={todo.id}>
                <span onClick={() => {props.deleteTodos(todo.id)}}>{todo.content}</span>
            </div>
        )
    })
  ) : (<p>You have no todos</p>)
  
  return (
    <div>
      {todoList}
    </div>
  )
}
