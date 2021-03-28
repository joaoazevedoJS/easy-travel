import { FC, useCallback } from 'react';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const Goback: FC = () => {
  const history = useHistory();
  const handleGoback = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Container onClick={handleGoback}>
      <FiArrowLeftCircle size={32} />
    </Container>
  );
};

export { Goback };
