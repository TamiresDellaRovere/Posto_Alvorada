import { Nav } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import img1 from '../../images/marmitaria/marmita1.jpeg';
import img2 from '../../images/marmitaria/marmita2.jpeg';
import img3 from '../../images/marmitaria/marmita3.jpeg';
import './Marmitaria.css';

export function Marmitaria() {
  return (
    <div className='marmitaria'>
      <section className="container-marmitaria">

        <div className="mt-5 text-center">
          <h2 className="fs-1 mb-4">Marmitaria Alvorada</h2>
          <p className="fs-4 text-center">
            Explore uma variedade de sabores frescos e deliciosos a cada dia da
            semana com nossas marmitas especiais! Oferecemos pratos únicos
            diariamente, garantindo que cada refeição seja uma experiência
            incrível. <br /> Disponíveis nos tamanhos P e M.
          </p>

          <div className="link">
            <h3>Peça em nosso Whatsapp</h3>
            <Nav.Link
              className="link-whatsapp"
              href="https://api.whatsapp.com/send?phone=5517997248775&text=Ol%C3%A1%2C+gostaria+de+pedir+uma+marmita"
              target="_blank"
              rel="noreferrer">
              <FaWhatsapp className="link-whatsapp" /> 
            </Nav.Link>
          </div>
        </div>

        <div className="imgs-marmita ms-5">
          <img
            src={img2}
            alt="Foto do prato com a refeição"
          />
          <img
            src={img1}
            alt="Foto do prato com a refeição"
          />
          <img
            src={img3}
            alt="Foto do prato com a refeição"
          />
        </div>
      </section>
    </div>
  );
}
