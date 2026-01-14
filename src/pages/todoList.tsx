import type { Todo } from "../types/todo";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

const todos: Todo[] = [
  {
    id:1,
    date: '2026-01-20',
    title: '여자친구 생일 준비',
    content:'여자친구가좋아할만한곳찾아보기',
    time:'12시',
    dDay: 7,
    createdAt:"2025-12-21",
    updatedAt:"2025-12-24"
  },
  {
    id:2,
    date: '2026-01-25',
    title: '여행 예약',
    content:'여행사전화하기,여행할곳조사하기',
    time:'13시',
    dDay: 12,
    createdAt:"2025-10-22",
    updatedAt:"2025-12-24"
  },
  {
    id:3,
    date: '2026-02-01',
    title: '렌터카 확인',
    content:'렌터카회사전화하기',
    time:'14시',
    dDay: 19,
    createdAt:"2025-08-21",
    updatedAt:"2025-12-24"
  },
];

export const TodoList = () => {
  return (
    <div>
      <h2 style={{ marginBottom: '16px' }}>📅 일정 관리</h2>

      {/* 헤더 */}
      <ul className="todo-header">
        <li>날짜</li>
        <li>할 일</li>
        <li>D-Day</li>
      </ul>

      {/* 목록 */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <Link to={`/todo/${todo.id}`} className="todo-link">
              <span>{todo.date}</span>
              <span>{todo.title}</span>
              <span>D-{todo.dDay}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <Link to="/register"><Button>일정추가</Button></Link>
      </div>
    </div>
  );
};