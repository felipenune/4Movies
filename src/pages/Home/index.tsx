import React, { useEffect, useState } from 'react';
import { FaArrowUp, FaSearch } from 'react-icons/fa';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import loader from '../../assets/loader_white.json';
import Header from '../../components/Header';
import MovieItem from '../../components/MovieItem';
import { useMovies } from '../../hooks/Movies';
import {
  ButtonCategory,
  ButtonLoadMore,
  CategoryContainer,
  Container,
  Input,
  InputDiv,
  MoviesContainer,
  SearchContainer,
  SearchIconDiv,
  UpButton,
} from './styles';

const Home: React.FC = () => {
  const {
    setPagePop,
    setPageTop,
    setPageUp,
    setPageSearched,
    moviesPop,
    moviesTop,
    moviesUp,
    moviesSearched,
    pagePop,
    pageTop,
    pageUp,
    pageSearched,
    loading,
    getMoviesPop,
    getMoviesTop,
    getMoviesUp,
    searchMovies,
  } = useMovies();

  const history = useHistory();

  const [popular, setPopular] = useState(true);
  const [top, setTop] = useState(false);
  const [upcoming, setUpcoming] = useState(false);
  const [search, setSearch] = useState(false);

  const [title, setTitle] = useState('');

  const [showScroll, setShowScroll] = useState(false);

  // const popMovies = sessionStorage.getItem('Popular');
  // const topMovies = sessionStorage.getItem('Top');
  // const upMovies = sessionStorage.getItem('Upcoming');

  // if (popMovies) console.log('Popular: ', JSON.parse(popMovies));
  // if (topMovies) console.log('Top: ', JSON.parse(topMovies));
  // if (upMovies) console.log('Upcoming: ', JSON.parse(upMovies));

  function handleGoToInfo(id: number) {
    history.push('/info', { id });
  }

  function handleLoadMore() {
    if (popular) {
      setPagePop(pagePop + 1);
    } else if (top) {
      setPageTop(pageTop + 1);
    } else if (upcoming) {
      setPageUp(pageUp + 1);
    } else {
      setPageSearched(pageSearched + 1);
    }
  }

  function handleCategoryPop() {
    setPopular(true);
    setTop(false);
    setUpcoming(false);
    setSearch(false);
  }

  function handleCategoryTop() {
    setPopular(false);
    setTop(true);
    setUpcoming(false);
    setSearch(false);
  }

  function handleCategoryComing() {
    setPopular(false);
    setTop(false);
    setUpcoming(true);
    setSearch(false);
  }

  function handleSearch(value: string) {
    setSearch(true);
    setPopular(false);
    setTop(false);
    setUpcoming(false);

    setTitle(value);
    setPageSearched(1);
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
      getMoviesPop();
    }
    return function cleanUp() {
      isMount = false;
    };
  }, [getMoviesPop]);

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      getMoviesTop();
    }
    return function cleanUp() {
      isMount = false;
    };
  }, [getMoviesTop]);

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      getMoviesUp();
    }
    return function cleanUp() {
      isMount = false;
    };
  }, [getMoviesUp]);

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      if (title) {
        searchMovies(title);
      } else {
        setSearch(false);
      }
    }
    return function cleanUp() {
      isMount = false;
    };
  }, [title, searchMovies]);

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      if (!search) {
        setTitle('');
      }
    }
    return function cleanUp() {
      isMount = false;
    };
  }, [search]);

  return (
    <Container>
      <Header>
        <SearchContainer>
          <InputDiv>
            <Input
              placeholder="Search Title"
              value={title}
              onChange={e => handleSearch(e.target.value)}
            />

            <SearchIconDiv>
              <FaSearch size="3rem" color="#2ba690" />
            </SearchIconDiv>
          </InputDiv>
        </SearchContainer>

        <CategoryContainer>
          <ButtonCategory disabled={popular} onClick={handleCategoryPop}>
            Popular
          </ButtonCategory>

          <ButtonCategory disabled={top} onClick={handleCategoryTop}>
            Top Rated
          </ButtonCategory>

          <ButtonCategory disabled={upcoming} onClick={handleCategoryComing}>
            Upcoming
          </ButtonCategory>
        </CategoryContainer>
      </Header>

      <MoviesContainer>
        {popular &&
          moviesPop.map(movie => (
            <MovieItem
              key={movie.id}
              title={movie.title}
              rate={movie.vote_average}
              poster={movie.poster_path}
              disabled={loading}
              onClick={() => handleGoToInfo(movie.id)}
            />
          ))}

        {top &&
          moviesTop.map(movie => (
            <MovieItem
              key={movie.id}
              title={movie.title}
              rate={movie.vote_average}
              poster={movie.poster_path}
              disabled={loading}
              onClick={() => handleGoToInfo(movie.id)}
            />
          ))}

        {upcoming &&
          moviesUp.map(movie => (
            <MovieItem
              key={movie.id}
              title={movie.title}
              rate={movie.vote_average}
              poster={movie.poster_path}
              disabled={loading}
              onClick={() => handleGoToInfo(movie.id)}
            />
          ))}

        {search &&
          moviesSearched.map(movie => (
            <MovieItem
              key={movie.id}
              title={movie.title}
              rate={movie.vote_average}
              poster={movie.poster_path}
              disabled={loading}
              onClick={() => handleGoToInfo(movie.id)}
            />
          ))}
      </MoviesContainer>

      {loading ? (
        <Lottie
          height={100}
          width={100}
          speed={50}
          options={{
            loop: true,
            autoplay: true,
            animationData: loader,
          }}
          isClickToPauseDisabled
        />
      ) : (
        <ButtonLoadMore onClick={handleLoadMore}>Load more</ButtonLoadMore>
      )}

      {showScroll && (
        <UpButton onClick={scrollTop}>
          <FaArrowUp size="4rem" />
        </UpButton>
      )}
    </Container>
  );
};

export default Home;
