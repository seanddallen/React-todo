import React from 'react'

export const Todos = (props) => {

  const todoList = todos.length ? (
    todos.map(todo => {
        return (
            <div key={todo.id}>
                <span>{todo.content}</span>
            </div>
        )
    })
  ) : (<p>"You have no todos"</p>)
  
  return (
    <div>
      {todoList}
    </div>
  )
}
