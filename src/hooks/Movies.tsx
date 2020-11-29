import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
  ReactNode,
} from 'react';
import api from '../services/api';

interface cast {
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

interface crew {
  name: string;
  job: string;
}

interface Movie {
  adult?: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path: string;
  release_date: string;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
  runtime: number;
  credits?: {
    cast: cast[];
    crew: crew[];
  }
}

interface Props {
  children: ReactNode;
}

interface Return {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface MovieData {
  moviesPop: Movie[];
  moviesTop: Movie[];
  moviesUp: Movie[];
  moviesSearched: Movie[];
  movieInfo: Movie;
  director: string;
  loading: boolean;
  pagePop: number;
  pageTop: number;
  pageUp: number;
  pageSearched: number;
  getMoviesPop(): void;
  getMoviesTop(): void;
  getMoviesUp(): void;
  searchMovies(title: string): void;
  getMovie(id: number): void;
  setPagePop(data: number): void;
  setPageTop(data: number): void;
  setPageUp(data: number): void;
  setPageSearched(data: number): void;
}

const MovieContext = createContext<MovieData>(
  {} as MovieData,
);

export const MoviesProvider: React.FC<Props> = ({ children }: Props) => {
  const [fetchedDataPop, setFetchedDataPop] = useState<Return>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  const [fetchedDataTop, setFetchedDataTop] = useState<Return>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  const [fetchedDataUp, setFetchedDataUp] = useState<Return>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  const [director, setDirector] = useState('');

  const [moviesPop, setMoviesPop] = useState<Movie[]>([]);
  const [moviesTop, setMoviesTop] = useState<Movie[]>([]);
  const [moviesUp, setMoviesUp] = useState<Movie[]>([]);
  const [moviesSearched, setMoviesSearched] = useState<Movie[]>([]);
  const [movieInfo, setMovieInfo] = useState<Movie>({
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    id: 0,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
    runtime: 0,
  });

  const [loading, setLoading] = useState(false);

  const [pagePop, setPagePop] = useState(1);
  const [pageTop, setPageTop] = useState(1);
  const [pageUp, setPageUp] = useState(1);
  const [pageSearched, setPageSearched] = useState(1);

  const api_key = '0be393ee8289641c2ecedc0121c59f94';

  const getMoviesPop = useCallback(
    async () => {
      try {
        if (pagePop === fetchedDataPop.page) {
          setLoading(false);
          return;
        }

        setLoading(true);

        const response = await api
          .get('/movie/popular', {
            params: { page: pagePop, api_key },
          });

        setFetchedDataPop(response.data);
        setMoviesPop((m) => [...m, ...response.data.results]);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    },
    [pagePop, fetchedDataPop.page],
  );

  const getMoviesTop = useCallback(
    async () => {
      try {
        if (pageTop === fetchedDataTop.page) {
          setLoading(false);
          return;
        }

        setLoading(true);

        const response = await api
          .get('/movie/top_rated', {
            params: { page: pageTop, api_key },
          });

        setFetchedDataTop(response.data);
        setMoviesTop((m) => [...m, ...response.data.results]);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    },
    [pageTop, fetchedDataTop.page],
  );

  const getMoviesUp = useCallback(
    async () => {
      try {
        if (pageUp === fetchedDataUp.page) {
          setLoading(false);
          return;
        }

        setLoading(true);

        const response = await api
          .get('/movie/upcoming', {
            params: { page: pageUp, api_key },
          });

        setFetchedDataUp(response.data);
        setMoviesUp((m) => [...m, ...response.data.results]);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    },
    [pageUp, fetchedDataUp.page],
  );

  const searchMovies = useCallback(
    async (title: string) => {
      try {
        if (!title) {
          setLoading(false);
          return;
        }

        setLoading(true);

        const response = await api
          .get('/search/movie', {
            params: { page: pageSearched, api_key, query: title },
          });

        if (pageSearched === 1) {
          setMoviesSearched(response.data.results);
        } else {
          setMoviesSearched((m) => [...m, ...response.data.results]);
        }

        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    },
    [pageSearched],
  );

  const getMovie = useCallback(
    async (id: number) => {
      try {
        setLoading(true);

        const response = await api
          .get(`/movie/${id}`, {
            params: { api_key, append_to_response: 'credits' },
          });

        sessionStorage.setItem('Selected', JSON.stringify(response.data));

        setMovieInfo(response.data);
        const directorName = response.data.credits.crew.filter((crew_person: crew) => crew_person.job === 'Director');
        setDirector(directorName[0].name);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    },
    [],
  );

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      sessionStorage.setItem('Popular', JSON.stringify(moviesPop));
    }
    return function cleanUp() { isMount = false; };
  }, [moviesPop]);

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      sessionStorage.setItem('Top', JSON.stringify(moviesTop));
    }
    return function cleanUp() { isMount = false; };
  }, [moviesTop]);

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      sessionStorage.setItem('Upcoming', JSON.stringify(moviesUp));
    }
    return function cleanUp() { isMount = false; };
  }, [moviesUp]);

  return (
    <MovieContext.Provider
      value={{
        moviesPop,
        moviesTop,
        moviesUp,
        moviesSearched,
        movieInfo,
        director,
        loading,
        pagePop,
        pageTop,
        pageUp,
        pageSearched,
        setPagePop,
        setPageTop,
        setPageUp,
        setPageSearched,
        getMoviesPop,
        getMoviesTop,
        getMoviesUp,
        searchMovies,
        getMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export function useMovies(): MovieData {
  const context = useContext(MovieContext);

  return context;
}
