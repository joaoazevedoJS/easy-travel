import { FC, useCallback, useState } from 'react';

import { FiX } from 'react-icons/fi';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { Assistant } from '../../components/Assistant';

import Logo from '../../assets/svg/logo.svg';
import Play from '../../assets/svg/play.svg';

import { Container, Content } from './styles';

const Home: FC = () => {
  const [isPlayed, setIsPlayed] = useState(false);
  const [isActiveAssistant, setIsActiveAssistant] = useState(false);

  const handlePlayVideo = useCallback(() => {
    setIsPlayed(!isPlayed);
  }, [isPlayed]);

  const handleActiveAssistant = useCallback(() => {
    setIsActiveAssistant(!isActiveAssistant);
  }, [isActiveAssistant]);

  return (
    <Container>
      {!isPlayed && (
        <Content>
          <header>
            <img src={Logo} alt="Easy Travel" />
          </header>

          <main>
            <section>
              <h1>França</h1>
              <span />

              <p>
                Conheça sobre um dos locais mais procurado do mundo, deixe que
                nosso assistente virtual te ajude nessa jornada!
              </p>

              <button type="button" onClick={handlePlayVideo}>
                <img src={Play} alt="Play vídeo" />
                Assista agora
              </button>
            </section>

            <article>
              <div className="active" />

              <div />

              <div />
            </article>
          </main>

          <footer>
            <ButtonPrimary onClick={handleActiveAssistant} type="button">
              Planejar minha viagem para a França
            </ButtonPrimary>
          </footer>
        </Content>
      )}

      {isPlayed && (
        <main className="video">
          <button type="button" onClick={handlePlayVideo}>
            <FiX size={24} />
          </button>

          <iframe
            src={`https://www.youtube.com/embed/9PRMLbfEFXg?autoplay=${
              isPlayed ? 1 : 0
            }`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </main>
      )}

      {isActiveAssistant && (
        <Assistant
          page="cities"
          avatar="padrao"
          avatarSpeak={[
            'Olá, me chamo Henrique, sou o assistente virtual da Easy Travel.',
            'Que bom que você se interessou pela França e para te ajudar no seu planejamento irei chamar um amigo meu de lá!',
          ]}
        />
      )}
    </Container>
  );
};

export { Home };
