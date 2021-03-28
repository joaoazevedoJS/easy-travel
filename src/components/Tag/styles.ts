import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;

  background: linear-gradient(220.94deg, #bb71d2 14.43%, #9142a8 85.28%);
  border-radius: 20px;
  padding: 8px 24px;

  color: var(--white);

  font-family: Mukta;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;

  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }

  & + div {
    margin-left: 24px;
  }
`;
