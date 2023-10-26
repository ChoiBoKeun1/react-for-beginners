import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // 절대 이 안에서는
    // toDo = "lalala" 이런식으로 하면 안됨
    // setToDo("lalala") 이렇게 해야함. 항상 수정하는 함수를 쓴다.

    // list 업데이트 하는법
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {/* array 안의 값 : item. 이름은 자기 마음대로
        index는 각각의 아이템의 index. li의 key로 쓰임. 안쓰면 경고 발생.
      */}
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default App;
