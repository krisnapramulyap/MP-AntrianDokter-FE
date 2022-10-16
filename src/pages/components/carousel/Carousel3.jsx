import Carousel from 'react-bootstrap/Carousel';
import './carousel3.css'
import logo from '../../../images/logo.svg';

function Carousel3() {
    const carouselCaption = {
        color: '#008864',
        fontSize: '28px',
        fontWeight: '500',
        position: 'relative',
        top: '40px',
        width: '150%',
        left: '-25%',
    };

    const textDark = {
        color: '#333333',
    };

  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block"
          src="./Health-professional-team-amico.png"
          alt="First slide"
          height="428px"
        />
        <Carousel.Caption style={carouselCaption}>
            <div className="d-flex justify-content-center">
                <h3>Butuh ke Dokter? <span style={textDark}>Pake</span></h3>
                <span><img src={logo} width="80" className="mx-1" style={{ marginTop: '-10px' }} alt="" /></span>
                <h3 style={textDark}>aja</h3>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="./CT-scan-amico.png"
          alt="Second slide"
          height="428px"
        />

        <Carousel.Caption style={carouselCaption}>
            <h3>Kesehatan anda <span style={textDark}>adalah</span> Prioritas kami</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="./nursing-home-amico.png"
          alt="Third slide"
          height="428px"
        />

        <Carousel.Caption style={carouselCaption}>
            <h3>Kenyamanan anda <span style={textDark}>adalah</span> Tujuan kami</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel3;