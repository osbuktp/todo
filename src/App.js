import React, { useState } from 'react'

import Container from './components/Container'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import FilterList from './components/FilterList'

const App = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("ALL")
  const filters = ["ALL", "PENDING", "DONE"]
  const onFilterChange = filter => setFilter(filter)
  const onAddTodo = text => {
    setTodos([...todos, {
      id: Date.now(),
      text,
      done: false
    }])
  }
  const onTodoClick = id => {
    let newTodos = [...todos.map(todo => (todo.id === id) ? { ...todo, done: !todo.done } : todo)]
    setTodos(newTodos)
  }
  return <div className="App">
    <Container>
      <Header>
        <h1>Todos</h1>
      </Header>
      <AddTodo onAddTodo={onAddTodo} />
      <FilterList currentFilter={filter} filters={filters} onFilterChange={onFilterChange} />
      <TodoList filter={filter} onTodoClick={onTodoClick} todos={todos} />
    </Container>
  </div>
}

export default App
