import React from 'react';
import {Route, Link} from 'react-router-dom';
import ComponentDidMount from './ComponentDidMount';
import ComponentDidMountUpdate from './ComponentDidMountUpdate';
import Timer from './Timer';
import UseContext from './UseContext';
import ReactMemo from './ReactMemo';
import ReactMemoWithComparator from './ReactMemoWithComparator';

const components = [
  {name: 'ComponentDidMount', component: ComponentDidMount, path: 'component-did-mount', url: 'https://github.com/remew/react-hooks-example/blob/master/src/components/ComponentDidMount.tsx'},
  {name: 'ComponentDidMountUpdate', component: ComponentDidMountUpdate, path: 'component-did-mount-update', url: 'https://github.com/remew/react-hooks-example/blob/master/src/components/ComponentDidMountUpdate.tsx'},
  {name: 'Timer', component: Timer, path: 'timer', url: 'https://github.com/remew/react-hooks-example/blob/master/src/components/Timer.tsx'},
  {name: 'UseContext', component: UseContext, path: 'use-context', url: 'https://github.com/remew/react-hooks-example/blob/master/src/components/UseContext.tsx'},
  {name: 'ReactMemo', component: ReactMemo, path: 'react-memo', url: 'https://github.com/remew/react-hooks-example/blob/master/src/components/ReactMemo.tsx'},
  {name: 'ReactMemoWithComparator', component: ReactMemoWithComparator, path: 'react-memo-with-comparator', url: 'https://github.com/remew/react-hooks-example/blob/master/src/components/ReactMemoWithComparator.tsx'},
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
          components.map(({url, path, component: Component}) => {
            return (
              <Route key={path} path={`/${path}`} component={() => {
                return (
                  <>
                    <div>
                      <a href={url} target={'_blank'} rel={'noopener'}>Source</a>
                    </div>
                    <Component />
                  </>
                );
              }} />
            );
          })
        }
      </main>
    </div>
  );
};

export default App;
