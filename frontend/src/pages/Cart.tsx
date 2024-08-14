import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import {
  fetchCart,
  addToCart,
  removeFromCart,
} from "../features/cart/cartSlice";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cart, isLoading, error } = useSelector(
    (state: RootState) => state.cart
  );

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);
  const handleAddToCart = (productId: string, quantity: number) => {
    dispatch(addToCart({ productId, quantity }));
  };
  const HandleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };
  if (isLoading) {
    return <div>loading...</div>
  }
  if (error) {
    return <div>error</div>
  }
  return (
    <section>
      {cart.length < 0 ? <div>no cart found</div> : <div>{cart.map((item) => {
        const { productId, quantity } = item
        return <div key={productId._id}>
          <img src={productId.imageUrl} alt={productId.name} />
          <p>{productId.name}</p>
          <p>{productId.price}</p>
          <div>
            <span onClick={()=>HandleRemoveFromCart(productId._id)}>-</span>
            <p>{quantity}</p>
            <span onClick={()=>handleAddToCart(productId._id, quantity)}>+</span>
          </div>
        </div>
      })}</div>}
    </section>
  );
};
export default Cart;
