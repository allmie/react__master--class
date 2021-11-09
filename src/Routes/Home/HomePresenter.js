import React from 'react';
import PropTypes from 'prop-types';

const HomePresenter = ({ nowPlaying, popular, topRated, loading, error }) =>
  loading ? (
    <h2>Loading...</h2>
  ) : (
    <>
      <h2>nowPlaying</h2>
      {nowPlaying.map((movie) => (
        <h2 key={movie.id}>{movie.title}</h2>
      ))}

      <h2>Popular</h2>
      {popular.map((movie) => (
        <h2 key={movie.id}>{movie.title}</h2>
      ))}

      <h2>topRated</h2>
      {topRated.map((movie) => (
        <h2 key={movie.id}>{movie.title}</h2>
      ))}
    </>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
  popular: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
  topRated: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default HomePresenter;
