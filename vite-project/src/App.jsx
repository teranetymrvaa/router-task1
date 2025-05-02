// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ROUTES from "./pages/Routes";
// import Layout from "./components/Layout";
// import Basket from "./pages/Basket";
// import BookDetail from "./pages/BookDetail";
// import Books from "./pages/Books";
// import Favorites from "./pages/Favorites";
// import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter(ROUTES);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

{/* <BrowserRouter> */ }
{/* <Routes> */ }
{/* <Route path="/" element={<Layout />}> */ }
{/* <Route index element={<Home />} /> */ }
{/* <Route path="/books" element={<Books />} /> */ }
{/* <Route path="/bookdetail/:id" element={<BookDetail />} /> */ }
{/* <Route path="/favorites" element={<Favorites />} /> */ }
{/* <Route path="/basket" element={<Basket />} /> */ }
{/* <Route path="/bookdetail" element={<BookDetail />} /> */ }
{/* </Route> */ }
{/* </Routes> */ }
{/* </BrowserRouter> */ }