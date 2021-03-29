import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .content {
    max-width: 1216px;
    width: 100%;
    margin: 0 auto;
    color: var(--white);

    padding: 32px 0 0px 0px;
  }

  header.main-header {
    border-radius: 0 0 50px 50px;
    background: #232224;

    padding: 32px 0 180px;

    nav {
      display: flex;
      justify-content: space-between;
    }

    div.title {
      h1 {
        font-size: 48px;
        font-family: 'Sora', sans-serif;
      }

      span {
        display: block;
        height: 6px;
        width: 100px;
        background: var(--orange-ligth);
        border-radius: 3px;
      }

      margin: 64px 0;
    }

    div.bars {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      button {
        background: transparent;
        border: none;
        color: var(--white);
      }

      div,
      button {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        font-family: Mukta;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 140%;

        transition: background-color 0.4s, color 0.4s;

        img,
        svg {
          transition: background-color 0.4s, color 0.4s;
          margin-right: 8px;
        }
      }

      div + div,
      div + button {
        margin-left: 24px;
      }

      div:hover,
      button:hover {
        color: #f95e3f;

        img,
        svg {
          color: #f95e3f;
        }
      }

      div:hover::before,
      button:hover::before {
        content: '';
        width: 120%;
        height: 2px;
        background: linear-gradient(225.27deg, #f95e3f 16.17%, #ff7457 75.59%);
        border-radius: 50px;
        position: absolute;
        bottom: -16px;
      }
    }

    div.bars::before {
      content: '';
      width: 100%;
      height: 2px;
      background: #e1dee3;
      border-radius: 50px;

      position: absolute;
      bottom: -16px;
    }
  }

  main.content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: -140px;
    column-gap: 32px;
  }
`;
