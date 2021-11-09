import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 10px;
`;

const TVPresenter = ({ error, loading, popular, topRated, airingToday }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {popular && (
        <Section title='Popular'>{popular.map((tv) => tv.name)}</Section>
      )}
      {topRated && (
        <Section title='Top Rated'>{topRated.map((tv) => tv.name)}</Section>
      )}
      {airingToday && (
        <Section title='Airing Today'>
          {airingToday.map((tv) => tv.name)}
        </Section>
      )}
    </Container>
  );

TVPresenter.propTypes = {
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  popular: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
  topRated: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
  airingToday: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
};

export default TVPresenter;
