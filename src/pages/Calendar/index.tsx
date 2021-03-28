import { FC, useCallback, useState } from 'react';
import { FiAirplay, FiCalendar, FiMapPin, FiSend } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import Logo from '../../assets/svg/logo.svg';

import { Goback } from '../../components/Goback';
import { Datapicker } from '../../components/Datapicker';

import { Container } from './styles';
import { Assistant } from '../../components/Assistant';

const Calendar: FC = () => {
  const history = useHistory();

  const [isActiveAssistant, setIsActiveAssistant] = useState(true);

  const handleChangePage = useCallback(() => {
    history.push('/hotels');
  }, [history]);

  return (
    <Container>
      <header className="main-header">
        <div className="content">
          <nav>
            <Goback />
            <img src={Logo} alt="Easy Travel" />
          </nav>

          <div className="title">
            <h1>Quando você deseja viajar?</h1>
            <span />
          </div>

          <div className="bars">
            <div>
              <FiAirplay size={24} />

              <span>Estado</span>
            </div>

            <div>
              <FiMapPin size={24} />

              <span>Cidade</span>
            </div>

            <div>
              <FiCalendar size={24} />

              <span>Ida e Volta</span>
            </div>

            <div>
              <FiSend size={24} />

              <span>Paris</span>
            </div>

            <button type="button" onClick={handleChangePage}>
              <span>Continuar</span>
            </button>

            <div className="bars-down" />
          </div>
        </div>
      </header>

      <main className="content">
        <Datapicker />
        <Datapicker />
      </main>

      {isActiveAssistant && (
        <Assistant
          avatar="frances"
          eventClick={() => setIsActiveAssistant(false)}
          avatarSpeak={[
            'Bon, Paris. Boa escolha! Agora vamos escolher a data que queremos viajar.',
          ]}
        />
      )}
    </Container>
  );
};

export { Calendar };
