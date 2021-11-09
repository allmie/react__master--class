import React from 'react';
import PropTypes from 'prop-types';

const DetailPresenter = ({ error, loading, detail, isMovie }) =>
  loading ? <h2>Loading...</h2> : <h1>movie / tv</h1>;
//   isMovie ? (
//     <h2 key={detail.id}>{detail.original_title}</h2>
//     <span>test</span>
//   ) : (
//     <h2 key={detail.id}>{detail.name}</h2>
//   );

DetailPresenter.propTypes = {};

export default DetailPresenter;
