import { useRef, useState } from "react";
import { Form, Button, Alert, Row, Container, Col, } from "react-bootstrap";
import axios from "axios";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import "../css/style.css"
import login from '../images/login.png';
import logo from '../images/logo.png';

export default function Login() {
    const navigate = useNavigate();

    const navigateToAdmin = () => {
        // 👇️ navigate to /contacts
        navigate('/admin');
    };

    const colourButton = {
        backgroundColor: '#008864',
        borderRadius: '8px',
    };

    const styleLabel = {
        borderRadius: '10px',
    };

    const styleLink = {
        textDecoration: 'none',
        color: '#008864',
        fontWeight: 'bold'
    }

    // const emailField = useRef("");
    // const passwordField = useRef("");

    const [errorResponse, setErrorResponse] = useState({
        isError: false,
        message: "",
    });

    // const onLogin = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const userToLoginPayload = {
    //             email: emailField.current.value,
    //             password: passwordField.current.value,
    //         };

    //         const loginRequest = await axios.post(
    //             "https://binar-final-challenge-vespa-be.herokuapp.com/v1/login",
    //             userToLoginPayload
    //         );

    //         const loginResponse = loginRequest.data;

    //         if (loginResponse.status) {
    //             localStorage.setItem("token", loginResponse.data.token);

    //             navigate("/");
    //         }
    //     } catch (err) {
    //         console.log(err);
    //         const response = err.response.data;

    //         setErrorResponse({
    //             isError: true,
    //             message: response.message,
    //         });
    //     }
    // };

    return (
        <Container fluid="true">
            <Row >
                <Col className="login-left">
                    <img src={login} alt="Second Hand" width="100%" height="100%" />
                </Col>

                <Col>
                    <div className="login-right">
                        <Link to={"/"} className="arrowlogin" style={{ color: "black" }}>
                            <FiArrowLeft />
                        </Link>
                        <Col className="logo">
                            <img src={logo} alt="Second Hand" className="logo" />
                        </Col>

                        <h1 className="mb-3 masuk">Masuk</h1>
                        <Form className="">
                            <Form.Group className="mb-3 formlogin">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    // ref={emailField}
                                    placeholder="Masukkan Email"
                                    style={styleLabel}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    // ref={passwordField}
                                    placeholder="Masukkan Password"
                                    style={styleLabel}
                                />
                            </Form.Group>
                            {errorResponse.isError && (
                                <Alert variant="danger">{errorResponse.message}</Alert>
                            )}
                            <Button style={colourButton} className="w-100 button1" type="submit">
                                Masuk
                            </Button>

                            <Button onClick={navigateToAdmin} style={colourButton} className="w-100 button2" type="submit">
                                Login as Admin
                            </Button>
                            <p>
                                Belum punya akun?  <Link style={styleLink} to="/register">Daftar di sini</Link>
                            </p>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}