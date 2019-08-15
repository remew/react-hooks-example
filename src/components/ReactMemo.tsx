import React, {useContext, useEffect, useState} from 'react';

const SomeComponent: React.FC<{id: string, name: string}> = props => {
  console.log('re-rendering:', props.id);
  if (!props.name) {
    return <div>name is empty</div>;
  }
  return <div>name: {props.name}</div>;
};
const MemoizedSomeComponent = React.memo(SomeComponent);

const HighFrequencyUpdateComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count => count + 1);
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <label>name:<input onInput={(e: any) => setName(e.target.value)} style={{border: 'solid 1px #000'}} /></label>
      <p>count: {count}</p>
      <SomeComponent id={'not-memoized'} name={name} />
      <MemoizedSomeComponent id={'memoized'} name={name} />
    </>
  );
};

export default HighFrequencyUpdateComponent;
