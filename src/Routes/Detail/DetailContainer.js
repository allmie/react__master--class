import { movieApi, tvApi } from 'api';
import React from 'react';
import DetailPresenter from './DetailPresenter';

export default class DetailContainer extends React.Component {
  state = {
    error: '',
    loading: true,
    detail: [],
  };

  componentDidMount = () => {
    this.getDetail();
  };

  getDetail = async () => {
    const {
      history: { goBack },
      match: {
        url,
        params: { id },
      },
    } = this.props;

    let isMovie = url.startsWith('/movie');
    let detail = null;
    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
      return goBack();
    }

    try {
      if (isMovie) {
        ({ data: detail } = await movieApi.detail(parsedId));
      } else {
        ({ data: detail } = await tvApi.detail(parsedId));
      }

      console.log(detail, isMovie);
    } catch (e) {
      this.setState({
        error: 'Can`t find result.',
      });
    } finally {
      this.setState({
        loading: false,
        detail,
        isMovie,
      });
    }
  };

  render() {
    return <DetailPresenter {...this.state} />;
  }
}
