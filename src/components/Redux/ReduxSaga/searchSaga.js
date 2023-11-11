import { debounce, fork, put } from 'redux-saga/effects';

import { fetchSearchResults } from '../SearchSlideReducer/SearchReducer';

const SET_SEARCH_RESULTS_SAGA = 'set_search_results_saga';

function* searchSaga() {
    yield fork(setSearchResultsSaga);
}

function* setSearchResultsSaga() {
    yield debounce(500, SET_SEARCH_RESULTS_SAGA, setDebounceSearchResults);
}

function* setDebounceSearchResults(action) {
    //Có thể dùng debounce(500,fetchSearchResults, setDebounceSearchResults) hoặc delay.......
    yield put(fetchSearchResults(action.payload));
}

//Tham khảo......................................
// import userApi from '~/api/userApi';
// function fetchApiSearchResults(action) {
//     // yield call(fetchApiSearchResults, action); (nằm ở function trên)
//     // const data = userApi.getByName();
//     // console.log(data.data);
// }

export default searchSaga;

export { SET_SEARCH_RESULTS_SAGA };
