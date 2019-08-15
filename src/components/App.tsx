import React from 'react';
import {Route, Link} from 'react-router-dom';
import ComponentDidMount from './ComponentDidMount';
import ComponentDidMountUpdate from './ComponentDidMountUpdate';
import Timer from './Timer';
import UseContext from './UseContext';
import ReactMemo from './ReactMemo';
import ReactMemoWithComparator from './ReactMemoWithComparator';

const components = [
  {name: 'ComponentDidMount', component: ComponentDidMount, path: 'component-did-mount'},
  {name: 'ComponentDidMountUpdate', component: ComponentDidMountUpdate, path: 'component-did-mount-update'},
  {name: 'Timer', component: Timer, path: 'timer'},
  {name: 'UseContext', component: UseContext, path: 'use-context'},
  {name: 'ReactMemo', component: ReactMemo, path: 'react-memo'},
  {name: 'ReactMemoWithComparator', component: ReactMemoWithComparator, path: 'react-memo-with-comparator'},
];

const App = () => {
  return (
    <div style={{display: 'flex', height: '100%'}}>
      <nav style={{width: 280, flexShrink: 0, background: '#424242'}}>
        <ul style={{listStyle: 'none'}}>
          {
            components.map(({name, path}) => {
              return (
                <li key={path}>
                  <Link to={path} style={{color: '#fff', display: 'flex', height: '3rem', alignItems: 'center', paddingLeft: '1rem', borderBottom: 'solid 1px #000'}}>{name}</Link>
                </li>
              );
            })
          }
          <li>
          </li>
        </ul>
      </nav>
      <main>
        {
          components.map(({path, component}) => {
            return (
              <Route key={path} path={`/${path}`} component={component} />
            );
          })
        }
      </main>
    </div>
  );
};

export default App;
