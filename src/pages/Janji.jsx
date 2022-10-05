import React from "react";

import { HomeNavbar } from "./components/navbar/navbar"
import { FooterHome } from "./components/footer/footer"
import  Carousel2  from "./components/carousel/Carousel2"

import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../css/style.css";


function Janji() {
  return (
    <div>
      <HomeNavbar />
      <div className="container">
        <div className="row judul">
          <img src="../logo.png" alt="" className="col-3 my-4 py-3" />
          <h2 className="text-left my-4 py-4 col-6">
            Pendaftaran Online Buat Janji
          </h2>
        </div>
        <div className="row mr-4">
          <div className="col-6  container_janji">
            <div>
              <Form>
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
              </Form>
            </div>
          </div>
          <div className="col-6 carosel_gambar">
            <Carousel2/>
            <div className="mx-auto text-center">
              <h3 className="my-4"><span className="font-weight-bold"> Butuh ke Dokter? </span> <span>pake <img src="../logo.png" width="80" alt="" /> aja </span></h3>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <hr width="1300" className="mx-auto"/>
      <div className="py-4">
        <FooterHome />
      </div>
    </div>
  );
}

export default Janji;
