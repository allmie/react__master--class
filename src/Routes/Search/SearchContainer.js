import React from 'react';
import { movieApi, tvApi } from 'api';
import SearchPresenter from './SearchPresenter';

export default class SearchContainer extends React.Component {
  state = {
    error: '',
    loading: false,
    search: null,
    term: 'code',
    movies: [],
    tvs: [],
  };

  componentDidMount = () => {
    this.handleSubmit();
  };

  handleSubmit = () => {
    const { term } = this.state;
    if (term !== '') {
      this.searching(term);
    }
  };

  searching = async (term) => {
    try {
      this.setState({
        loading: true,
      });
      const {
        data: { results: movies },
      } = await tvApi.search(term);
      const {
        data: { results: tvs },
      } = await movieApi.search(term);

      this.setState({
        loading: true,
        movies,
        tvs,
      });
      console.log(movies, tvs);
    } catch (e) {
      this.setState({
        error: 'Can`t find results.',
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    return <SearchPresenter />;
  }
}
