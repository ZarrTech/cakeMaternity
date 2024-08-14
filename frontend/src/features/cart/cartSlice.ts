import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "../../utils/api";
const baseUrl = import.meta.env.VITE_API_URL;

interface CartItem {
  productId: {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
  };
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CartState = {
  cart: [],
  isLoading: false,
  error: null,
};

export const fetchCart = createAsyncThunk<
  CartItem[],
  void,
  { rejectValue: string }
>("cart/fetchCart", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get<{ cart: CartItem[] }>(`${baseUrl}/cart`);
    return response.data.cart;
  } catch (error) {
    return rejectWithValue("can't fetch data");
  }
});

export const addToCart = createAsyncThunk<
  CartItem[],
  { productId: string; quantity: number },
  { rejectValue: string }
>("cart/addToCart", async ({ productId, quantity }, { rejectWithValue }) => {
  try {
    const response = await api.post(`${baseUrl}/cart/add`, {
      productId,
      quantity,
    });
    return response.data;
  } catch (error: any) {
    rejectWithValue(error.response.data);
  }
});

export const removeFromCart = createAsyncThunk<
  CartItem[],
  string,
  { rejectValue: string }
>("cart/remove", async (productId, { rejectWithValue }) => {
  try {
    const response = await api.delete(`${baseUrl}/cart/remove/${productId}`);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
  
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchCart.fulfilled,
        (state, action: PayloadAction<CartItem[]>) => {
          state.cart = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(fetchCart.rejected, (state) => {
        state.error = "there was an error";
      })
      // addToCart
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(
        addToCart.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.error = action.payload || "could not add to cart";
        }
      )
      //removeFromCart
      .addCase(removeFromCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        removeFromCart.fulfilled,
        (state, action: PayloadAction<CartItem[]>) => {
          state.cart = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(
        removeFromCart.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.error = action.payload || "could not remove cart";
        }
      );
  },
});

export default cartSlice.reducer