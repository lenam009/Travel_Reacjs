import { createSelector } from '@reduxjs/toolkit';

export const getListProduct = (state) => state.listProduct;

export const getName = (state) => state.informationProduct.name;

export const getImage = (state) => state.informationProduct.image;

export const getDesc = (state) => state.informationProduct.desc;

export const getIdCloseDialog = (state) => state.informationProduct.idCloseDialog;
