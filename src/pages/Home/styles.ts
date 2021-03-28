import styled from 'styled-components';
import Background from '../../assets/img/background-france.jpg';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  background: url(${Background}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  main.video {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    button {
      margin: 32px;
      border: none;
      background: #fff;
      border-radius: 50px;
      width: 40px;
      height: 40px;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      transition: background-color 0.4s;

      svg {
        color: var(--orange);
      }
    }

    button:hover {
      background: #4d4c4e;

      svg {
        color: var(--white);
      }
    }

    iframe {
      width: 100%;
      min-height: calc(100vh - 110px);
    }
  }
`;

export const Content = styled.div`
  min-height: 100vh;
  max-width: 1216px;
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 42px 1fr 54px;

  padding: 64px 0 80px 0;
  color: var(--white);

  header {
    img {
      height: 100%;
    }
  }

  main {
    display: flex;
    justify-content: space-between;
    align-self: center;
    width: 100%;

    section {
      width: 279px;

      h1 {
        font-size: 48px;
        font-family: 'Sora', sans-serif;
      }

      span {
        display: block;
        height: 6px;
        width: 50px;
        background: var(--orange-ligth);
        border-radius: 3px;
      }

      p {
        margin: 24px 0;
        font-size: 16px;
        line-height: 150%;
      }

      button {
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        cursor: pointer;

        color: var(--white);
        font-size: 16px;
        line-height: 150%;

        img {
          margin-right: 16px;
          transition: opacity 0.5s;
        }

        img:hover {
          opacity: 0.4;
        }
      }
    }

    article {
      align-self: center;

      div {
        width: 12px;
        height: 12px;
        background: #e1dee3;
        border-radius: 50%;
        cursor: pointer;
        position: relative;

        transition: background-color 0.4s;
      }

      div:hover {
        background: linear-gradient(220.94deg, #bb71d2 14.43%, #9142a8 85.28%);
        opacity: 0.3;
      }

      div + div {
        margin-top: 24px;
      }

      div.active {
        background: linear-gradient(220.94deg, #bb71d2 14.43%, #9142a8 85.28%);
      }
    }
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;
