import styled from 'styled-components';

export const Container = styled.div`
  header {
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 130%;
    color: var(--black);

    padding: 24px;

    text-align: center;

    display: flex;
    justify-content: space-between;
    width: 100%;
    background: #f7f2fa;
    box-shadow: 0px 19.2534px 7.74008px rgba(33, 33, 33, 0.0322036),
      0px 10.7216px 4.31018px rgba(33, 33, 33, 0.0261253),
      0px 4.61127px 1.85378px rgba(33, 33, 33, 0.0180827);
    border-radius: 16px;

    svg {
      font-size: 32px;
      cursor: pointer;
    }

    p {
      user-select: none;
    }
  }

  main {
    width: 100%;
    margin-top: 16px;
    padding: 24px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    column-gap: 16px;
    row-gap: 24px;
    color: var(--black);

    background: #f7f2fa;
    box-shadow: 0px 19.2534px 7.74008px rgba(33, 33, 33, 0.0322036),
      0px 10.7216px 4.31018px rgba(33, 33, 33, 0.0261253),
      0px 4.61127px 1.85378px rgba(33, 33, 33, 0.0180827);
    border-radius: 16px;

    button {
      /* text 18px */

      font-family: Mukta;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 140%;
      /* identical to box height, or 34px */

      text-align: center;

      border: none;
      display: flex;
      align-items: center;
      justify-content: center;

      background: linear-gradient(
        180deg,
        #a8a7a9 0%,
        rgba(168, 167, 169, 0.29) 100%
      );
      border-radius: 24px;

      padding: 16px;
      cursor: pointer;
    }

    button.selected {
      background: linear-gradient(268.36deg, #ff7457 13.57%, #ff8165 82.54%);
      color: var(--white);
    }

    button.disable {
      opacity: 0;
      cursor: unset;
    }
  }
`;
