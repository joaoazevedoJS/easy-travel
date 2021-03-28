import styled from 'styled-components';

import Background from '../../assets/img/background-paris.jpg';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  background: url(${Background}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  min-height: 100vh;
  max-width: 1216px;
  width: 100%;
  margin: 0 auto;
  color: var(--white);

  padding: 32px 0;

  header {
    display: flex;
    justify-content: space-between;
  }

  main {
    width: 100%;

    display: grid;
    grid-template-rows: repeat(3, 1fr);

    div.title {
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

      margin: 64px 0;
    }

    div.tags {
      display: flex;
    }

    div.buttons {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;

      svg {
        position: absolute;
        right: 0;
        cursor: pointer;

        color: #f95e3f;
      }

      svg:hover {
        color: #ff8165;
      }
    }

    div.recomedation {
      margin-top: 80px;
      width: 100%;

      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 32px;

      div {
        height: 187px;
        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;
        padding: 32px 16px 16px 16px;

        font-family: Mukta;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 150%;

        background: var(--white);

        color: var(--gray-1);

        box-shadow: 0px 84px 211px rgba(33, 33, 33, 0.11),
          0px 38.8357px 97.5517px rgba(33, 33, 33, 0.0815843),
          0px 22.2209px 55.8169px rgba(33, 33, 33, 0.0689459),
          0px 13.4879px 33.8804px rgba(33, 33, 33, 0.0593943),
          0px 8.12708px 20.4144px rgba(33, 33, 33, 0.0506057),
          0px 4.52568px 11.3681px rgba(33, 33, 33, 0.0410541),
          0px 1.94647px 4.88934px rgba(33, 33, 33, 0.0284157);
        border-radius: 8px;
      }

      img {
        width: 125px;
        height: 125px;

        position: absolute;
        top: -45px;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
