import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';
import logo6 from '../../images/logo6.png';

export function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div>
          <img
            className="img-footer"
            src={logo6}
            alt="Logo do posto alvorada"
          />
        </div>
        <div>
          <h2>Localização</h2>
          <p className="localização">
            Av. dos Expedicionários Brasileiros, 711 <br /> Bairro Coester,{' '}
            <br />
            Fernandópolis - SP
          </p>
        </div>
        <div>
          <h2>
            Horário <br /> de <br />
            Funcionamento
          </h2>
          <p>
            De segunda a domingo, <br /> atendimento 24 horas
          </p>
        </div>
        <div className="redes">
          <a
            className="instagram"
            href="https://www.instagram.com/superpostoalvorada/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="icon-footer" /> Instagram{' '}
          </a>

          <a
            className="whatsapp"
            href="https://api.whatsapp.com/send?phone=5517997248775&text=Ol%C3%A1%2C+gostaria+de+pedir+uma+marmita"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <FaWhatsapp className="icon-footer" /> Whatsapp
          </a>
        </div>
      </div>
      <div className="bottom">
        <span className="line"></span>
        <p> SUPER POSTO ALVORADA LTDA - TODOS OS DIREITOS RESERVADOS ©2023</p>
      </div>
    </div>
  );
}
