import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"

export function HomeNavbar() {


  return (
    <Navbar collapseOnSelect expand="lg" bg="green" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src="/MediQ.png"
              width="70"
              height="38"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Beranda">Beranda</Nav.Link>
            <Nav.Link href="#BuatJanji">Buat Janji</Nav.Link>
            <Nav.Link href="#TentangKami">Tentang Kami</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="Login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
