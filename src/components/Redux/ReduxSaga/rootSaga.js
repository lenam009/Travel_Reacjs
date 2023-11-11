import { all } from 'redux-saga/effects';

import searchSaga from './searchSaga';

function* rootSaga() {
    console.log('root saga');
    yield all([searchSaga()]);
}

export default rootSaga;
