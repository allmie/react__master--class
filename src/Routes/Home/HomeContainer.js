import { movieApi } from 'api';
import React from 'react';
import HomePresenter from './HomePresenter';

export default class HomeContainer extends React.Component {
  state = {
    error: '',
    loading: true,
    popular: [],
    topRated: [],
    nowPlaying: [],
  };

  componentDidMount = () => {
    this.getMovies();
  };

  getMovies = async () => {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();
      const {
        data: { results: popular },
      } = await movieApi.popular();
      const {
        data: { results: topRated },
      } = await movieApi.topRated();

      console.log(nowPlaying, popular, topRated);
      this.setState({
        nowPlaying,
        popular,
        topRated,
      });
    } catch (e) {
      this.setState({
        error: 'Can`t find movies.',
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    return <HomePresenter {...this.state} />;
  }
}
