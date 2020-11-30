import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  border-radius: 3rem;
  background: #333;
  z-index: 1;
  transition: all 0.3s;
`;

export const ActorPhoto = styled.img`
  width: 100%;
  height: 75%;
  border-radius: 3rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 25%;
  width: 100%;
`;

export const Name = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #fff;
`;

export const CharName = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: #fff;
`;
