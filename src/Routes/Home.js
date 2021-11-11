import React, { useEffect, useState } from 'react';
import { movieApi } from 'api';
import Movies from 'Components/Movies';

const Home = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  const getMovies = async () => {
    try {
      const {
        data: { results: popular },
      } = await movieApi.nowPlaying();
      const {
        data: { results: topRated },
      } = await movieApi.popular();
      const {
        data: { results: nowPlaying },
      } = await movieApi.topRated();

      setPopular(popular);
      setTopRated(topRated);
      setNowPlaying(nowPlaying);
    } catch (e) {
      setError('Can`t find movies.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();

    return () => getMovies();
  }, []);

  return (
    <Movies
      error={error}
      loading={loading}
      popular={popular}
      topRated={topRated}
      nowPlaying={nowPlaying}
    />
  );
};

export default Home;
