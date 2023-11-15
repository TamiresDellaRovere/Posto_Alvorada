import { Container } from "react-bootstrap";
import "./ComoChegar2.css";
import card2 from "../../images/como-chegar/card-2.png"
import card3 from "../../images/como-chegar/card-3.jpg"

export function ComoChegar2() {
    return (
        <>
            <Container className="d-flex justify-content-center gap-5 div-maior-como-chegar">

                <div className="card-como-chegar d-flex flex-column">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14970.047535465977!2d-50.2436542!3d-20.2790687!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94981ef369d2954d%3A0x77b5d1872ff9ee76!2sPosto%20Alvorada!5e0!3m2!1spt-BR!2sbr!4v1690988700150!5m2!1spt-BR!2sbr" className="google-maps" title="Posto Alvorada - Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <h2 className="title-card-como-chegar mt-3">Como Chegar</h2>
                    <span className="span-card-como-chegar">Clique em ver
                        <a className="link-span-como-chegar" target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Posto+Alvorada/@-20.2790687,-50.2436542,15z/data=!4m6!3m5!1s0x94981ef369d2954d:0x77b5d1872ff9ee76!8m2!3d-20.2790687!4d-50.2436542!16s%2Fg%2F1td0p39z?entry=ttu"> Mapa ampliado</a>
                        <br /> para acessar o Google Maps</span>
                </div>
                <div className="card-como-chegar d-flex flex-column">
                    <img className="img-card-como-chegar" src={card2} alt="" />
                    <h2 className="title-card-como-chegar mt-3">Localização</h2>
                    <span className="span-card-como-chegar mb-4">Av. dos Expedicionários Brasileiros, 711 <br /> Bairro Coester, Fernandópolis - SP</span>
                </div>
                <div className="card-como-chegar d-flex flex-column">
                    <img className="img-card-como-chegar" src={card3} alt="" />
                    <h2 className="title-card-como-chegar mt-3">Horário de <br />Funcionamento</h2>
                    <span className="span-card-como-chegar">De segunda a domingo, <br /> atendimento 24 horas</span>
                </div>
            </Container>
        </>
    );
};