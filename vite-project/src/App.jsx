import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Basket from "./pages/Basket";
import BookDetail from "./pages/BookDetail";
import Books from "./pages/Books";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/bookdetail" element={<BookDetail />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/basket" element={<Basket />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
