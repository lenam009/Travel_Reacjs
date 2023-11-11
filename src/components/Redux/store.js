import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import listProductSLiceReducer from './FormSliceReducer/ListProductSLiceReducer';
import informationProduct from './FormSliceReducer/InformationProduct';
import searchReducer from './SearchSlideReducer/SearchReducer';
import rootSaga from './ReduxSaga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        listProduct: listProductSLiceReducer.reducer,
        informationProduct: informationProduct.reducer,
        searchReducer: searchReducer.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools: true,
});

sagaMiddleware.run(rootSaga);

export default store;
