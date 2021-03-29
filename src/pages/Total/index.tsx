import { FC } from 'react';
import { FiDollarSign, FiHome, FiMapPin } from 'react-icons/fi';
import { Goback } from '../../components/Goback';

import Logo from '../../assets/svg/logo-dark.svg';

import { Container } from './styles';

const Total: FC = () => {
  return (
    <Container>
      <header>
        <Goback />

        <img src={Logo} alt="easy travel" />
      </header>

      <h1>Resultado</h1>
      <span />

      <main>
        <section>
          <div>
            <div>
              <FiMapPin />
            </div>
            Passagem de Ida e Volta para Paris (R$ 2.290,50)
          </div>

          <div>
            <div>
              <FiHome />
            </div>
            10 Noites no hotel Le Pradey (R$ 1.010,00)
          </div>

          <div>
            <div>
              <FiDollarSign />
            </div>
            Gasto com comida e bebidas (R$ 290,00)
          </div>
        </section>

        <div />

        <section>
          <div>
            <h2>Total:</h2>

            <span>R$ 3.590,50</span>
          </div>

          <h3>Page menos com milhas!</h3>

          <div>
            <h2>Com Milhas:</h2>

            <span>R$ 2.782,50</span>
          </div>
        </section>
      </main>
    </Container>
  );
};

export { Total };
