import { Card, Container } from 'react-bootstrap';
import './Servicos.css';
import trocaOleo from '../../images/servicos/troca de oleo.jpg';
import combustivel from '../../images/servicos/combustivel_1.jpeg';
import limpezaCarro from '../../images/servicos/limpeza carro.jpeg';

export function Servicos() {
  return (
    <div className='div_servicos'>
      <Container className="servicos d-flex justify-content-center">
        <div className="div-servicos-text d-flex flex-column ">
          <h1 className="title-servicos mb-3">Serviços</h1>
          <p className="p-servicos">
            No Super Posto Alvorada, acreditamos que a qualidade é essencial
            para garantir a eficiência e a durabilidade dos veículos dos nossos
            clientes. O segredo do nosso sucesso está no atendimento caloroso e
            personalizado que oferecemos a cada cliente que entra no nosso
            posto. Nossa equipe é formada por profissionais experientes,
            treinados para proporcionar um serviço ágil, cortês e atencioso,
            estando sempre prontos para atender às necessidades específicas de
            cada pessoa que visita o nosso posto.
          </p>
        </div>
      </Container>
      <Container className='cardContainer d-flex justify-content-center'>
        <Card.Body className='corpoCard'>
          <Card.Img className="imgCard" variant="top" src={combustivel} />
          <Card.Title className='titleCard mt-3 mb-2'>
            Combustíveis de Qualidade
          </Card.Title>
          <Card.Text>
            Oferecemos combustíveis da mais alta qualidade, assegurando um
            desempenho excepcional para os veículos e a satisfação dos
            nossos clientes.
          </Card.Text>
        </Card.Body>

        <Card.Body className='corpoCard'>
          <Card.Img className="imgCard" variant="top" src={trocaOleo} />
          <Card.Title className=' titleCard mt-3 mb-2'>
            Troca de Óleo
          </Card.Title>
          <Card.Text>
            Trabalhamos com as melhores marcas, deixe-nos cuidar do
            coração do seu veículo com precisão e qualidade.
          </Card.Text>
        </Card.Body>

        <Card.Body className='corpoCard'>
          <Card.Img className="imgCard" variant="top" src={limpezaCarro} />
          <Card.Title className=' titleCard mt-3 mb-2'>
            Limpeza e Higienização
          </Card.Title>
          <Card.Text>
            Nossos profissionais dedicados garantem uma limpeza completa,
            desde o exterior reluzente até os detalhes internos.
          </Card.Text>
        </Card.Body>
      </Container>
    </div>
  );
}
