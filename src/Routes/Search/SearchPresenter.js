import React from 'react';
import PropTypes from 'prop-types';

const SearchPresenter = () => (
  <>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.dir(e.target[0].value);
      }}
    >
      <input type='text' />
      <input type='submit' value='Search' />
    </form>
  </>
);

SearchPresenter.propTypes = {};

export default SearchPresenter;
