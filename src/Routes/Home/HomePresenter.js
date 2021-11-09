import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
  padding: 0 10px;
`;

const HomePresenter = ({ nowPlaying, popular, topRated, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && (
        <Section title='Now Playing'>
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {popular && (
        <Section title='Popular'>
          {popular.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {topRated && (
        <Section title='Top Rated'>
          {topRated.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {error && <Message text={error} />}
    </Container>
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
