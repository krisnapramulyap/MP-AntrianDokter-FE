import React from "react";
import { useRef, useEffect, useState } from "react";
import { Link, useNavigate, Navigate, } from "react-router-dom";
import axios from "axios";
import { HomeNavbar } from "./components/navbar/navbar"
import { FooterHome } from "./components/footer/footer"
import Carousel2 from "./components/carousel/Carousel2"
import Carousel3 from "./components/carousel/Carousel3"
// import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Form, Button, Alert, Row, Container, Col, } from "react-bootstrap";
import logo from '../images/logo.svg';
import "../css/style.css";


export default function Janji() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [data, setData] = useState([]);
  const patientNameField = useRef("");
  const patientNIKField = useRef("");
  const examinationIdField = useRef("");

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: "",
  });

  const [successResponse, setSuccessResponse] = useState({
    isSuccess: false,
    message: "",
  });

  const styleButton = {
    backgroundColor: '#008864',
    borderRadius: '10px',
    marginTop: '196px',
    height: '48px',
  };

  const styleLabel = {
    borderRadius: '10px',
    height: '48px',
  };

  const styleTitle = {
    display: 'flex',
    textAlign: 'left',
    marginTop: '58px',
    fontSize: '24px',
    fontWeight: '500',
  };

  const formContainer = {
    backgroundColor: '#F5F5F5',
    padding: '50px',
    borderRadius: '20px',
    marginTop: '52px',
  };

  const carouselWrapper = {
    padding: '98px',

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

  const onCreate = async (e, isDone) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const userToCreatePayload = {
        name: patientNameField.current.value,
        patientNIK: patientNIKField.current.value,
        examinationId: examinationIdField.current.value,
        isDone,
      };



      const createRequest = await axios.post(
        `https://mediq-backend.herokuapp.com/api/patients/booking`,
        userToCreatePayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(createRequest)

      const successResponse = createRequest.data.message;
      setSuccessResponse({
        isSuccess: true,
        message: successResponse,
      });

      const createResponse = createRequest;
      console.log(createResponse)

      const successResponse = createRequest.data.message;
      setSuccessResponse({
        isSuccess: true,
        message: successResponse,
      });

      console.log(createResponse.status)
      if (createResponse.status) navigate("/buatjanji");



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
      <div className="container">
        <div style={styleTitle}>
          <img alt="logo" src={logo} width='90' style={{ marginRight: '20px' }} />
          <h2 className="mt-3">
            Pendaftaran Online Buat Janji
          </h2>
        </div>
        {successResponse.isSuccess && (
          <Alert
            variant="success"
            className="mt-5"
            onClose={() => setSuccessResponse(true)}
            dismissible
          >
            {successResponse.message}
          </Alert>
        )}
        <div className="row mr-4">
          <div className="col-lg-6">
            <div>
              <div style={formContainer}>
                <Form onSubmit={onCreate}>
                  <Form.Group className="mb-3 formlogin">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control
                      type="text"
                      ref={patientNameField}
                      placeholder="Masukkan Nama Lengkap"
                      style={styleLabel}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>NIK</Form.Label>
                    <Form.Control
                      type="text"
                      ref={patientNIKField}
                      placeholder="Masukkan Nomor NIK"
                      style={styleLabel}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>BPJS / Non BPJS</Form.Label>
                    <select ref={examinationIdField} className="form-select" style={styleLabel}>
                      <option hidden>Pilih Salah Satu</option>
                      <option ref={examinationIdField} value="1">BPJS</option>
                      <option ref={examinationIdField} value="2">Non-BPJS</option>
                    </select>
                  </Form.Group>
                  {errorResponse.isError && (
                    <Alert variant="danger">{errorResponse.message}</Alert>
                  )}
                  <Button onClick={(e) => onCreate(e, false)} className="w-100" type="Buat Janji" style={styleButton}>
                    Buat Janji Kunjungan
                  </Button>
                </Form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 carosel_gambar">
            <div style={carouselWrapper}>
              <Carousel3 />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <hr width="1300" className="mx-auto" />
      <div className="py-4">
        <FooterHome />
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace />);;
}

