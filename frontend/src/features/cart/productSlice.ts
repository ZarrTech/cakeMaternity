import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "../../utils/api";
const baseUrl = import.meta.env.VITE_API_URL;

export interface ProductItem {
  product: ProductItem;
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  stockQuantity: number;
  desc: string;
  category: string;
  isFeatured: boolean;
}

export interface ProductState {
  productItems: Array<ProductItem>;
  product: ProductItem | null;
  sortCriteria: "latest" | "low to high" | "high to low" | "popularity";
  amount: number;
  total: number; 
  page: number;
  pages: number;
  count: number;
  isLoading: boolean;
  error: boolean;
}

const initialState: ProductState = {
  productItems: [],
  product: null,
  sortCriteria: "latest",
  amount: 0,
  total: 0,
  page: 1,
  pages: 0,
  count: 0,
  isLoading: false,
  error: false,
};

export const getProductItems = createAsyncThunk<
  { products: ProductItem[]; count: number; page: number; pages: number },
  { sortCriteria: string; page: number; category: string }
>(
  "products/getProductItems",
  async ({ sortCriteria, page, category }, { rejectWithValue }) => {
    try {
      const categoryParams = category ? `category=${category}` : "";
      const sorting = sortCriteria ? `sort=${sortCriteria}` : "";
      const { data } = await api.get<{
        products: ProductItem[];
        count: number;
        page: number;
        pages: number;
      }>(`${baseUrl}/products?${categoryParams}&${sorting}&page=${page}`);
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue("failed to fetch product");
    }
  }
);

export const fetchProductId = createAsyncThunk<ProductItem, string>(
  "product/fetchProductId",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await api.get<ProductItem>(
        `${baseUrl}/products/product/${productId}`
      );
      console.log(response.data);
      return response.data.product
    } catch (error) {
      console.error("could not fetch data");
      return rejectWithValue("could not fetch data");
    }
  }
);


const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSortCriteria: (state, action: PayloadAction<string>) => {
      state.sortCriteria = action.payload as ProductState["sortCriteria"];
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    quantity: (state, action) => {
      state.amount = action.payload
    },
    increase: (state, action) => {
      const cartItem = state.product?._id === action.payload
      const stockQuantity = state.product?.stockQuantity;
      if (cartItem) {
        if(stockQuantity) {
          state.amount = state.amount + 1
          stockQuantity - state.amount
        }
      }
    },

    decrease: (state, action) => {
      const cartItem = state.product?._id === action.payload;
      if (cartItem) {
        state.amount = Math.max(state.amount - 1, 0)
      }
    },
   
  },

  extraReducers: (builder) => {
    builder
      // fetchAllProduct
      .addCase(getProductItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getProductItems.fulfilled,
        (
          state,
          action: PayloadAction<{
            products: ProductItem[];
            count: number;
            page: number;
            pages: number;
          }>
        ) => {
          state.productItems = action.payload.products;
          state.count = action.payload.count;
          state.page = action.payload.page;
          state.pages = action.payload.pages;
          state.isLoading = false;
        }
      )

      .addCase(getProductItems.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })

      // fetchSingleProduct
      .addCase(fetchProductId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchProductId.fulfilled,
        (state, action: PayloadAction<ProductItem>) => {
          state.product = action.payload;
          console.log("Product fetched successfully:", action.payload);
          state.isLoading = false;
        }
      )
      .addCase(fetchProductId.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { setSortCriteria, setCurrentPage, increase, decrease, quantity } = productSlice.actions;

export default productSlice.reducer;