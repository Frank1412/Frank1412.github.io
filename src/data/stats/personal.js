import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState(null);
  const [isClient, setIsClient] = useState(false);

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1997-03-12T16:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    // Set client flag to true after component mounts
    setIsClient(true);
    tick(); // Calculate initial age
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Return consistent content during SSR
  if (!isClient) {
    return <>Loading...</>;
  }

  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 2,
    link:
      'https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Syracuse, NY',
  },
];

export default data;
