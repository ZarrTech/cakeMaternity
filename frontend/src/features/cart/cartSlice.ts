import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_URL;

export interface ProductItem {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  stockQuantity: number;
  desc: string;
  category: string;
  isFeatured: boolean;
}

export interface CartState {
  productItems: Array<ProductItem>;
  sortCriteria: "latest" | "low to high" | "high to low" | "popularity";
  amount: number;
  total: number;
  page: number;
  pages: number;
  count:number,
  isLoading: boolean;
}

const initialState: CartState = {
  productItems: [],
  sortCriteria: "latest",
  amount: 0,
  total: 0,
  page: 1,
  pages: 0,
  count:0,
  isLoading: true,
};

export const getProductItems = createAsyncThunk<
  { products: ProductItem[]; count: number; page: number; pages: number },
  { sortCriteria: string; page: number }
>(
  "product/getProductItems",
  async ({ sortCriteria, page }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<{
        products: ProductItem[];
        count: number;
        page: number;
        pages: number;
      }>(`${baseUrl}?sort=${sortCriteria}&page=${page}`);
      console.log(data);
      return data
    } catch (error) {
      return rejectWithValue("failed to fetch product");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setSortCriteria: (state, action: PayloadAction<string>) => {
      state.sortCriteria = action.payload as CartState["sortCriteria"];
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProductItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getProductItems.fulfilled,
        (
          state,
          action: PayloadAction<
         { products: ProductItem[];
          count: number;
          page: number,
          pages: number}>) => {
          state.productItems = action.payload.products;
          state.count = action.payload.count;
          state.page = action.payload.page;
          state.pages = action.payload.pages;
          state.isLoading = false;
        }
      )

      .addCase(getProductItems.rejected, (state, action) => {
        console.error("failed:", action.payload);
        state.isLoading = false;
      });
  },
});

export const { setSortCriteria, setCurrentPage } = cartSlice.actions;

export default cartSlice.reducer;
