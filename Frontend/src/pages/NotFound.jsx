import React, {useEffect} from 'react';

const NotFound = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div style={{ textAlign: 'center', marginTop: '300px', marginBottom: '200px' }}>
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
  );
};

export default NotFound;
