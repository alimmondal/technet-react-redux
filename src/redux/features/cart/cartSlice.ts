import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
}
const initialState: ICart = {
  products: [],
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {},
});

export default cartSlice.reducer;
