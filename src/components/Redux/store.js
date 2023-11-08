import { configureStore } from '@reduxjs/toolkit';

import listProductSLiceReducer from './FormSliceReducer/ListProductSLiceReducer';
import informationProduct from './FormSliceReducer/InformationProduct';
import searchReducer from './SearchSlideReducer/SearchReducer';

const store = configureStore({
    reducer: {
        listProduct: listProductSLiceReducer.reducer,
        informationProduct: informationProduct.reducer,
        searchReducer: searchReducer.reducer,
    },
    devTools: true,
});

export default store;
