import styled from 'styled-components';

import Hotel from '../../assets/img/hotel.jpg';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  background: url(${Hotel}) no-repeat center center fixed;
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
    flex-direction: column;
    justify-content: space-between;

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

    div.photos {
      margin-top: 40px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      div {
        display: flex;

        margin-bottom: 8px;

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
          background: linear-gradient(
            220.94deg,
            #bb71d2 14.43%,
            #9142a8 85.28%
          );
          opacity: 0.3;
        }

        div + div {
          margin-left: 24px;
        }

        div.active {
          background: linear-gradient(
            220.94deg,
            #bb71d2 14.43%,
            #9142a8 85.28%
          );
        }
      }

      section {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 32px;
      }

      img {
        box-shadow: 0px 84px 211px rgba(33, 33, 33, 0.11),
          0px 38.8357px 97.5517px rgba(33, 33, 33, 0.0815843),
          0px 22.2209px 55.8169px rgba(33, 33, 33, 0.0689459),
          0px 13.4879px 33.8804px rgba(33, 33, 33, 0.0593943),
          0px 8.12708px 20.4144px rgba(33, 33, 33, 0.0506057),
          0px 4.52568px 11.3681px rgba(33, 33, 33, 0.0410541),
          0px 1.94647px 4.88934px rgba(33, 33, 33, 0.0284157);
        border-radius: 8px;

        object-fit: cover;
        width: 100%;
        height: 187px;
      }
    }
  }
`;
