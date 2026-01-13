import type { Todo } from "../types/todo";

const todos: Todo[] = [
  {
    date: '2026-01-20',
    title: '여자친구 생일 준비',
    dDay: 7,
  },
  {
    date: '2026-01-25',
    title: '여행 예약',
    dDay: 12,
  },
  {
    date: '2026-02-01',
    title: '렌터카 확인',
    dDay: 19,
  },
];

export const TodoList = () => {
  return (
    <div>
      <h2 style={{ marginBottom: '16px' }}>📅 일정 관리</h2>

      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            <th style={thStyle}>날짜</th>
            <th style={thStyle}>할 일</th>
            <th style={thStyle}>D-Day</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td style={tdStyle}>{todo.date}</td>
              <td style={tdStyle}>{todo.title}</td>
              <td style={tdStyle}>
                D-{todo.dDay}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle: React.CSSProperties = {
  padding: '12px',
  border: '1px solid #ddd',
  textAlign: 'left',
};

const tdStyle: React.CSSProperties = {
  padding: '12px',
  border: '1px solid #ddd',
};