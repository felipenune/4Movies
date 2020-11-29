/* eslint-disable react/require-default-props */
import React from 'react';
import {
  ActorPhoto, CharName, Container, InfoContainer, Name,
} from './styles';

interface Props {
  photo?: string;
  name: string;
  char: string;
}

const CastItem: React.FC<Props> = ({ name, char, photo }: Props) => (
  <Container>
    {photo && <ActorPhoto src={photo ? `http://image.tmdb.org/t/p/w780/${photo}` : ''} />}
    <InfoContainer>
      <Name>{name}</Name>

      <CharName>{char}</CharName>
    </InfoContainer>
  </Container>
);

export default CastItem;
