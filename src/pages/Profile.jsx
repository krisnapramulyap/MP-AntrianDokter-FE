import { useRef, useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Alert, Row, Container, Col, } from "react-bootstrap";
import { Link, useNavigate, Navigate, } from "react-router-dom";
import { HomeNavbar } from "./components/navbar/navbar"
import { FooterHome } from "./components/footer/footer"
import logo from '../images/logo.png';
import icon from '../images/Person.png';
import icon2 from '../images/iconlogout.png';
import "../css/style.css"

export default function Profile() {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [data, setData] = useState([]);
    const nameField = useRef("");
    const emailField = useRef("");
    const genderField = useRef("");
    const NIKField = useRef("");
    const addressField = useRef("");
    const dateOfBirthField = useRef("");

    const [errorResponse, setErrorResponse] = useState({
        isError: false,
        message: "",
    });


    const colourButton = {
        backgroundColor: '#008864',
        borderRadius: '10px',
    };

    const styleLabel = {
        borderRadius: '10px',
    };


    const getUsers = async () => {
        try {
            const token = localStorage.getItem("token");
            const responseUsers = await axios.get(`https://mediq-backend.herokuapp.com/api/patients/who-am-i`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

            const dataUsers = await responseUsers.data;
            console.log(dataUsers)

            setData(dataUsers)
        } catch (err) {
            setIsLoggedIn(false);
        }
    }

    const onUpdate = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            const userToUpdatePayload = {
                name: nameField.current.value,
                email: emailField.current.value,
                NIK: NIKField.current.value,
                address: addressField.current.value,
                dateOfBirth: dateOfBirthField.current.value,
                gender: genderField.current.value,
            };



            const updateRequest = await axios.put(
                `https://mediq-backend.herokuapp.com/api/patients/${data.id}/detail`,
                userToUpdatePayload,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(updateRequest)

            const updateResponse = updateRequest.data;
            console.log(updateResponse)

            console.log(updateResponse.status)
            if (updateResponse.status) navigate("/");



        } catch (err) {
            const response = err.response.data;
            setErrorResponse({
                isError: true,
                message: response.message,
            });
        }
    };

    useEffect(() => {
        getUsers();
    }, [])


    return isLoggedIn ? (
        <div>
            <HomeNavbar />
            <Container fluid="true">
                <Row >
                    <Col >
                        <div className="profile-left">
                            <img src={logo} alt="PMediQ" width="79px" height="38px" />
                        </div>
                        <div className="text-profile ">
                            <h3>Profile</h3>
                        </div>

                        <div className="icon-1">
                            <img src={icon} alt="icon" width="36px" height="36px" />
                        </div>

                        <div className="text-profile-1">
                            <h3>EditProfile</h3>
                        </div>

                        <div className="icon-2">
                            <img src={icon2} alt="icon2" width="36px" height="36px" />
                        </div>

                        <div className="text-profile-2">
                            <h3>Logout</h3>
                        </div>

                    </Col>
                    {/* <div className="text-profile">
                    <p>Profile</p>
                    </div> */}

                    <Col >
                        <div className="profile-right">
                            {/* <Link to={"/login"} className="arrowregister" style={{ color: "black" }}>
                            <FiArrowLeft />
                        </Link> */}

                            <Form onSubmit={onUpdate}>
                                <Form.Group className="mb-3 formlogin">
                                    <Form.Label>Nama Lengkap</Form.Label>
                                    <Form.Control
                                        type="text"
                                        ref={nameField}
                                        defaultValue={data.name}
                                        placeholder="Masukkan Nama Lengkap"
                                        style={styleLabel}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>NIK</Form.Label>
                                    <Form.Control
                                        type="text"
                                        ref={NIKField}
                                        defaultValue={data.NIK}
                                        placeholder="Masukkan Nomor NIK"
                                        style={styleLabel}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        ref={emailField}
                                        defaultValue={data.email}
                                        placeholder="Masukkan Email"
                                        style={styleLabel}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tanggal Lahir</Form.Label>
                                    <Form.Control
                                        type="date"
                                        ref={dateOfBirthField}
                                        defaultValue={data.dateOfBirth}
                                        style={styleLabel}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Alamat</Form.Label>
                                    <Form.Control
                                        type="text"
                                        ref={addressField}
                                        defaultValue={data.address}
                                        placeholder="Masukkan Alamat"
                                        style={styleLabel}
                                    />
                                </Form.Group >

                                <Form.Group className="mb-3">
                                    <Form.Label>Jenis Kelamin</Form.Label>
                                    <select ref={genderField} className="form-select">
                                        <option hidden>Pilih Salah Satu</option>
                                        <option ref={genderField} selected={data.gender === "Pria" ? "selected" : ""} value="Pria">Laki Laki</option>
                                        <option ref={genderField} selected={data.gender === "Wanita" ? "selected" : ""} value="Wanita">Perempuan</option>
                                    </select>
                                </Form.Group>
                                {errorResponse.isError && (
                                    <Alert variant="danger">{errorResponse.message}</Alert>
                                )}
                                <Button className="w-100" type="submit" style={colourButton}>
                                    Simpan
                                </Button>
                            </Form>
                        </div>
                        <FooterHome />
                    </Col>
                </Row>
            </Container>
        </div>
    ) : (
        <Navigate to="/login" replace />);;
}