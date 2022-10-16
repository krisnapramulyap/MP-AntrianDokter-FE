import Table from 'react-bootstrap/Table';
import { useRef, useEffect, useState } from "react";
import { Link, useNavigate, Navigate, } from "react-router-dom";
import { Button, Alert, Row, Container, Col, } from "react-bootstrap";
import { AdminNavbar } from "./components/navbar/navbarAdmin"
import { FooterHome } from "./components/footer/footer"
import "../css/style.css"


function BerandaAdmin() {
  return (
    <div>
      <AdminNavbar />
      <div className="Container">

        <div className="Textdaftar">
          <h4>Daftar Antrian</h4>

        </div>
        <Table className="Tabel" striped bordered hover size="sm">
          <thead>
            <tr className='tabelcolour'>
              <th className='antri'>No.Antrian</th>
              <th className='pasien'>Nama Pasien</th>
              <th className='poli'>Poli</th>
              <th className='dokter'>Nama Dokter</th>
              <th className='tgl'>Tgl Kunjungan</th>
              <th className='ket'>Keterangan</th>
              <th className='selesai'>Selesai</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: 'center' }}>1305</td>
              <td>Devara Gandany</td>
              <td>Umum</td>
              <td>Dr.</td>
              <td style={{ textAlign: 'center' }}>23/09/2022</td>
              <td>Keluhan</td>
              <td><Button variant="link">Selesai</Button></td>
            </tr>
            <tr>
              <td style={{ textAlign: 'center' }}>1305</td>
              <td>Devara Gandany</td>
              <td>Umum</td>
              <td>Dr.</td>
              <td style={{ textAlign: 'center' }}>23/09/2022</td>
              <td>Keluhan</td>
              <td><Button variant="link">Selesai</Button></td>
            </tr>
            <tr>
              <td style={{ textAlign: 'center' }}>1305</td>
              <td>Devara Gandany</td>
              <td>Umum</td>
              <td>Dr.</td>
              <td style={{ textAlign: 'center' }}>23/09/2022</td>
              <td>Keluhan</td>
              <td><Button variant="link">Selesai</Button></td>
            </tr>
            <tr>
              <td style={{ textAlign: 'center' }}>1305</td>
              <td>Devara Gandany</td>
              <td>Umum</td>
              <td>Dr.</td>
              <td style={{ textAlign: 'center' }}>23/09/2022</td>
              <td>Keluhan</td>
              <td><Button variant="link">Selesai</Button></td>
            </tr>
            <tr>
              <td style={{ textAlign: 'center' }}>1305</td>
              <td>Devara Gandany</td>
              <td>Umum</td>
              <td>Dr.</td>
              <td style={{ textAlign: 'center' }}>23/09/2022</td>
              <td>Keluhan</td>
              <td><Button variant="link">Selesai</Button></td>
            </tr>
            <tr>
              <td style={{ textAlign: 'center' }}>1305</td>
              <td>Devara Gandany</td>
              <td>Umum</td>
              <td>Dr.</td>
              <td style={{ textAlign: 'center' }}>23/09/2022</td>
              <td>Keluhan</td>
              <td><Button variant="link">Selesai</Button></td>
            </tr>
            <tr>
              <td style={{ textAlign: 'center' }}>1305</td>
              <td>Devara Gandany</td>
              <td>Umum</td>
              <td>Dr.</td>
              <td style={{ textAlign: 'center' }}>23/09/2022</td>
              <td>Keluhan</td>
              <td><Button variant="link">Selesai</Button></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <hr style={{ marginTop: '895px' }} />
      <FooterHome />
    </div>
  );
}

export default BerandaAdmin;