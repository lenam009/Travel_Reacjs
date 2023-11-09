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
        setName: (state, action) => {
            state.name = action.payload;
        },
        setImage: (state, action) => {
            state.image = action.payload;
        },
        setDesc: (state, action) => {
            state.desc = action.payload;
        },
        setCloseDialog: (state, action) => {
            state.closeDialog = action.payload;
        },
        setIdCloseDialog: (state, action) => {
            state.idCloseDialog = action.payload;
        },
    },
});

export default informationProduct;

export const { setName, setImage, setDesc, setCloseDialog, setIdCloseDialog } = informationProduct.actions;
