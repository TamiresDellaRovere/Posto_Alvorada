import './Navegacao.css';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useState } from 'react';
import logo6 from '../../images/logo6.png';
import logo from '../../images/logo6.png';

export function Navegacao() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const closeOffcanvas = () => {
    setShowOffcanvas(false); // Função para fechar o Offcanvas
  };

  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container className="pt-2 pb-2">
          <div className="d-flex align-items-center gap-3">
            <img
              className="logo-navbar"
              src={logo6}
              alt="Logo do posto alvorada"
            />
          </div>
          <Nav className=" align-items-bottom">
            <div className="gap-2 nav-web">
              <Link
                className="item-navbar"
                to="container-sobre"
                spy={true}
                smooth={true}
                offset={50}
                duration={50}
              >
                Sobre Nós
              </Link>
              <Link
                className="item-navbar"
                to="servicos"
                spy={true}
                smooth={true}
                offset={30}
                duration={100}
              >
                Serviços
              </Link>
              <Link
                className="item-navbar"
                to="container-conveniencia"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Conveniência
              </Link>
              <Link
                className="item-navbar"
                to="marmitaria"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Marmitaria
              </Link>
              <Link
                className="item-navbar"
                to="div-maior-como-chegar"
                spy={true}
                smooth={true}
                offset={-15}
                duration={200}
              >
                Como Chegar
              </Link>
              <div className="d-flex">
                <Nav.Link
                  href="https://api.whatsapp.com/send?phone=5517997248775&text=Ol%C3%A1%2C+gostaria+de+pedir+uma+marmita"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp className="icon-navbar" />
                </Nav.Link>
                <Nav.Link
                  href="https://www.instagram.com/superpostoalvorada/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="icon-navbar" />
                </Nav.Link>
              </div>
            </div>

            <div className="d-lg-none">
              <button
                style={{ color: '#0B1546' }}
                className="navbar-toggler-icon icon-navbar"
                onClick={handleOffcanvasToggle}
              >
                {/* <FaBars /> */}
              </button>
            </div>
          </Nav>
        </Container>
      </Navbar>
      <Offcanvas
        className="nav-mobile"
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              className="logo-navbar"
              src={logo}
              alt="Logo do posto alvorada"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="nav-mobile-body">
          <Link
            className="item-navbar"
            to="container-sobre"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
            onClick={closeOffcanvas}
          >
            Sobre Nós
          </Link>
          <Link
            className="item-navbar"
            to="servicos"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeOffcanvas}
          >
            Serviços
          </Link>
          <Link
            className="item-navbar"
            to="container-conveniencia"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={closeOffcanvas}
          >
            Conveniência
          </Link>
          <Link
            className="item-navbar"
            to="marmitaria"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={closeOffcanvas}
          >
            Marmitaria
          </Link>
          <Link
            className="item-navbar"
            to="div-maior-como-chegar"
            spy={true}
            smooth={true}
            offset={-15}
            duration={200}
            onClick={closeOffcanvas}
          >
            Como Chegar
          </Link>
          <div className="d-flex">
            <Nav.Link
              href="https://api.whatsapp.com/send?phone=5517997248775&text=Ol%C3%A1%2C+gostaria+de+pedir+uma+marmita"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="icon-navbar" />
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/superpostoalvorada/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="icon-navbar" />
            </Nav.Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
