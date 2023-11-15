import { Navegacao } from './components/Navegacao/Navegacao';
import { Sobre } from './components/Sobre/Sobre';
import { ComoChegar } from './components/ComoChegar/ComoChegar';
import { Footer } from './components/Footer/Footer';
import { Banner } from './components/Banner/Banner';
import { Servicos } from './components/Servicos/Servicos';
import IrParaInicio from './components/IrParaInicio/IrParaInicio';
import { Conveniencia } from './components/Conveniencia/Conveniencia';
import { Marmitaria } from './components/Marmitaria/Marmitaria';

function App() {
  return (
    <div>
      <Navegacao />
      <Banner />
      <Sobre />
      <Servicos />
      <Conveniencia />
      <Marmitaria />
      <ComoChegar />
      <Footer />
      <IrParaInicio />
    </div>
  );
}

export default App;
