import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { useEffect } from "react";
import { getProductItems } from "../../features/cart/productSlice";
import Button from "../Button";
import HorizontalLine from "../HorizontalLine";

const Featured = () => {
  const { productItems, isLoading, sortCriteria, page } = useSelector(
    (state: RootState) => state.product
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductItems({
      sortCriteria, page,
      category: ""
    }));
  }, []);

  if (isLoading) {
    return <div className=" text-center">Loading...</div>;
  }

  const featuredItems = productItems.filter((item) => item.isFeatured);

  return (
    <section>
      <div>
        <h1 className=" text-center text-orange font-medium text-[2rem]">
          featured
        </h1>

        <div className=" w-[90%] mx-auto my-[1rem] bg-gray-50 p-10">
          {featuredItems.length > 0 ? (
            <div className="w-full my-3 grid  grid-cols-3  gap-3">
              {featuredItems.map((item) => {
                const { _id, name, price, category, imageUrl } = item;
                return (
                  <div key={_id}>
                    <article className="  border-slate-800 shadow-lg rounded-2xl">
                      <div className=" w-full">
                        <img
                          src={imageUrl}
                          alt="product image"
                          className=" w-full"
                        />
                      </div>
                      <hr className=" mx-4 my-2 border-2" />
                      <div className=" flex flex-col mx-3 pb-3">
                        <p className=" font-bold text-gray capitalize mb-3">
                          {category}
                        </p>
                        <h1 className=" text-orange font-bold text-[1rem] capitalize mb-1">
                          {name}
                        </h1>
                        <p className=" text-black font-bold mb-3">₦{price}</p>
                        <Button url="o" name="buy now" />
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>no featured products found</div>
          )}
        </div>
      </div>
      <HorizontalLine />
    </section>
  );
};
export default Featured;
