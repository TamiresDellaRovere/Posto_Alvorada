import { Card } from 'react-bootstrap';
import './Sobre.css';
import img from '../../images/sobre/logo6 (1).png';
import img2 from '../../images/sobre/equipe-posto.jpeg';
import img1 from '../../images/sobre/capa.png';
import img3 from '../../images/sobre/gasolina.png';

export function Sobre() {
  return (
    <>
      <section className="container-sobre">
        <div className="d-flex justify-content-around align-items-center flex-wrap mb-5">
          <img className="logo-sobre" src={img} alt="" />
          <div className="titulo-sobre">
            <h2 className="fw-bold fs-2">Sobre Nós</h2>
            <p className="fs-4">
              Seja bem-vindo ao seu ponto confiável para abastecimento <br /> e atendimento excepcional em Fernandópolis.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-around flex-wrap gap-1">
          <Card style={{ width: '18rem', maxHeight: '30rem' }}>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title className="fs-3 fw-bold text-center mb-2">
                Eficiência de Décadas
              </Card.Title>
              <Card.Text className="fs-7 p-2 ms-2">
                A eficiência ao longo de décadas é um dos nossos pilares. Orgulhamo-nos em ser uma referência na cidade, oferecendo aos nossos clientes os melhores produtos e atendimentos. No Super Posto Alvorada, a confiança é cultivada ao longo do tempo.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', maxHeight: '30rem' }}>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title className="fs-3 fw-bold text-center mb-2">
                Excelência em Combustíveis
              </Card.Title>
              <Card.Text className="fs-7 p-2 ms-2 ">
                Destacamo-nos pela excelência em combustíveis. O Super Posto Alvorada tem sido uma referência na cidade, oferecendo sempre produtos de qualidade aos nossos clientes. Conte conosco para abastecer sua confiança e seu veículo.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', maxHeight: '30rem' }}>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title className="fs-3 fw-bold text-center mb-2">
                Qualidade de Atendimento
              </Card.Title>
              <Card.Text className="fs-7 p-2 ms-2">
                Garantimos a eficiência dos nossos serviços e também a confiança em cada interação. Estamos aqui para oferecer uma experiência completa pautada na qualidade e na segurança que você merece.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>
    </>
  );
}
