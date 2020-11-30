import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  height: 300px;
  padding: 10px;
  border-radius: 3rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-decoration: none;
  border: none;
  z-index: 1;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    filter: brightness(70%);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: baseline;
  height: 50%;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: #fff;
  text-align: left;
  text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
    1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
`;

export const RateDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Rate = styled.p`
  font-size: 2.2rem;
  color: #fff;
  margin-left: 6%;
  text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
    1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
`;
