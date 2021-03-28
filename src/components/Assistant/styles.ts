import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(53, 52, 54, 0.5);

  .content {
    position: relative;
    max-width: 1216px;
    width: 100%;

    display: flex;

    margin-top: auto;

    color: var(--white);

    img {
      width: 264px;
    }
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 736px;
  width: 100%;
  background: var(--white);
  color: var(--gray-1);
  padding: 32px;
  border-radius: 20px;
  position: absolute;
  top: -50px;
  left: 234px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -10px;
    border-top: 25px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 25px solid var(--white);
  }

  svg {
    color: var(--purple);
    align-self: flex-end;
    font-size: 24px;
    margin-bottom: 24px;
    cursor: pointer;
  }

  p {
    font-family: 'Mukta', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 140%;

    margin: 0;
  }

  p + p {
    margin-top: 16px;
  }

  button {
    margin-top: 24px;
    padding: 8px 64px;
    border: 2px solid var(--orange);
    border-radius: 16px;
    color: var(--red);
    font-size: 16px;
    transition: 0.2s ease;
    background: transparent;
    align-self: flex-end;

    &:hover {
      background: linear-gradient(225.27deg, #f95e3f 16.17%, #ff7457 75.59%);
      color: var(--white);
    }
  }
`;
