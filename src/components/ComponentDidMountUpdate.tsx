import React, {useEffect, useState} from 'react';

type MaybeLoading<T> = {data: T, isLoading: false} | {data: null, isLoading: true};
type SomeState = {id: string, name: string};

// APIリクエストのダミー
const request: (id: string) => Promise<SomeState> = (id) => {
  return new Promise(resolve => {
    setTimeout(() => resolve({id, name: 'remew' + id}), 1000);
  });
};

const Wrapper = () => {
  const [id, setId] = useState('');
  return (
    <>
      <label>id:<input onInput={(e: any) => setId(e.target.value)} style={{border: 'solid 1px #000'}} /></label>
      <ComponentDidMountUpdate id={id} />
    </>
  );
};

const ComponentDidMountUpdate: React.FC<{id: string}> = props => {
  const [state, setState] = useState<MaybeLoading<SomeState>>({data: null, isLoading: true});
  useEffect(() => {
    if (!props.id) {
      return;
    }
    request(props.id)
      .then(json => setState({data: json, isLoading: false}));
  }, [props.id]);
  if (!props.id) {
    return <p>id is empty.</p>;
  }
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

export default Wrapper;
