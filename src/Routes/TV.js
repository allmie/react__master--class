import { tvApi } from 'api';
import TVs from 'Components/TVs';
import React, { useState, useEffect } from 'react';

const TV = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [airingToday, setAiringToday] = useState([]);

  const getTV = async () => {
    try {
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();

      setPopular(popular);
      setTopRated(topRated);
      setAiringToday(airingToday);
    } catch (e) {
      setError('Can`t find TVs.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTV();

    return () => getTV();
  }, []);

  return (
    <TVs
      error={error}
      loading={loading}
      popular={popular}
      topRated={topRated}
      airingToday={airingToday}
    />
  );
};

export default TV;
