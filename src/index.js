import React from "react";
import { render } from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { store } from "./app/store";
import Home from "./pages/Home";
import Janji from "./pages/Janji";
import Register from "./pages/register";
import Login from "./pages/Login";
import Admin from "./pages/LoginAdmin";
import Profile from "./pages/Profile";
import Antrian from "./pages/Antrian";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = document.getElementById("root");
render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/buatjanji" element={<Janji />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/antrian" element={<Antrian />} />
      </Routes>
    </Router>
  </Provider>,
  root
)

