import React from "react";
import { useRef, useEffect, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import { HomeNavbar } from "./components/navbar/navbar";
import { FooterHome } from "./components/footer/footer";
import Carousel2 from "./components/carousel/Carousel2";
// import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Form, Button, Alert, Row, Container, Col } from "react-bootstrap";
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

  const colourButton = {
    backgroundColor: "#008864",
    borderRadius: "10px",
  };

  const styleLabel = {
    borderRadius: "10px",
  };

  const getUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const responseUsers = await axios.get(
        `https://mediq-backend.herokuapp.com/api/patients/who-am-i`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const dataUsers = await responseUsers.data;
      console.log(dataUsers);

      setData(dataUsers);
    } catch (err) {
      setIsLoggedIn(false);
    }
  };

  const onCreate = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const userToCreatePayload = {
        name: patientNameField.current.value,
        patientNIK: patientNIKField.current.value,
        examinationId: examinationIdField.current.value,
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
      console.log(createRequest);

      const successResponse = createRequest.data.message;
      setSuccessResponse({
        isSuccess: true,
        message: successResponse,
      });

      const createResponse = createRequest;
      console.log(createResponse);

      console.log(createResponse.status);
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
  }, []);

  return isLoggedIn ? (
    <div>
      <HomeNavbar />
      <div className="container">
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
        <div className="row judul">
          <img src="../logo.png" alt="" className="col-3 my-4 py-3" />
          <h2 className="text-left my-4 py-4 col-6">
            Pendaftaran Online Buat Janji
          </h2>
        </div>
        <div className="row mr-4">
          <div className="col-6  container_janji">
            <div>
              {/* <Form>
                <FormGroup>
                  <Label for="exampleEmail"> Nama Pasien </Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Masukan Nama Lengkap Pasien"
                    type="email"
                  />
                </FormGroup>
                {""}
                <FormGroup>
                  <Label for="examplePassword"> NIK</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Masukan NIK"
                    type="password"
                  />
                </FormGroup>{" "}
                <Label for="examplePassword"> BPJS / Non BPJS </Label>
                <Input bsSize="md" className="mb-3" type="select">
                  <option>BPJS</option>
                  <option>Non BPJS</option>
                </Input>
                <Button className="mt-3 mb-3 tombol">
                  Buat Janji Kunjungan
                </Button>
              </Form> */}
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
                  <select ref={examinationIdField} className="form-select">
                    <option hidden>Pilih Salah Satu</option>
                    <option ref={examinationIdField} value="1">
                      BPJS
                    </option>
                    <option ref={examinationIdField} value="2">
                      Non-BPJS
                    </option>
                  </select>
                </Form.Group>
                {errorResponse.isError && (
                  <Alert variant="danger">{errorResponse.message}</Alert>
                )}
                <Button
                  className="w-100 mt-3 mb-3 tombol"
                  type="Buat Janji"
                  style={colourButton}
                >
                  Buat Janji Kunjungan
                </Button>
              </Form>
            </div>
          </div>
          <div className="col-6 carosel_gambar">
            <Carousel2 />
            <div className="mx-auto text-center">
              <h3 className="my-4">
                <span className="font-weight-bold"> Butuh ke Dokter? </span>{" "}
                <span>
                  pake <img src="../logo.png" width="80" alt="" /> aja{" "}
                </span>
              </h3>
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
    <Navigate to="/login" replace />
  );
}
