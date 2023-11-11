import { createSlice } from '@reduxjs/toolkit';

const informationProduct = createSlice({
    name: 'informationProduct',
    initialState: {
        name: '',
        image: '',
        desc: '',
        idCloseDialog: null,
    },
    reducers: {
        setIdCloseDialog: (state, action) => {
            state.idCloseDialog = action.payload;
        },
    },
});

export default informationProduct;

export const { setIdCloseDialog } = informationProduct.actions;
