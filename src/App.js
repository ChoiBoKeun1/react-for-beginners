// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./routes/Home";
// import Detail from "./routes/Detail";

// react router v6 문법을 따름
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/movie:id" element={<Detail />} />
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

//최신버전 v6.17.0
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL}/`,
    element: <Home />,
  },
  {
    path: `${process.env.PUBLIC_URL}/movie/:id`,
    element: <Detail />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
