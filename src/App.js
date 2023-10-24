import { useState, useEffect } from "react";

function App() {
  // state가 변화할때 모든 component는 다시 실행된다
  // 가끔 component의 내부 몇몇 코드는
  // 처음 한번만 실행되고 다시는 실행되지 않도록 하고 싶을 때
  // useEffect를 사용한다
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // 처음 한번만 실행된다
  useEffect(() => {
    console.log("I run only once.");
  }, []);

  // keyword가 변화할때만 실행된다
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  // counter가 변화할때만 실행된다
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  // keyword나 counter가 변화할때 실행된다
  useEffect(() => {
    console.log("I run when 'keyword' or 'counter' changes.");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        type="text"
        onChange={onChange}
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
