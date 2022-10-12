import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../../slices/userSlice";
import axios from "axios";
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./navbar.css"

export function HomeNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({});



  const getUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const responseUsers = await axios.get(`http://localhost:3000/api/patients/who-am-i`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      console.log(responseUsers)

      const dataUsers = await responseUsers.data;

      console.log(dataUsers)
      setUser(setUser)
    } catch (err) {
    }
  }

  const logout = () => {
    localStorage.removeItem("token");

    setIsLoggedIn(false);
    setUser({});
    navigate("/");
  };

  useEffect(() => {

    const fetchData = async () => {
      try {
        // Check status user login
        // 1. Get token from localStorage
        const token = localStorage.getItem("token");

        // 2. Check token validity from API
        const currentUserRequest = await axios.get(
          "http://localhost:3000/api/patients/who-am-i",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(currentUserRequest)

        const currentUserResponse = currentUserRequest;

        console.log(currentUserResponse.status)

        if (currentUserResponse.status) {
          dispatch(
            addUser({
              user: currentUserResponse.data,
              token: token,
            })
          );
          setUser(currentUserResponse.data);
        }

      } catch (err) {
        setIsLoggedIn(false);
      }
    };
    fetchData();
    getUsers();
  }, []);


  return (
    <Navbar collapseOnSelect expand="lg" bg="green" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/MediQ.png"
            width="79"
            height="38"
            className="d-inline-block align-top"
          />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ps-5">
            <Nav.Link href="/">Beranda</Nav.Link>
            <Nav.Link className="ps-5" href="/buatjanji">Buat Janji</Nav.Link>
            <Nav.Link className="ps-5" href="#TentangKami">Cek Antrian</Nav.Link>
          </Nav>
          {!isLoggedIn ? (
            <Nav>
              <Nav.Link href="Login">Login</Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link className="ps-5" href="/profile">Profile</Nav.Link>
              <Nav.Link className="ps-5" onClick={logout} >Logout</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
