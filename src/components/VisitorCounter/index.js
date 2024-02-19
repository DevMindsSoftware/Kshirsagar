import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VisitorCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fetch visitor count from the server
    axios.get('/api/visitorCount')
      .then((response) => {
        setCount(response.data.count);
      })
      .catch((error) => {
        console.error('Error fetching visitor count:', error);
      });
  }, []);

  return (
    <div>
      <h1>Visitor Count: {count}</h1>
    </div>
  );
};

export default VisitorCount;
