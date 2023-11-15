import { Card } from 'react-bootstrap';
import img2 from '../../images/conveniencias/bebidas.jpg';
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
    autoplaySpeed: 3000,
    arrows: true,
    beforeChange: (next) => setActiveCardIndex(next),
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 728) {
        setSliderSettings({
          ...sliderSettings,
          slidesToShow: 1,
        });
      } else if (window.innerWidth <= 990) {
        setSliderSettings({
          ...sliderSettings,
          slidesToShow: 2,
        });
      } else {
        setSliderSettings({
          ...sliderSettings,
          slidesToShow: 3,
        });
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
        <div className="ms-3 titulo-slide mb-5 text-center">
          <h2 className="fs-1">Conveniência Alvorada</h2>
          <p className="fs-5">
            Não importa o horário, tudo que você precisa ao seu alcançe!
          </p>
        </div>
        <div className="container-slide">
          <Slider {...sliderSettings}>
            <div
              className={`slide ${activeCardIndex === 0 ? 'active-slide' : ''}`}
            >
              <Card className="item-card">
                <Card.Img variant="top" src={img2} />
                <Card.Body className="card-body-slide">
                  <Card.Title className="fs-4 fw-bold text-center mb-2">
                    Cervejas, destilados, e vinhos
                  </Card.Title>
                  <Card.Text>
                    Uma variedade de cervejas, destilados e vinhos para todos os
                    gostos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div
              className={`slide ${activeCardIndex === 1 ? 'active-slide' : ''}`}
            >
              <Card className="item-card ">
                <Card.Img variant="top" src={img2} />
                <Card.Body className="card-body-slide">
                  <Card.Title className="fs-4 fw-bold text-center mb-2">
                    Águas, refrigerantes e sucos
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
                <Card.Img variant="top" src={img2} />
                <Card.Body className="card-body-slide">
                  <Card.Title className="fs-4 fw-bold text-center mb-2">
                    Balas, Chicletes e chocolates
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
                <Card.Img variant="top" src={img2} />
                <Card.Body className="card-body-slide">
                  <Card.Title className="fs-4 fw-bold text-center mb-2">
                    Tabacaria
                  </Card.Title>
                  <Card.Text>
                    Encontre produtos de tabacaria, incluindo cigarros e
                    acessórios.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div
              className={`slide ${activeCardIndex === 4 ? 'active-slide' : ''}`}
            >
              <Card className="item-card ">
                <Card.Img variant="top" src={img2} />
                <Card.Body className="card-body-slide">
                  <Card.Title className="fs-4 fw-bold text-center mb-2">
                    Churrasco
                  </Card.Title>
                  <Card.Text>
                    Prepare um churrasco delicioso com nossos produtos
                    selecionados para churrasco.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div
              className={`slide ${activeCardIndex === 5 ? 'active-slide' : ''}`}
            >
              <Card className="item-card ">
                <Card.Img variant="top" src={img2} />
                <Card.Body className="card-body-slide">
                  <Card.Title className="fs-4 fw-bold text-center mb-2">
                    Mercearia
                  </Card.Title>
                  <Card.Text>
                    Itens essenciais de mercearia para suas necessidades
                    diárias.
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
