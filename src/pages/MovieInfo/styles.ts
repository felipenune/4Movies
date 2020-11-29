import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  width: 95%;
  min-height: 500px;
  margin-top: -7%;
  border-radius: 3rem;
  margin-bottom: 3%;
  background: #333;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
    margin-top: -20%;
  }
`;

export const Poster = styled.img`
  width: 30%;
  min-height: 100%;
  border-top-left-radius: 3rem;
  border-bottom-left-radius: 3rem;

  @media (max-width: 768px) {
    height: 50%;
    width: 100%;
    border-bottom-left-radius: 0;
    border-top-right-radius: 3rem;
  }
`;

export const OverviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 30px;
  color: #fff;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2%;
`;

export const SubTitle = styled.p`
  font-size: 2.5rem;

  @media (max-width: 768px) {
    margin-top: 10%;
  }
`;

export const Overview = styled.p`
  text-align: justify;
  font-size: 2rem;
  margin-bottom: 5%;
`;

export const SubInfosDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const CollumInfosDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    align-items: center;
  }
`;

export const InfoText = styled.p`
  display: flex;
  align-items: flex-end;
  font-size: 2rem;
`;

export const SmallText = styled.span`
  font-size: 1.5rem;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 20%;
  margin-bottom: 10%;

  @media (max-width: 540px) {
    width: 100%;
    margin-bottom: 30%;
  }
`;

export const ButtonCategory = styled.button`
  text-decoration: none;
  width: 20%;
  height: 100%;
  font-size: 2rem;
  background: none;
  background: #fff;
  color: #2ba690;
  border: 1px solid #2ba690;
  border-radius: 0.8rem;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background: #314669;
  }

  &:disabled {
    cursor: default;
    background: #2ba690;
    color: #314669;
  }

  @media (max-width: 1920px) {
    height: 90%;
  }

  @media (max-width: 1366px) {
    width: 20%;
    height: 60%;
  }

  @media (max-width: 540px) {
    width: 25%;
  }

  @media (max-width: 280px) {
    font-size: 1.5rem;
  }
`;

export const CastContainer = styled.div`
  display: grid;
  margin-top: -2%;
  margin-bottom: 5%;
  width: 90%;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-gap: 80px 50px;
  list-style: none;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 80%;
  }

  @media (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
    width: 60%;
  }
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  text-decoration: none;
  width: 60px;
  height: 60px;
  top: 60px;
  left: 20px;
  z-index: 2;
  background: transparent;
  color: #2ba690;
  border: none;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;

export const UpButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  text-decoration: none;
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 20px;
  z-index: 2;
  border-radius: 50%;
  border: 2px solid #2ba690;
  color: #2ba690;
  background: transparent;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background: #2ba690;
    color: #314669;
  }
`;
