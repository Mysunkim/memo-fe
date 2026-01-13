import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './components/Layout'
import { TodoList } from './pages/todoList'
import RegisterPage from './pages/todoRegister'

export function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
