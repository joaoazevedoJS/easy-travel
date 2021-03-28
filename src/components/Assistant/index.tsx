import { FC, useCallback } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { FiVolume2 } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import avatarPadrao from '../../assets/svg/avatar-padrao.svg';
import avatarFrances from '../../assets/svg/avatar-frances.svg';

import { Container, ContentBox } from './styles';

const Avatars = {
  padrao: <img src={avatarPadrao} alt="avatar padrao" />,
  frances: <img src={avatarFrances} alt="avatar tompero" />,
};

interface AssistantProps {
  page?: string;
  avatarSpeak: Array<string>;
  avatar: 'padrao' | 'frances';
  isCancel?: boolean;
  eventClick?: () => void;
}

const Assistant: FC<AssistantProps> = ({
  avatar,
  avatarSpeak,
  page,
  eventClick,
}) => {
  const history = useHistory();

  const { speak, voices } = useSpeechSynthesis();

  const handleSpeak = useCallback(() => {
    const text = avatarSpeak.join();

    speak({
      text,
      rate: 0.8,
      voice: voices[14],
    });
  }, [speak, voices, avatarSpeak]);

  const handleChangePage = useCallback(() => {
    history.push(`/${page}`);
  }, [history, page]);

  return (
    <Container>
      <div className="content">
        {Avatars[avatar]}

        <ContentBox>
          <FiVolume2 onClick={handleSpeak} />

          {avatarSpeak.map(text => (
            <p key={text}>{text}</p>
          ))}

          <button type="button" onClick={eventClick ?? handleChangePage}>
            Continuar
          </button>
        </ContentBox>
      </div>
    </Container>
  );
};

export { Assistant };
