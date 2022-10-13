import { Card, Container, Table, Button, Row, Col, } from "react-bootstrap";
import { HomeNavbar } from "./components/navbar/navbar"
import { FooterHome } from "./components/footer/footer"


export default function Antrian() {
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



    return(
        <div >
            <HomeNavbar />
            <Container style={{ paddingTop: '70px' }}>
                <Row className="justify-content-md-center">
                    <Col md="auto" style={{ textAlign: 'center' }}>                
                        <Card style={cardStyle} >
                            <Row>
                            <Col xs={12} md={6}>
                                <Card.Text style={cardText}>Antrian Saat Ini</Card.Text>
                                <Card.Title style={cardTitlePrimary} >1305</Card.Title>
                            </Col>
                            <Col xs={12} md={6}>
                                <Card.Text style={cardText}>Total Antrian</Card.Text>
                                <Card.Title style={cardTitle}>1380</Card.Title>
                            </Col>
                            </Row>
                        </Card>
                        <Button className="mt-5 mb-3" variant="outline-success" style={buttonStyle}>
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
                                <th>Nama Pasien</th>
                                <th style={{ width: '120px' }}>Tgl Kunjungan</th>
                                </tr>
                            </thead>
                            <tbody style={tbodyStyle}>
                                <tr className="text-muted">
                                    <td>1301</td>
                                    <td style={{ textAlign: 'left' }}>Pasien 1</td>
                                    <td>13/09/2022</td>
                                </tr>
                                <tr>
                                    <td>1302</td>
                                    <td style={{ textAlign: 'left' }}>Pasien 1</td>
                                    <td>13/09/2022</td>
                                </tr>
                                <tr>
                                    <td>1303</td>
                                    <td style={{ textAlign: 'left' }}>Pasien 1</td>
                                    <td>13/09/2022</td>
                                </tr>
                                <tr>
                                    <td>1304</td>
                                    <td style={{ textAlign: 'left' }}>Pasien 1</td>
                                    <td>13/09/2022</td>
                                </tr>
                                <tr>
                                    <td>1305</td>
                                    <td style={{ textAlign: 'left' }}>Pasien 1</td>
                                    <td>13/09/2022</td>
                                </tr>
                                <tr>
                                    <td>1306</td>
                                    <td style={{ textAlign: 'left' }}>Pasien 1</td>
                                    <td>13/09/2022</td>
                                </tr>
                                <tr>
                                    <td>1306</td>
                                    <td style={{ textAlign: 'left' }}>Pasien 1</td>
                                    <td>13/09/2022</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    </Col>
                    <Col xs={12} md={6} style={{ marginTop: '20px' }}>     
                    <div className="table-responsive" style={{ borderRadius: '6px' }}>            
                    <Table bordered style={{ marginBottom: '0' }}>
                            <thead style={theadStyle}>
                                <tr>
                                <th style={{ width: '92px' }}>No. Antrian</th>
                                <th>Nama Pasien</th>
                                <th style={{ width: '120px' }}>Tgl Kunjungan</th>
                                </tr>
                            </thead>
                            <tbody style={tbodyStyle}>
                                <tr className="text-muted">
                                    <td>1301</td>
                                    <td style={{ textAlign: 'left' }}>Pasien 1</td>
                                    <td>13/09/2022</td>
                                </tr>
                                <tr>
                                    <td>1302</td>
                                    <td style={{ textAlign: 'left' }}>Pasien 1</td>
                                    <td>13/09/2022</td>
                                </tr>
                                <tr>
                                    <td>1303</td>
                                    <td style={{ textAlign: 'left' }}>Pasien 1</td>
                                    <td>13/09/2022</td>
                                </tr>
                                <tr>
                                    <td>1304</td>
                                    <td style={{ textAlign: 'left' }}>Pasien 1</td>
                                    <td>13/09/2022</td>
                                </tr>
                                <tr>
                                    <td>1305</td>
                                    <td style={{ textAlign: 'left' }}>Pasien 1</td>
                                    <td>13/09/2022</td>
                                </tr>
                                <tr>
                                    <td>1306</td>
                                    <td style={{ textAlign: 'left' }}>Pasien 1</td>
                                    <td>13/09/2022</td>
                                </tr>
                                <tr>
                                    <td>1306</td>
                                    <td style={{ textAlign: 'left' }}>Pasien 1</td>
                                    <td>13/09/2022</td>
                                </tr>
                            </tbody>
                        </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr style={{ marginTop: '96px' }} />
            <FooterHome />
        </div>
    )
}