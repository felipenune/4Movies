import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 40%;
`;

export const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  background: #314669;
  border: 2px solid #2ba690;
  border-radius: 3rem;

  @media (max-width: 1600px) {
    height: 40%;
  }
`;

export const Input = styled.input`
  width: 90%;
  height: 100%;
  border: none;
  padding: 5px;
  color: #2ba690;
  font-size: 2rem;
  font-weight: bold;
  background: transparent;
`;

export const SearchIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 20%;
  margin-bottom: 5%;

  @media (max-width: 540px) {
    width: 100%;
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

export const MoviesContainer = styled.div`
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

export const ButtonLoadMore = styled.button`
  text-decoration: none;
  width: 15%;
  height: 50px;
  margin-bottom: 5%;
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

  @media (max-width: 540px) {
    width: 20%;
  }

  @media (max-width: 280px) {
    font-size: 1.5rem;
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
