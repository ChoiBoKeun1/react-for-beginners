import { useState } from "react";

function App() {
  // state가 변화할때 모든 component는 다시 실행된다
  // 가끔 component의 내부 몇몇 코드는
  // 처음 한번만 실행되고 다시는 실행되지 않도록 하고 싶을 때
  //
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("call an api");

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
