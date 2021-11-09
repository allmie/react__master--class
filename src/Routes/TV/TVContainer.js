import { tvApi } from 'api';
import React from 'react';
import TVPresenter from './TVPresenter';

export default class TVContainer extends React.Component {
  state = {
    error: '',
    loading: true,
    popular: [],
    topRated: [],
    AiringToday: [],
  };

  componentDidMount = () => {
    this.getTV();
  };

  getTV = async () => {
    try {
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: topRated },
      } = await tvApi.topRated();

      console.log(airingToday, popular, topRated);

      this.setState({
        airingToday,
        popular,
        topRated,
      });
    } catch (e) {
      this.setState({
        error: 'Can`t find TV programs.',
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    return <TVPresenter {...this.state} />;
  }
}
