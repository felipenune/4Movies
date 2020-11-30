/* eslint-disable react/jsx-props-no-spreading */
import React, { ButtonHTMLAttributes } from 'react';
import { FaStar } from 'react-icons/fa';
import { Container, InfoContainer, Rate, RateDiv, Title } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  rate: number;
  poster: string;
}

const MovieItem: React.FC<Props> = ({
  title,
  rate,
  poster,
  ...rest
}: Props) => (
  <Container
    {...rest}
    style={
      poster
        ? { backgroundImage: `url(http://image.tmdb.org/t/p/w780/${poster})` }
        : { background: '#000' }
    }
  >
    <InfoContainer>
      <Title>{title.toUpperCase()}</Title>

      <RateDiv>
        <FaStar size="3rem" color="#ffcd13" />

        <Rate>
          {rate}
          /10
        </Rate>
      </RateDiv>
    </InfoContainer>
  </Container>
);

export default MovieItem;
