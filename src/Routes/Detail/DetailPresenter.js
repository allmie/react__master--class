import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const DetailPresenter = ({ detail, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            detail.poster_path
              ? `https://image.tmdb.org/t/p/original${detail.poster_path}`
              : require('../../assets/noPosterImg.PNG')
          }
        />
        <Data>
          <Title>
            {detail.original_title
              ? detail.original_title
              : detail.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {detail.release_date
                ? detail.release_date.substring(0, 4)
                : detail.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {detail.runtime ? detail.runtime : detail.episode_run_time[0]} min
            </Item>
            <Divider>•</Divider>
            <Item>
              {detail.genres &&
                detail.genres.map((genre, index) =>
                  index === detail.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{detail.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  detail: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
