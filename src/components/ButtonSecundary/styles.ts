import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 260px;
  height: 56px;
  border: 2px solid var(--purple);
  border-radius: 16px;
  color: var(--black);
  font-size: 16px;
  font-weight: bold;
  transition: 0.5s ease;
  background: transparent;
  box-shadow: 0px 4px 25px -10px rgba(0, 0, 0, 0.5);

  &:hover {
    background: linear-gradient(220.94deg, #bb71d2 14.43%, #9142a8 85.28%);
    box-shadow: 0px 18px 52px -16px rgba(252, 189, 56, 0.3);
    color: var(--white);
  }
`;
