import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowUp, FaStar } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import CastItem from '../../components/CastItem';
import Header from '../../components/Header';
import { useMovies } from '../../hooks/Movies';
import convertToHour from '../../utils/convertToHour';
import {
  Card,
  CollumInfosDiv,
  Container,
  InfoText,
  Overview,
  OverviewDiv,
  Poster,
  SmallText,
  SubInfosDiv,
  SubTitle,
  Title,
  CategoryContainer,
  ButtonCategory,
  CastContainer,
  UpButton,
  BackButton,
} from './styles';

interface Props {
  state: History;
  location: {
    state: {
      id: number;
    };
  };
}

interface Cast {
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  cast_id: number;
  character: string;
  credit_id: number;
  order: number;
}

const MovieInfo: React.FC<Props> = (state: Props) => {
  const { id } = state.location.state;

  const history = useHistory();

  const { movieInfo, director, getMovie } = useMovies();

  // const selectedMovies = sessionStorage.getItem('Selected');

  // if (selectedMovies) console.log('Selected: ', JSON.parse(selectedMovies));

  const [overview, setOverview] = useState(true);
  const [cast, setCast] = useState(false);

  const [showScroll, setShowScroll] = useState(false);

  function handleBack() {
    history.goBack();
  }

  function handleOverview() {
    setOverview(true);
    setCast(false);
  }

  function handleCast() {
    setOverview(false);
    setCast(true);
  }

  function checkScrollTop() {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  }

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.addEventListener('scroll', checkScrollTop);

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      window.scrollTo({ top: 0 });
      getMovie(id);
    }
    return function cleanUp() {
      isMount = false;
    };
  }, [getMovie, id]);

  return (
    <Container>
      <BackButton onClick={handleBack}>
        <FaArrowLeft size="4rem" />
      </BackButton>
      <Header cover={movieInfo.backdrop_path}>
        <CategoryContainer>
          <ButtonCategory disabled={overview} onClick={handleOverview}>
            Overview
          </ButtonCategory>

          <ButtonCategory disabled={cast} onClick={handleCast}>
            Cast
          </ButtonCategory>
        </CategoryContainer>
      </Header>
      {overview ? (
        <Card>
          <Poster
            src={
              movieInfo.poster_path &&
              `http://image.tmdb.org/t/p/w780/${movieInfo.poster_path}`
            }
          />

          <OverviewDiv>
            <Title>{movieInfo.title}</Title>

            <SubTitle>Plot:</SubTitle>

            <Overview>{movieInfo.overview}</Overview>

            <SubInfosDiv>
              <CollumInfosDiv>
                <SubTitle>Rating:</SubTitle>
                <InfoText>
                  <FaStar
                    size="3rem"
                    color="#ffcd13"
                    style={{ marginRight: '5%' }}
                  />
                  {`${movieInfo.vote_average}/`}
                  <SmallText>10</SmallText>
                </InfoText>
              </CollumInfosDiv>

              <CollumInfosDiv>
                <SubTitle>Director:</SubTitle>
                <InfoText>{director}</InfoText>
              </CollumInfosDiv>

              <CollumInfosDiv>
                <SubTitle>Running time:</SubTitle>
                <InfoText>
                  {movieInfo.runtime
                    ? convertToHour(movieInfo.runtime)
                    : '-- : --'}
                </InfoText>
              </CollumInfosDiv>

              <CollumInfosDiv>
                <SubTitle>Release date:</SubTitle>
                <InfoText>
                  {moment(movieInfo.release_date).format('MM/DD/YYYY')}
                </InfoText>
              </CollumInfosDiv>
            </SubInfosDiv>
          </OverviewDiv>
        </Card>
      ) : (
        <CastContainer>
          {movieInfo.credits?.cast.map((actor: Cast) => (
            <CastItem
              key={actor.id}
              name={actor.name}
              char={actor.character}
              photo={actor.profile_path}
            />
          ))}

          {showScroll && (
            <UpButton onClick={scrollTop}>
              <FaArrowUp size="4rem" />
            </UpButton>
          )}
        </CastContainer>
      )}
    </Container>
  );
};

export default MovieInfo;
