import React, {useEffect, useState} from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);

    return () => {
      console.log('clear interval');
      clearInterval(timerId);
    };
  }, []);

  return <div>{count}</div>;
};

export default Timer;
