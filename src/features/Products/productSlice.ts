import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductApi from '../../api/productApi';
import StorageKeys from '../../constants/storage-key';

export const getListProduct = createAsyncThunk('product/getListProduct', async (page: any) => {
  const filters = { limit: 8, is_mweb: 1, category: 8322, page };
  const dataRes = await ProductApi.getAll(filters);

  localStorage.setItem(StorageKeys.LIST_UNIQUE_SALE_BOOK, JSON.stringify(dataRes?.data?.data));
  
  return dataRes?.data?.data;
});

export const getListFlashSaleBook = createAsyncThunk('product/getListFlashSaleBook', async (page: any) => {
  const filters = { limit: 8, is_mweb: 1, category: 316, page };
  const dataRes = await ProductApi.getFashSaleBook(filters);

  return dataRes?.data?.data;
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: localStorage.getItem(StorageKeys?.LIST_UNIQUE_SALE_BOOK) ||  {},
    listFlashSaleBook: {}
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
        getListProduct.fulfilled, (state, action) => {
        state.products = action.payload;
      }
    )
    builder.addCase(
      getListFlashSaleBook.fulfilled, (state, action) => {
        state.listFlashSaleBook = action.payload;
      }
    )
  },
});

const {  reducer } = productSlice;

export default reducer;
