import { type FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store'

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()

  function handleNewTodo(event: FormEvent) {
    event.preventDefault()

    dispatch(
      add({
        newTodo,
      })
    )
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
