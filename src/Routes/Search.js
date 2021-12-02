import React, { useState } from 'react';
import { movieApi, tvApi } from 'api';
import SearchComponent from 'Components/SearchComponent';

const Search = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm !== '') {
      searchByTerm();
    }
  };

  const updateTerm = (event) => {
    const {
      target: { value },
    } = event;

    setSearchTerm(value);
  };

  const searchByTerm = async () => {
    setLoading(true);

    try {
      const {
        data: { results: movieResults },
      } = await movieApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);

      setMovieResults(movieResults);
      setTvResults(tvResults);
    } catch {
      setError("Can't find results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchComponent
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      updateTerm={updateTerm}
      handleSubmit={handleSubmit}
      loading={loading}
      error={error}
    />
  );
};

export default Search;
