import { useRef, useState } from "react";
import { Form, Button, Alert, Row, Container, Col, } from "react-bootstrap";
import axios from "axios";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import "../css/style.css"
import PICT1 from '../images/Queue-amico 1.png';

export default function Register() {
    const navigate = useNavigate();

    const nameField = useRef("");
    const emailField = useRef("");
    const genderField = useRef("");
    const passwordField = useRef("");
    const NIKField = useRef("");
    const addressField = useRef("");
    const dateOfBirthField = useRef("");

    const [errorResponse, setErrorResponse] = useState({
        isError: false,
        message: "",
    });

    const onRegister = async (e) => {
        e.preventDefault();

        try {
            const userToRegisterPayload = {
                name: nameField.current.value,
                email: emailField.current.value,
                NIK: NIKField.current.value,
                address: addressField.current.value,
                password: passwordField.current.value,
                dateOfBirth: dateOfBirthField.current.value,
                gender: genderField.current.value,
            };

            const registerRequest = await axios.post(
                "http://localhost:3000/api/patients/register",
                userToRegisterPayload
            );
            console.log(registerRequest)

            const registerResponse = registerRequest;
            console.log(registerResponse)

            if (registerResponse.status) navigate("/login");
        } catch (err) {
            console.log(err);
            const response = err.response.data;

            setErrorResponse({
                isError: true,
                message: response.message,
            });
        }
    };

    const colourButton = {
        backgroundColor: '#008864',
        borderRadius: '10px',
    };

    const styleLabel = {
        borderRadius: '10px',
    };

    const styleLink = {
        textDecoration: 'none',
        color: '#008864',
        fontWeight: 'bold',
    }
    return (
        <Container fluid="true">
            <Row >
                <Col className="regist-left">
                    <img src={PICT1} alt="Second Hand" width="100%" height="100%" />
                </Col>
                <Col >
                    <div className="regist-right">
                        <Link to={"/login"} className="arrowregister" style={{ color: "black" }}>
                            <FiArrowLeft />
                        </Link>
                        <h1 className="mb-3">Daftar</h1>
                        <Form onSubmit={onRegister} className="">
                            <Form.Group className="mb-3 formlogin">
                                <Form.Label>Nama Lengkap</Form.Label>
                                <Form.Control
                                    type="text"
                                    ref={nameField}
                                    placeholder="Masukan Nama Lengkap"
                                    style={styleLabel}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>NIK</Form.Label>
                                <Form.Control
                                    type="text"
                                    ref={NIKField}
                                    placeholder="Masukan NIK"
                                    style={styleLabel}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    ref={emailField}
                                    placeholder="Masukan Email"
                                    style={styleLabel}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Tanggal Lahir</Form.Label>
                                <Form.Control
                                    type="date"
                                    ref={dateOfBirthField}
                                    placeholder="Masukan Email"
                                    style={styleLabel}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Alamat</Form.Label>
                                <Form.Control
                                    type="text"
                                    ref={addressField}
                                    placeholder="Masukan Alamat"
                                    style={styleLabel}
                                />
                            </Form.Group >

                            <Form.Group className="mb-3">
                                <Form.Label>Jenis Kelamin</Form.Label>
                                <select className="form-select">
                                    <option hidden>Pilih Salah Satu</option>
                                    <option ref={genderField} value="Pria">Laki Laki</option>
                                    <option ref={genderField} value="Wanita">Perempuan</option>
                                </select>
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
                            <Button className="w-100" type="submit" style={colourButton}>
                                Daftar
                            </Button>
                            <p className="m-4 text-center">
                                Sudah punya akun? <Link style={styleLink} to="/login">Masuk di sini</Link>
                            </p>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>

    );
}