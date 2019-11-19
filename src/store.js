import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './03-reducers';
import rootSaga from './02-sagas';
import { logger } from 'redux-logger';

// const loggerMiddleware = createLogger({
//     predicate: () => !['PRO', 'STG'].includes(process.env.REACT_APP_STAGE)
// });
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;