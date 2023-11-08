import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as searchServices from '~/services/searchServices';

const searchReducer = createSlice({
    name: 'searchResult',
    initialState: {
        loading: false,
        searchResult: [],
    },
    reducers: {
        setSearchResults: (state, action) => {
            state.searchResult = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchSearchResults.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchSearchResults.fulfilled, (state, action) => {
            state.searchResult = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchSearchResults.rejected, (state, action) => {
            state.searchResult = [];
            state.loading = false;
        });
    },
});

const fetchSearchResults = createAsyncThunk('searchResult/fetchSearchResult', async (d) => {
    const data = await searchServices.search(d);
    return data;
});

export default searchReducer;
export { fetchSearchResults };
