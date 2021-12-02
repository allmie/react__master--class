import React, { useState, useEffect } from 'react';
import { movieApi, tvApi } from 'api';
import DetailComponent from 'Components/DetailComponent';

const Detail = (props) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});

  const getDetail = async () => {
    const {
      history: { goBack },
      match: {
        url,
        params: { id },
      },
    } = props;

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
    } catch (e) {
      setError('Can`t find result.');
    } finally {
      setDetail(detail);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetail();

    return () => getDetail();
  });

  return <DetailComponent error={error} loading={loading} detail={detail} />;
};

export default Detail;
