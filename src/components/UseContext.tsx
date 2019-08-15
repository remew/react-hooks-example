import React, {useContext, useState} from 'react';

const colorContext = React.createContext<string>('#000');

const Wrapper = () => {
  const [color, setColor] = useState('#000');
  return (
    <>
      <input value={color} type={'color'} onChange={e => setColor(e.target.value)} />
      <colorContext.Provider value={color}>
        <UseContext />
      </colorContext.Provider>
    </>
  );
};

const UseContext = () => {
  const color = useContext(colorContext);

  return <p style={{color}}>{color}</p>;
};

export default Wrapper;
