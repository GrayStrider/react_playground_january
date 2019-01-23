import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {createStore} from 'redux';
import {EnthusiasmAction} from './actions';
import App from "./components/App";
import Hello from './containers/Hello';
import {enthusiasm} from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import {IStoreState} from './types';


const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact={true} path={'/'} component={Hello}/>
                <Route exact={true} path={'/app'} component={App}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
