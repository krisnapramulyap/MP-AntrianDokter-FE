import { useRef, useState } from "react";
import { Form, Button, Alert, Row, Container, Col, } from "react-bootstrap";
import axios from "axios";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import "../css/style.css"
import admin from '../images/admin.png';
import logo from '../images/logo2.png';

export default function Login() {
    const navigate = useNavigate();

    const colourButton = {
        backgroundColor: '#008864',
        borderRadius: '8px',
        border: '1px solid #008864',
    };

    const styleLabel = {
        borderRadius: '8px',
    };

    const styleLink = {
        textDecoration: 'none',
        color: '#008864',
        fontWeight: 'bold',
    }

    const emailField = useRef("");
    const passwordField = useRef("");

    const [errorResponse, setErrorResponse] = useState({
        isError: false,
        message: "",
    });

    const onLogin = async (e) => {
        e.preventDefault();

        try {
            const userToLoginPayload = {
                email: emailField.current.value,
                password: passwordField.current.value,
            };

            const loginRequest = await axios.post(
                "http://localhost:3000/api/admins/login",
                userToLoginPayload
            );
            console.log(loginRequest)
            
            const loginResponse = loginRequest;
            console.log(loginResponse)

            if (loginResponse.status) {
                localStorage.setItem("token", loginResponse.data.token);

                navigate("/");
            }
        } catch (err) {
            console.log(err);
            const response = err.response.data;

            setErrorResponse({
                isError: true,
                message: response.message,
            });
        }
    };

    return (
        <Container fluid="true">
            <Row >
                <Col >
                    <div className="login-left-admin">
                        <img src={admin} alt="Second Hand" weight />
                    </div>
                </Col>

                <Col>
                    <div className="login-right-admin">
                        <Link to={"/login"} className="arrowlogin" style={{ color: "black" }}>
                            <FiArrowLeft />
                        </Link>
                        <Col className="logo">
                            <img src={logo} alt="Second Hand" className="logo" />
                        </Col>

                        <h1 className="mb-3 masuk">Masuk</h1>
                        <Form onSubmit={onLogin} className="">
                            <Form.Group className="mb-3 formlogin">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    ref={emailField}
                                    placeholder="Masukkan Email"
                                    style={styleLabel}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    ref={passwordField}
                                    placeholder="Masukkan Password"
                                    style={styleLabel}
                                />
                            </Form.Group>
                            {errorResponse.isError && (
                                <Alert variant="danger">{errorResponse.message}</Alert>
                            )}
                            <Button style={colourButton} className="w-100 button1" type="submit">
                                Login As admin
                            </Button>

                            <p>
                                Bukan Admin?  <Link style={styleLink} to="/login">Masuk disini</Link>
                            </p>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}