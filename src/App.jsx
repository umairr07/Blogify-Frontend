import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/post/posts/:id" element={<PostDetails />} />
        <Route exact path="/create" element={<CreatePost />} />
        <Route exact path="/edit/:id" element={<EditPost />} />
      </Routes>
      <Footer />
    </div>
  );
};
