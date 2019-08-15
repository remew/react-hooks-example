import React, {useContext, useEffect, useState} from 'react';

const SomeComponent: React.FC<{obj: {id: string, name: string}}> = props => {
  console.log('re-rendering:', props.obj.id);
  if (!props.obj.name) {
    return <div>name is empty</div>;
  }
  return <div>name: {props.obj.name}</div>;
};
const WrongMemoizedSomeComponent = React.memo(SomeComponent);
const MemoizedSomeComponent = React.memo(SomeComponent, (oldProps, newProps) => {
  return oldProps.obj.id === newProps.obj.id && oldProps.obj.name === newProps.obj.name;
});

const HighFrequencyUpdateComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count => count + 1);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <label>name:<input onInput={(e: any) => setName(e.target.value)} style={{border: 'solid 1px #000'}} /></label>
      <p>count: {count}</p>
      <SomeComponent obj={{id: 'not-memoized', name}} />
      <WrongMemoizedSomeComponent obj={{id: 'wrong-memoized', name}} />
      <MemoizedSomeComponent obj={{id: 'memoized', name}} />
    </>
  );
};

export default HighFrequencyUpdateComponent;
