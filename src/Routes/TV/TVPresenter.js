import React from 'react';
import PropTypes from 'prop-types';

const TVPresenter = ({ error, loading, popular, topRated, airingToday }) =>
  loading ? (
    <h2>Loading...</h2>
  ) : (
    <>
      <h2>Popular</h2>
      {popular.map((tv) => (
        <h2 key={tv.id}>{tv.name}</h2>
      ))}
      <h2>TopRated</h2>
      {topRated.map((tv) => (
        <h2 key={tv.id}>{tv.name}</h2>
      ))}
      <h2>Airing Today</h2>
      {airingToday.map((tv) => (
        <h2 key={tv.id}>{tv.name}</h2>
      ))}
    </>
  );

TVPresenter.propTypes = {
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  popular: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  topRated: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  airingToday: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default TVPresenter;
