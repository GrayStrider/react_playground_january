import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import StatefulHello from './StatefulHello';
import './styles/index.css';

ReactDOM.render(
    <StatefulHello name={'Ivan'}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
