import { FC, useCallback, useState } from 'react';
import { FiChevronRight, FiDollarSign, FiStar } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import { Goback } from '../../components/Goback';
import { Tag } from '../../components/Tag';
import { Assistant } from '../../components/Assistant';
import { ButtonPrimary } from '../../components/ButtonPrimary';

import Logo from '../../assets/svg/logo.svg';

import Photo01 from '../../assets/img/hotel-photo-01.jpg';
import Photo02 from '../../assets/img/hotel-photo-02.jpg';
import Photo03 from '../../assets/img/hotel-photo-03.jpg';

import { Container, Content } from './styles';

const Hotels: FC = () => {
  const history = useHistory();

  const [isActiveAssistant, setIsActiveAssistant] = useState(true);

  const handleChangePage = useCallback(() => {
    history.push('/totals');
  }, [history]);

  return (
    <Container>
      <Content>
        <header>
          <Goback />

          <img src={Logo} alt="easy travel" />
        </header>

        <main>
          <section>
            <div className="title">
              <h1>Le Pradey</h1>
              <span />
            </div>
            <div className="tags">
              <Tag>
                <FiStar />5 Estrelas
              </Tag>

              <Tag>
                <FiDollarSign /> R$ 40 / noite
              </Tag>
            </div>
          </section>

          <div className="buttons">
            <ButtonPrimary onClick={handleChangePage}>
              Escolher esse hotel
            </ButtonPrimary>

            <FiChevronRight size={64} />
          </div>

          <div className="photos">
            <div>
              <div className="active" />

              <div />

              <div />
            </div>

            <section>
              <img src={Photo01} alt="quarto" />
              <img src={Photo02} alt="sala" />
              <img src={Photo03} alt="quarto" />
            </section>
          </div>
        </main>
      </Content>

      {isActiveAssistant && (
        <Assistant
          avatar="frances"
          eventClick={() => setIsActiveAssistant(false)}
          avatarSpeak={[
            'Chegamos no passo final, vamos escolher os hoteis perfeitos para que voc?? tenha um otimo descanso.',
          ]}
        />
      )}
    </Container>
  );
};

export { Hotels };
