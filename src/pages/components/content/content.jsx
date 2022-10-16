import { textAlign } from "@mui/system";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import "./content.css";
import download from "../../../images/playstore.svg";
import card1 from "../../../images/card1.svg";
import card2 from "../../../images/card2.svg";
import card3 from "../../../images/card3.svg";
import section3 from "../../../images/section3.svg";
import section4 from "../../../images/section4.svg";

const styleLink = {
  textDecoration: "none",
  color: "#008864",
  fontWeight: "bold",
};

const colourButton = {
  backgroundColor: "#008864",
  borderRadius: "8px",
  border: "1px solid #008864",
};

export function Content() {
  const colourButton2 = {
    textDecoration: "none",
    backgroundColor: "#FFFFFF",
    color: "#008864",
    borderRadius: "8px",
    border: "1px solid #008864",
  };

  const navigate = useNavigate();

  const navigateToBook = () => {
    // 👇️ navigate to /contacts
    navigate("/buatjanji");
  };
  const navigateToQueue = () => {
    // 👇️ navigate to /contacts
    navigate("/antrian");
  };
  return (
    <>
      <div className="text1">
        <p>
          Gimana sih cara{" "}
          <Link style={styleLink} to="/buatjanji">
            Buat Janji
          </Link>{" "}
          Kunjungan?{" "}
        </p>
      </div>

      <section className="grid-service">
        <div className="container mt-5">
          <div className="faq"></div>
          <div className="why-text">
            <div className="row">
              <div className="col-4 ps-1">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="photo1"
                      alt=""
                      src={card1}
                      width="280px"
                      height="220px"
                    />
                    <p style={{ marginTop: "40px" }}>
                      Pilih Dokter untuk<br></br> Kunjungan Kamu
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4 ps-4">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="photo2"
                      alt=""
                      src={card2}
                      width="280px"
                      height="260px"
                    />
                    <p style={{ marginTop: "40px" }}>Pilih Tanggal Kunjungan</p>
                  </div>
                </div>
              </div>
              <div className="col-4 ps-5">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="photo3"
                      alt=""
                      src={card3}
                      width="280px"
                      height="230px"
                    />
                    <p style={{ marginTop: "40px" }}>
                      Datang sesuai Tanggal dan<br></br>
                      Jam yang sudah Ditentukan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="button">
        <Button
          onClick={navigateToBook}
          style={colourButton}
          className="button1"
        >
          Buat Janji Temu
        </Button>{" "}
        <Button
          onClick={navigateToQueue}
          style={colourButton2}
          className="button2"
        >
          Cek Antrian Hari Ini
        </Button>{" "}
      </div>

      <div className="text2">
        <p>
          Kenapa Harus{" "}
          <Link style={styleLink} to="/buatjanji">
            Buat Janji
          </Link>{" "}
          pake{" "}
          <Link style={styleLink} to="/">
            MediQ
          </Link>
          ?{" "}
        </p>
      </div>

      <div className="container section3">
        <div className="row">
          <div className="col-sm grid-service grid-best">
            <img alt="" src={section3} className="size-service" />
          </div>
          <div className="col-sm ">
            <div className="grid2">
              <h3>Ga Cape nungguin Dokter!</h3>
              <p>
                Dengan MediQ kamu udah tau duluan Nomor Antrian Kamu dan Jam
                berapa<br></br>
                waktu kunjungan kamu. Dengan begitu kamu ga repot harus nungguin
                Dokter<br></br>
                dari pagi
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container section4">
        <div className="row">
          <div className="col-sm ">
            <div className="grid3">
              <h3>Ter-percaya banget Bestie!</h3>
              <p>
                Bapak/Ibu Dokter yang ada di MediQ, <br></br>adalah dokter
                pilihan bestie! Semuanya sudah pasti memiliki pengalaman di{" "}
                <br></br>Polinya selama Bertahun-tahun. Jadi<br></br> kamu ga
                perlu ragu buat Konsultasi<br></br> Dokter lewat MediQ{" "}
              </p>
            </div>
          </div>
          <div className="col-sm grid-service grid-best">
            <img alt="" src={section4} className="size-service2" />
          </div>
        </div>
      </div>

      <div className="download">
        <img alt="" src={download} className="picturedownload" />
      </div>
    </>
  );
}
