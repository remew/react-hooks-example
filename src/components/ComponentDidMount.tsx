import React, {useEffect, useState} from 'react';

type MaybeLoading<T> = {data: T, isLoading: false} | {data: null, isLoading: true};
type SomeState = {id: string, name: string};

// APIリクエストのダミー
const request: () => Promise<SomeState> = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve({id: '001', name: 'remew'}), 1000);
  });
};

const ComponentDidMount = () => {
  const [state, setState] = useState<MaybeLoading<SomeState>>({data: null, isLoading: true});
  useEffect(() => {
    request()
      .then(json => setState({data: json, isLoading: false}));
  }, []);
  if (state.isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <p>id: {state.data.id}</p>
      <p>name: {state.data.name}</p>
    </>
  );
};

export default ComponentDidMount;
