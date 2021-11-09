import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import styled from 'styled-components';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
  padding: 0 10px;
`;

const TVPresenter = ({ error, loading, popular, topRated, airingToday }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {popular && (
        <Section title='Popular'>
          {popular.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.name}
              rating={tv.vote_average}
              year={tv.first_air_date}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {topRated && (
        <Section title='Top Rated'>
          {topRated.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.name}
              rating={tv.vote_average}
              year={tv.first_air_date}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {airingToday && (
        <Section title='Airing Today'>
          {airingToday.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.name}
              rating={tv.vote_average}
              year={tv.first_air_date}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {error && <Message text={error} />}
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
