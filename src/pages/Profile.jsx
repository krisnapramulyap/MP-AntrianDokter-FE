import { useRef, useState } from "react";
import { Form, Button, Alert, Row, Container, Col, } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { HomeNavbar } from "./components/navbar/navbar"
import { FooterHome } from "./components/footer/footer"
import logo from '../images/logo.png';
import icon from '../images/Person.png';
import icon2 from '../images/iconlogout.png';
import "../css/style.css"

export default function Profile() {
    const navigate = useNavigate();
    

    const colourButton = {
        backgroundColor: '#008864',
        borderRadius: '10px',
    };

    const styleLabel = {
        borderRadius: '10px',
    };

    
    return (
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
                        
                        <Form  className="">
                            <Form.Group className="mb-3 formlogin">
                                <Form.Label>Nama Lengkap</Form.Label>
                                <Form.Control
                                    type="text"
                                    // ref={nameField}
                                    placeholder="Masukkan Nama Lengkap"
                                    style={styleLabel}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>NIK</Form.Label>
                                <Form.Control
                                    type="text"
                                    // ref={NIKField}
                                    placeholder="Masukkan Nomor NIK"
                                    style={styleLabel}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    // ref={emailField}
                                    placeholder="Masukkan Email"
                                    style={styleLabel}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Tanggal Lahir</Form.Label>
                                <Form.Control
                                    type="date"
                                    // ref={dateOfBirthField}
                                    style={styleLabel}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Alamat</Form.Label>
                                <Form.Control
                                    type="text"
                                    // ref={addressField}
                                    placeholder="Masukkan Alamat"
                                    style={styleLabel}
                                />
                            </Form.Group >

                            <Form.Group className="mb-3">
                                <Form.Label>Jenis Kelamin</Form.Label>
                                <select className="form-select">
                                    <option hidden>Pilih Salah Satu</option>
                                    <option value="Pria">Laki Laki</option>
                                    <option value="Wanita">Perempuan</option>
                                </select>
                            </Form.Group>

                            
                            {/* {errorResponse.isError && (
                                <Alert variant="danger">{errorResponse.message}</Alert>
                            )} */}
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
    );
}