import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app/app';
import reducer from './reducer/reducer';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from './api';
import {Operations as DataOperations} from './reducer/data/data';
import {Operations as UserOperation, ActionCreator} from './reducer/user/user';
import {AuthorizationStatus} from './const';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const root = document.querySelector(`#root`);
const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperations.loadFilmCard());
store.dispatch(DataOperations.loadPromo());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
);

