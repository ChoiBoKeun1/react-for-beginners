import { useState, useEffect } from "react";

// component가 destory 될 때 호출되는 함수
// cleanup 함수 라고 부른다.
function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  /*
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);
  */
  return <h1>Hello</h1>;
}
/*
밑의 함수와 같다.

funtion Hello() {
  function hiFn() {
    console.log("hi :)");
    return byFn;
  }

  function byFn() {
    console.log("bye :(");
  }

  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}
*/

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !showing);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
