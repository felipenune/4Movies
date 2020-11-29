import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 300px;
  border-radius: 0 0 3rem 3rem;
  background: linear-gradient(90deg, #012a4f 0%, #3187ac 100%);
`;

export const HeaderTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
  padding: 15px;
`;

export const HeaderTitle = styled.h1`
  font-size: 4rem;
  color:  #2ba690;
`;

export const HeaderCredits = styled.img`
  height: 100%;
`;
