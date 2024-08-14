import {
  fetchProductId,
  increase,
  decrease,
  quantity,
} from "../features/cart/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../component/Button";
import {addToCart} from '../features/cart/cartSlice'

const SingleProduct = () => {
  const { product, isLoading, error, amount } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useDispatch<AppDispatch>();
  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductId(productId));
    }
  }, [dispatch, productId]);

  

  const addToCart = () => {
    
  }

  if (isLoading) {
    return <div className=" text-center">loading...</div>;
  }
 
  if (error) {
    return (
      <div className=" text-center">
        There was an error, please try again or check internet connection.
      </div>
    );
  }

  // if (amount < 1) {
  //   return (
  //     <section className=" flex justify-center items-center">
  //       <header className=" flex flex-col items-center">
  //         <h1 className=" text-3xl font-medium text-black/70">Product</h1>
  //         <p className="">no product to display</p>
  //       </header>
  //     </section>
  //   );
  // }

  return (
    <section className=" w-[90%] mx-auto my-[1rem] bg-gray-50 p-10  flex justify-center items-center">
      {product ? (
        <div className=" w-full p-3 flex flex-col sm:flex-row items-center gap-4">
          <div className=" my-0 mx-auto w-[50%]">
            <img
              className=" w-full"
              src={product.imageUrl}
              alt={product.name}
            />
          </div>
          <div className=" flex flex-col gap-y-4 gap-x-4">
            <div className="">
              <p className=" text-orange font-bold text-[2rem] capitalize mb-1">
                {product.name}
              </p>
              <p className=" text-black font-bold mb-3">{`NGN${product.price}`}</p>
              <p>{product.desc}</p>
            </div>
            <div className=" flex flex-col items-center gap-5  text-black/60">
              <div className=" w-[100%] flex items-center justify-between">
                <p className=" w-[50%] font-medium text-[1.2rem]">
                  product total
                </p>
                <p className=" text-[1.2rem] font-medium">{`NGN${
                  amount * product.price
                }`}</p>
              </div>
              {/* <div className=" w-[100%] flex items-center justify-between">
                <p className=" font-medium  text-[1.2rem]">option total</p>
                <p className=" font-medium  text-[1.2rem]font-medium">{`NGN 0`}</p>
              </div> */}
              <div className=" w-[100%] flex items-center justify-between">
                <p className=" font-medium  text-[1.2rem]">Grand total</p>
                <p className=" font-medium  text-[1.2rem]font-medium">{`NGN 0`}</p>
              </div>
            </div>
            <div className=" flex items-center gap-6">
              <div>
                <button
                  onClick={() => {
                    dispatch(decrease(product._id));
                  }}
                  className=" border border-black/35 py-1 px-3"
                >
                  -
                </button>
                <span className=" border border-black/35 py-1 px-3">
                  {amount}
                </span>
                <button
                  onClick={() => dispatch(increase(product._id))}
                  className=" border border-black/35 py-1 px-3"
                >
                  +
                </button>
              </div>
              <Button url={""} name="BUY NOW" />
            </div>
          </div>
        </div>
      ) : (
        "no product"
      )}
    </section>
  );
};
export default SingleProduct;
