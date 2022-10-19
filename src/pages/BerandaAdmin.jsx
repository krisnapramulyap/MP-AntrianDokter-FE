import Table from 'react-bootstrap/Table';
import { useRef, useEffect, useState } from "react";
import { Link, useNavigate, useParams, Navigate } from "react-router-dom";
import { Button, } from "react-bootstrap";
import { AdminNavbar } from "./components/navbar/navbarAdmin"
import { FooterHome } from "./components/footer/footer"
import axios from "axios";
import "../css/style.css"


export default function BerandaAdmin() {

  const params = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState([]);
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: "",
  });

  console.log(data);
  console.log(book[0]);

  const getAdmin = async () => {

    try {
      const token = localStorage.getItem("token");
      const responseUsers = await axios.get(`https://mediq-backend.herokuapp.com/api/admins/who-am-i`,
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
    };
  }

  const bookData = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`https://mediq-backend.herokuapp.com/api/bookings`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data.data.data[0]);

    const data = await response.data.data.data;
    setBook(data);
    console.log(data)
  };

  const onUpdate = async (e, id, isDone) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const queueToUpdatePayload = {
        isDone: isDone,
      };

      const updateRequest = await axios.put(
        `https://mediq-backend.herokuapp.com/api/admins/update-booking/${id}`,
        queueToUpdatePayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(params.id)

      const updateResponse = await updateRequest.data;
      console.log(updateResponse)

      console.log(updateResponse.status)
      if (updateResponse.status) navigate("/berandaadmin");



    } catch (err) {
      const response = err.response.data;
      setErrorResponse({
        isError: true,
        message: response.message,
      });
    }
  };

  useEffect(() => {
    onUpdate();
    getAdmin();
    bookData();
  }, [book.id]);


  return isLoggedIn ? (
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
              <th className='tgl'>Tgl Kunjungan</th>
              <th className='ket'>Keterangan</th>
              <th className='selesai'>Selesai</th>
            </tr>
          </thead>
          {book ? (
            <tbody>
              {book.map((book) => {
                
                return (
                  book.isDone === false ? (
                    <tr key={book.id}>
                      <td style={{ textAlign: 'center' }}>{book.queueNumber}</td>
                      <td>{book.patientName}</td>
                      <td style={{ textAlign: 'center' }}>{book.dateOfVisit}</td>
                      <td>Keluhan</td>
                      <td><Button onClick={(e) => onUpdate(e, book.id, true)} variant="link">Selesai</Button></td>
                    </tr>
                  ) : (
                    <tr key={book.id}>
                      <td style={{ textAlign: 'center' }}>{book.queueNumber}</td>
                      <td>{book.patientName}</td>
                      <td style={{ textAlign: 'center' }}>{book.dateOfVisit}</td>
                      <td>Keluhan</td>
                      <td><Button onClick={(e) => onUpdate(e, true)} variant="link" style={{ color: 'grey' }}>Selesai</Button></td>
                    </tr>
                  )
                )
              })}
            </tbody>
          ) : ("")}
        </Table>
      </div>
      <hr style={{ marginTop: '2200px' }} />
      <FooterHome />
    </div>
  ) : (
    <Navigate to="/admin" replace />);;
}