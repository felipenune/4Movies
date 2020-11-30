import React, { PropsWithChildren } from 'react';
import {
  Container,
  HeaderCredits,
  HeaderTitle,
  HeaderTitleDiv,
} from './styles';

interface Props {
  cover?: string;
}

const Header: React.FC<Props> = ({
  children,
  cover,
}: PropsWithChildren<Props>) => (
  <Container
    style={
      cover
        ? {
            backgroundImage: `url(http://image.tmdb.org/t/p/w780/${cover})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }
        : {}
    }
  >
    <HeaderTitleDiv>
      <HeaderTitle>4Movies</HeaderTitle>

      <HeaderCredits src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" />
    </HeaderTitleDiv>

    {children}
  </Container>
);

export default Header;
