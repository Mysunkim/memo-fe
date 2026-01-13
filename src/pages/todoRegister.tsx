import { Link,useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import { useState } from "react";

export default function RegisterPage() {

  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 임시 확인 (나중에 API로 교체)
    console.log({
      date,
      title,
      todo,
    });

    // 저장 후 목록으로 이동
    navigate("/");
  };
  return (
    <>
      <h2>할 일 등록</h2>

      <form onSubmit={handleSubmit}>
        {/* 날짜 */}
        <div>
          <label>날짜</label><br /><br />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div><br />
        {/* 제목 */}
        <div>
          <label>제목</label><br /><br />
          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div><br />

        {/* 할 일 */}
        <div>
          <label>할 일</label><br /><br />
          <textarea
            placeholder="할 일을 입력하세요"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            rows={4}
            required
          />
        </div>

        <div style={{ display: "flex", gap: "2rem" , marginTop: "3rem"}}>
          <Button type="submit">저장</Button>
            <Link to="/">
                <Button>뒤로가기</Button>
            </Link>
        </div>
      </form>
    </>
  );
}
