import './App.css'
import { Layout } from './components/Layout'
import { TodoList } from './pages/todoList'

export function App() {

  return (
    <Layout>
      <TodoList/>
    </Layout>
  )
}

export default App
