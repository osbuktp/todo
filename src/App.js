import React from 'react'
import { Provider } from 'react-redux'

import Container from './components/Container'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import FilterList from './components/FilterList'

import store from './store'

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Container>
        <Header>
          <h1>Todos</h1>
        </Header>
        <AddTodo />
        <FilterList />
        <TodoList />
      </Container>
    </Provider>
  </div>
)

export default App
