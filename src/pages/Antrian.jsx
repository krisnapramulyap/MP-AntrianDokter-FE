import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate, Navigate, } from "react-router-dom";
import { Card, Container, Table, Button, Row, Col, Modal } from "react-bootstrap";
import { HomeNavbar } from "./components/navbar/navbar"
import { FooterHome } from "./components/footer/footer"
import axios from "axios";
import logo from '../images/logo.svg';

export default function Antrian() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [bookUser, setBookUser] = useState([]);
    const [book, setBook] = useState([]);
    const [data, setData] = useState({});
    const [queue, setQueue] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    console.log(bookUser)

    console.log(data)

    const cardStyle = {
        height: 'auto',
        minWidth: '526px',
        padding: '38px',
        textAlign: 'center',
        filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25))',
        borderRadius: '12px',
        border: 'none',
    };
    const cardText = {
        fontSize: '12px',
        fontWeight: 'bold',
        minWidth: '100px',
    };
    const cardTitle = {
        fontSize: '44px',
        fontWeight: 'bold',
    };
    const cardTitlePrimary = {
        fontSize: '44px',
        fontWeight: 'bold',
        color: '#008864',
    };

    const buttonStyle = {
        padding: "14px 75px",
    };

    const tableStyle = {
        borderRadius: '12px !important',
    };

    const theadStyle = {
        backgroundColor: '#008864',
        color: 'white',
        fontSize: '12px',
        fontWeight: 'medium',
        textAlign: 'center',
        border: '#FCFCFC solid 1px',
    };

    const tbodyStyle = {
        fontSize: '12px',
        fontWeight: 'medium',
        textAlign: 'center',
        backgroundColor: '#E8E8E8',
        border: '#FCFCFC solid 1px',
    };

    const modalStyle = {
        padding: '40px 20px',
        color: '#000000',
        fontSize: '16px',
        fontWeight: 'bold',

    }

    const modalBody = {
        textAlign: 'center',
        padding: '0',
    }

    const modalMuted = {
        fontSize: '14px',
        color: '#8A8A8A',
        fontWeight: 'regular',
        marginBottom: '23px',
    };

    const modalTable = {
        textAlign: 'left',
        borderColor: '#FFFFFF',
        marginTop: '37px',
        marginLeft: '123px',
        maxWidth: '60%',
    };

    const modalTitle = {
        fontSize: '44px',
        color: '#008864',
        fontWeight: 'bold',
        marginBottom: '23px',
    }

    useEffect(() => {
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
                console.log(setData)

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
            console.log(response.data.data);

            const data = await response.data.data.data;
            setBook(data);
            console.log(data)
        };

        const queueData = async () => {
            const token = localStorage.getItem("token");
            const currentQueue = await axios.get('https://mediq-backend.herokuapp.com/api/current-queues', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(currentQueue.data.result[0]);
            const queues = currentQueue.data.result[0]

            setQueue(queues)
        }

        queueData();
        bookData();
        getUsers();
    }, [id]);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return isLoggedIn ? (
        <>
            <div >
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    style={modalStyle}
                >
                    {book ? (
                        <Modal.Body style={modalBody}>
                            {book.map((book) =>
                                data.id === book.patientId && book.isDone === false ? (
                                    <div>
                                        <hr />
                                        <img alt="logo" src={logo} width='90' style={{ marginBottom: '8px', marginTop: '40px' }} />
                                        <p style={modalMuted}>Booking ID: 8577071</p>
                                        <h5 style={{ fontSize: '20px' }}>Nomor Antrian Anda</h5>
                                        <h2 style={modalTitle}>{book.queueNumber}</h2>
                                        <div style={{ margin: '0 20px' }}>
                                        </div>
                                        <Table style={modalTable} size="sm">
                                            <tbody >
                                                <tr>
                                                    <td>Nama</td>
                                                    <td>: {book.patientName}</td>
                                                </tr>
                                                <tr>
                                                    <td>Tanggal</td>
                                                    <td>: {book.dateOfVisit}</td>
                                                </tr>
                                                {/* <tr>
                                                    <td>Keterangan</td>
                                                    <td>: {book.examinationId}</td>
                                                </tr> */}
                                            </tbody>
                                        </Table>
                                        <hr />
                                    </div>
                                ) : (""))}
                        </Modal.Body>
                    ) : ("")}
                    <Modal.Footer style={{ border: 'none' }}>

                        <Button variant="outline-danger" style={{ border: 'none' }} onClick={handleClose}>
                            OK
                        </Button>
                    </Modal.Footer>
                </Modal>
                <HomeNavbar />
                <Container style={{ paddingTop: '70px' }}>
                    <Row className="justify-content-md-center">
                        <Col md="auto" style={{ textAlign: 'center' }}>
                            <Card style={cardStyle} >
                                <>
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <Card.Text style={cardText}>Antrian Saat Ini</Card.Text>
                                            <Card.Title style={cardTitlePrimary} >{queue.queue}</Card.Title>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Card.Text style={cardText}>Total Antrian</Card.Text>
                                            <Card.Title style={cardTitle}>{queue.count}</Card.Title>
                                        </Col>
                                    </Row>
                                </>


                            </Card>
                            <Button className="mt-5 mb-3" onClick={handleShow} variant="outline-success" style={buttonStyle}>
                                Cek Riwayat Antrian
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <Container style={{ marginTop: '50px' }}>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={6} style={{ marginTop: '20px' }}>
                            <div className="table-responsive" style={{ borderRadius: '6px' }}>
                                <Table bordered style={{ marginBottom: '0' }}>
                                    <thead style={theadStyle}>
                                        <tr>
                                            <th style={{ width: '92px' }}>No. Antrian</th>
                                            <th>Nama Pasien - BPJS</th>
                                            <th style={{ width: '120px' }}>Tgl Kunjungan</th>
                                        </tr>
                                    </thead>
                                    {book ? (
                                        <tbody style={tbodyStyle}>
                                            {book.map((book) =>
                                                book.isDone === false && book.examinationId === 1 ? (
                                                    <tr key={book.id}>
                                                        <td>{book.queueNumber}</td>
                                                        <td style={{ textAlign: 'left' }}>{book.patientName}</td>
                                                        <td>{book.dateOfVisit}</td>
                                                    </tr>
                                                ) : (""))}
                                        </tbody>
                                    ) : ("")}
                                </Table>
                            </div>
                        </Col>
                        <Col xs={12} md={6} style={{ marginTop: '20px' }}>
                            <div className="table-responsive" style={{ borderRadius: '6px' }}>
                                <Table bordered style={{ marginBottom: '0' }}>
                                    <thead style={theadStyle}>
                                        <tr>
                                            <th style={{ width: '92px' }}>No. Antrian</th>
                                            <th>Nama Pasien - Non BPJS</th>
                                            <th style={{ width: '120px' }}>Tgl Kunjungan</th>
                                        </tr>
                                    </thead>
                                    {book ? (
                                        <tbody style={tbodyStyle}>
                                            {book.map((book) =>
                                                book.isDone === false && book.examinationId === 2 ? (
                                                    <tr key={book.id}>
                                                        <td>{book.queueNumber}</td>
                                                        <td style={{ textAlign: 'left' }}>{book.patientName}</td>
                                                        <td>{book.dateOfVisit}</td>
                                                    </tr>
                                                ) : (""))}
                                        </tbody>
                                    ) : ("")}
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <hr style={{ marginTop: '96px' }} />
                <FooterHome />
            </div>
        </>
    ) : (
        <Navigate to="/login" replace />);;
}