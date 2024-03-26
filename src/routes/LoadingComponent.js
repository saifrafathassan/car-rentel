import React, { useState, useEffect } from 'react';
import Loading from 'react-loading';

export default function LoadingComponent({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); // delay 1 second

    return () => clearTimeout(timer); // clean up timer
  }, []);

  if (loading) {
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Loading type={'spin'} color={'#FF4D30'} />
      </div>
    );
  }

  return children;
}