import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {EnthusiasmAction} from './actions';
import Hello from './containers/Hello';
import {enthusiasm} from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import {StoreState} from './types';

const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

ReactDOM.render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
