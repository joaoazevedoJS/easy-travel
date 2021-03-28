import { FC, useCallback, useState } from 'react';
import { FiChevronRight, FiHome, FiMapPin } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { Goback } from '../../components/Goback';

import Logo from '../../assets/svg/logo.svg';
import Aspas from '../../assets/svg/aspas.svg';

import { Container, Content } from './styles';
import { Tag } from '../../components/Tag';
import { Assistant } from '../../components/Assistant';

const Cities: FC = () => {
  const history = useHistory();

  const [isActiveAssistant, setIsActiveAssistant] = useState(true);

  const handleChangePage = useCallback(() => {
    history.push('/hotels');
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
              <h1>Paris</h1>
              <span />
            </div>
            <div className="tags">
              <Tag>
                <FiMapPin /> 25 pontos turísticos
              </Tag>

              <Tag>
                <FiHome /> 40 Hoteis
              </Tag>
            </div>
          </section>

          <div className="buttons">
            <ButtonPrimary onClick={handleChangePage}>
              Escolher esse hotel
            </ButtonPrimary>

            <FiChevronRight size={64} />
          </div>

          <div className="recomedation">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <img src={Aspas} alt="''" />
            </div>

            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <img src={Aspas} alt="''" />
            </div>

            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <img src={Aspas} alt="''" />
            </div>
          </div>
        </main>
      </Content>

      {isActiveAssistant && (
        <Assistant
          avatar="frances"
          eventClick={() => setIsActiveAssistant(false)}
          avatarSpeak={[
            'Bonjour, me chamo Laurent Jacob. Vamos começar a escolhendo a cidade em que você deseja ir!',
          ]}
        />
      )}
    </Container>
  );
};

export { Cities };

// <div className="content">
//         <div className="wrapper-header">
//           <Goback />

//         <div className="wrapper-citie">
//           <h1 className="title">Paris</h1>
//           <span className="subline" />
//         </div>

//         <div className="wrapper-info">
//           <div className="wrapper-info__card">25 Pontos turisticos</div>
//           <div className="wrapper-info__card">40 Hoteis</div>
//         </div>

//         <div className="wrapper-buttons">
//           <ButtonPrimary>Escolher essa cidade</ButtonPrimary>
//         </div>

//         <div className="wrapper-cards">
//           <div className="wrapper-cards__card1">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos amet
//             officiis, sed iste accusantium quae asperiores cum placeat nihil
//             porro non explicabo incidunt minus. Nisi nihil neque labore
//             inventore iure.
//           </div>
//           <div className="wrapper-cards__card2">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos amet
//             officiis, sed iste accusantium quae asperiores cum placeat nihil
//             porro non explicabo incidunt minus. Nisi nihil neque labore
//             inventore iure.
//           </div>
//           <div className="wrapper-cards__card3">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos amet
//             officiis, sed iste accusantium quae asperiores cum placeat nihil
//             porro non explicabo incidunt minus. Nisi nihil neque labore
//             inventore iure.
//           </div>
//         </div>
//       </div>
