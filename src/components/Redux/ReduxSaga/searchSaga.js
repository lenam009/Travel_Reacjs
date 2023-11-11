import { debounce, fork, put } from 'redux-saga/effects';

import { setSearchValue } from '../SearchSlideReducer/SearchReducer';

const SET_DEBOUNCE_SEARCH_VALUE_SAGA = 'set_debounce_search_value_saga';

function* searchSaga() {
    yield fork(setSearchValueSaga);
}

function* setSearchValueSaga() {
    yield debounce(500, SET_DEBOUNCE_SEARCH_VALUE_SAGA, setDebounceSearchValue);
}

function* setDebounceSearchValue(action) {
    //Có thể delay để thay thế debounce............................................
    //Nên set search value chứ ko nên set search results vì khi kí tự chạy về 0 thì
    //set search results vẫn sẽ set (do backend)...................................
    yield put(setSearchValue(action.payload));
}

//Tham khảo......................................
// import userApi from '~/api/userApi';
// function fetchApiSearchResults(action) {
//     // yield call(fetchApiSearchResults, action); (nằm ở function trên)
//     // const data = userApi.getByName();
//     // console.log(data.data);
// }

export default searchSaga;

export { SET_DEBOUNCE_SEARCH_VALUE_SAGA };
