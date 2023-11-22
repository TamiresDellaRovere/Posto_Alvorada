import { Card } from 'react-bootstrap';
import imgDestilados from '../../images/conveniencias/destilados-conveniencia.jpg';
import imgCervejas from '../../images/conveniencias/cervejas-conveniencia1.jpg';
import imgRefri from '../../images/conveniencias/refrigerantes-conveniencia.jpg';
import imgBalas from '../../images/conveniencias/balas-conveniencia.jpeg';
import imgCarnes from '../../images/conveniencias/carnes-conveniencia.png';
import imgChips from '../../images/conveniencias/chips-conveniencia.jpeg';
import Slider from 'react-slick';
import './Conveniencia.css';
import { useEffect, useState } from 'react';

export function Conveniencia() {
  
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    beforeChange: (next) => setActiveCardIndex(next),
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 728) {
        setSliderSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 1,
        }));
      } else if (window.innerWidth <= 990) {
        setSliderSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 2,
        }));
      } else {
        setSliderSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 3,
        }));
      }
    };
  
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section className="container-conveniencia">
        <div className="titulo-conveniencia">
          <h2 className="fs-1">Conveniência Alvorada</h2>
          <p className="fs-5 pt-4">
          24 horas aberta para você, oferecendo praticidade a qualquer momento. Encontre o que precisa, seja durante o dia ou na madrugada. Seja bem-vindo à conveniência que se adapta ao seu horário.
          </p>
        </div>
        <div className="container-slide">
          <Slider {...sliderSettings}>
            <div
              className={`slide ${activeCardIndex === 0 ? 'active-slide' : ''}`}
            >
              <Card className="item-card">
                <Card.Img variant="top" src={imgDestilados} className="imagem-card"  />
                <Card.Body className="card-body-slide">
                  <Card.Title className="fs-4 fw-bold text-center mb-2">
                    DESTILADOS
                  </Card.Title>
                  <Card.Text>
                    Uma variedade de destilados, com as melhores marcas nacionais e importadas;
                    gostos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div
              className={`slide ${activeCardIndex === 1 ? 'active-slide' : ''}`}
            >
              <Card className="item-card ">
                <Card.Img variant="top" src={imgRefri} className="imagem-card" />
                <Card.Body className="card-body-slide">
                  <Card.Title className="fs-4 fw-bold text-center mb-2">
                    REFRIGERANTES, ÁGUAS E SUCOS
                  </Card.Title>
                  <Card.Text>
                    Refresque-se com nossas opções de águas, refrigerantes e
                    sucos gelados.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div
              className={`slide ${activeCardIndex === 2 ? 'active-slide' : ''}`}
            >
              <Card className="item-card ">
                <Card.Img variant="top" src={imgBalas} className="imagem-card" />
                <Card.Body className="card-body-slide">
                  <Card.Title className="fs-4 fw-bold text-center mb-2">
                    BALAS, CHICLETES E CHOCOLATES
                  </Card.Title>
                  <Card.Text>
                    Satisfaça seu desejo por doces com nossa seleção de balas,
                    chicletes e chocolates.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div
              className={`slide ${activeCardIndex === 3 ? 'active-slide' : ''}`}
            >
              <Card className="item-card ">
                <Card.Img variant="top" src={imgCervejas} className="imagem-card" />
                <Card.Body className="card-body-slide">
                  <Card.Title className="fs-4 fw-bold text-center mb-2">
                    CERVEJAS
                  </Card.Title>
                  <Card.Text>
                    As melhores marcas, extremamente gelada a qualquer hora do dia.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div
              className={`slide ${activeCardIndex === 4 ? 'active-slide' : ''}`}
            >
              <Card className="item-card ">
                <Card.Img variant="top" src={imgCarnes} className="imagem-card" />
                <Card.Body className="card-body-slide">
                  <Card.Title className="fs-4 fw-bold text-center mb-2">
                    CHURRASCO
                  </Card.Title>
                  <Card.Text>
                    Prepare um churrasco delicioso com nossos produtos
                    selecionados, vários tipos de cortes, para todos os gostos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div
              className={`slide ${activeCardIndex === 5 ? 'active-slide' : ''}`}
            >
              <Card className="item-card ">
                <Card.Img variant="top" src={imgChips} className="imagem-card"/>
                <Card.Body className="card-body-slide">
                  <Card.Title className="fs-4 fw-bold text-center mb-2">
                    SALGADINHOS
                  </Card.Title>
                  <Card.Text>
                    Uma variedade de salgadinhos, amendoins, bolachas e outro itens de mercearia para o seu dia.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
