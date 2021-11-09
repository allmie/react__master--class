import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loader from 'Components/Loader';

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
          {nowPlaying.map((movie) => movie.title)}
        </Section>
      )}
      {popular && (
        <Section title='Popular'>{popular.map((movie) => movie.title)}</Section>
      )}
      {topRated && (
        <Section title='Top Rated'>
          {topRated.map((movie) => movie.title)}
        </Section>
      )}
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
