import React, { useState, useCallback, useEffect } from 'react';

import Table from './Table';
import initialData from '../../data/stats/site';

const Stats = () => {
  const [data, setResponseData] = useState(initialData);
  const [isClient, setIsClient] = useState(false);
  
  // TODO think about persisting this somewhere
  const fetchData = useCallback(async () => {
    if (!isClient) return; // Don't fetch during SSR
    
    try {
      // request must be authenticated if private
      const res = await fetch(
        'https://api.github.com/repos/mldangelo/personal-site',
      );
      const resData = await res.json();
      setResponseData(
        initialData.map((field) => ({
          ...field,
          // update value if value was returned by call to github
          value: Object.keys(resData).includes(field.key)
            ? resData[field.key]
            : field.value,
        })),
      );
    } catch (error) {
      console.error('Failed to fetch GitHub stats:', error);
    }
  }, [isClient]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      fetchData();
    }
  }, [fetchData, isClient]);

  return (
    <div>
      <h3>Some stats about this site</h3>
      <Table data={data} />
    </div>
  );
};

export default Stats;
