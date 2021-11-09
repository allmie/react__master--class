import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'Components/Loader';
import Message from 'Components/Message';

const DetailPresenter = ({ error, loading, detail, isMovie }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <h1>movie / tv</h1>
      {error && <Message text={error} />}
    </>
  );
//   isMovie ? (
//     <h2 key={detail.id}>{detail.original_title}</h2>
//     <span>test</span>
//   ) : (
//     <h2 key={detail.id}>{detail.name}</h2>
//   );

DetailPresenter.propTypes = {};

export default DetailPresenter;
