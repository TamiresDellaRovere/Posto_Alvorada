import { Container } from 'react-bootstrap';
import './ComoChegar.css';

export function ComoChegar() {
  return (
    <>
      <Container className="container div-maior-como-chegar p-5">
        <h2 className="title-card-como-chegar mt-3">Como Chegar</h2>
        <span className="span-card-como-chegar">
          Clique em ver
          <a
            className="link-span-como-chegar"
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/Posto+Alvorada/@-20.2790687,-50.2436542,15z/data=!4m6!3m5!1s0x94981ef369d2954d:0x77b5d1872ff9ee76!8m2!3d-20.2790687!4d-50.2436542!16s%2Fg%2F1td0p39z?entry=ttu"
          >
            {' '}
            Mapa ampliado <br />
          </a>
          para acessar o Google Maps
        </span>
        <span className="dados-mobile">
          <div>
            <h2>Localização</h2>
            <p className="localização">
              Av. Expedicionários Brasileiros, 711 <br /> Bairro: Jardim América,{' '}
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
        </span>
        <div className="card-como-chegar">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14970.047535465977!2d-50.2436542!3d-20.2790687!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94981ef369d2954d%3A0x77b5d1872ff9ee76!2sPosto%20Alvorada!5e0!3m2!1spt-BR!2sbr!4v1690988700150!5m2!1spt-BR!2sbr"
            className="google-maps"
            title="Posto Alvorada - Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </>
  );
}
