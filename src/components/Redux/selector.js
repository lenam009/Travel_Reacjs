import { createSelector } from '@reduxjs/toolkit';

export const getListProduct = (state) => state.listProduct;

export const getIdCloseDialog = (state) => state.informationProduct.idCloseDialog;

export const getLoadingSearchResult = (state) => state.searchReducer.loading;

export const getSearchResults = (state) => state.searchReducer.searchResult;
