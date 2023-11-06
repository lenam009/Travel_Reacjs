import { configureStore } from '@reduxjs/toolkit';

import listProductSLiceReducer from './FormSliceReducer/ListProductSLiceReducer';
import informationProduct from './FormSliceReducer/InformationProduct';

const store = configureStore({
    reducer: {
        listProduct: listProductSLiceReducer.reducer,
        informationProduct: informationProduct.reducer,
    },
    devTools: true,
});

export default store;
