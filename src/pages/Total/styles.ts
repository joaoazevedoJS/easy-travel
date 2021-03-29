import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1216px;
  width: 100%;
  margin: 0 auto;
  color: var(--black);

  padding: 32px 0;

  header {
    display: flex;
    justify-content: space-between;
    height: 46px;
  }

  h1 {
    margin-top: 64px;
    font-size: 48px;
    font-family: 'Sora', sans-serif;
  }

  > span {
    display: block;
    height: 6px;
    width: 70px;
    background: var(--orange-ligth);
    border-radius: 3px;
    margin-bottom: 64px;
  }

  main {
    display: grid;
    grid-template-columns: 382px 134px 1fr;

    background: #fefbff;
    box-shadow: 0px 0px 80px -30px var(--orange);
    border-radius: 38px;
    padding: 64px;

    section:first-child {
      div {
        display: flex;
        align-items: center;

        font-family: Mukta;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 140%;

        div {
          background: linear-gradient(
            225.27deg,
            #f95e3f 16.17%,
            #ff7457 75.59%
          );
          box-shadow: 0px 0px 80px -30px var(--orange);
          border-radius: 24px;
          padding: 24px;

          margin-right: 16px;

          svg {
            font-size: 32px;
            color: var(--white);
          }
        }
      }

      div + div {
        margin-top: 32px;
      }
    }

    > div {
      width: 6px;
      height: 280px;
      margin: 0 64px;
      background: linear-gradient(268.36deg, #ff7457 13.57%, #ff8165 82.54%);
      border-radius: 3px;
      border-radius: 24px;
    }

    section:last-child {
      h2 {
        font-family: 'Sora';
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 128%;
      }

      h3 {
        margin: 64px 0;
        font-family: Sora;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 130%;
      }

      div {
        display: flex;
        justify-content: space-between;

        span {
          color: #ff8165;

          font-family: Sora;
          font-style: normal;
          font-weight: 600;
          font-size: 48px;
          line-height: 125%;
        }
      }
    }
  }
`;
