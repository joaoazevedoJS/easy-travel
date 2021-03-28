import styled from 'styled-components';

export const Container = styled.button`
  width: auto;
  padding: 16px 64px;
  border-radius: 16px;
  border: none;
  color: var(--white);
  font-size: 16px;
  font-weight: 500;
  transition: background-color 1.5s;
  text-transform: uppercase;
  background: linear-gradient(225.27deg, #f95e3f 16.17%, #ff7457 75.59%);
  box-shadow: 0px 17px 17px rgba(249, 94, 63, 0.13),
    0px 5.125px 5.125px rgba(249, 94, 63, 0.0847066),
    0px 2.12866px 2.12866px rgba(249, 94, 63, 0.065),
    0px 0.769896px 0.769896px rgba(249, 94, 63, 0.0452935);

  &:hover {
    background: linear-gradient(268.36deg, #ff7457 13.57%, #ff8165 82.54%);
  }
`;
