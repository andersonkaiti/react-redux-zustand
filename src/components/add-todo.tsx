import { type FormEvent, useState } from 'react'

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')

  function handleNewTodo(event: FormEvent) {
    event.preventDefault()

    console.log(newTodo)
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input
        onChange={(event) => setNewTodo(event.target.value)}
        placeholder="Novo to-do"
        type="text"
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}
