import { NavLink, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { useEffect } from "react";
import { getProductItems, setCurrentPage, setSortCriteria } from "../features/cart/cartSlice";
import Button from "../component/Button";
import Sort from "../component/Sort";
import Pagination from "../component/Pagination"



const All = () => {

  const { productItems, isLoading, sortCriteria, page, pages, count  } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(() => {
    const sort = searchParams.get('sort') || sortCriteria
    const currentPage = parseInt(searchParams.get('page') || `${page}`)

    
    dispatch(getProductItems({ sortCriteria, page }));
    dispatch(setCurrentPage(currentPage))
    dispatch(setSortCriteria(sort))
  }, [dispatch, searchParams]);

  useEffect(() => {
    setSearchParams({sort: sortCriteria, page:`${page}`})
  },[sortCriteria, page, setSearchParams])

  if (isLoading) {
    return <div className=" text-center">Loading...</div>;
  }

  return (
    <section className=" py-1 px-4">
      <div className=" w-[90%] mx-auto my-[1rem] bg-gray-50 p-10">
        <div className="text-lg breadcrumbs font-medium text-orange">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all">All</NavLink>
            </li>
          </ul>
        </div>
        <h1 className=" text-4xl text-maroon font-semibold">Store</h1>

        <div className="flex my-10 justify-between items-center">
          <div>
            showing {page}-{pages} of {count}
          </div>
          <div>
            <Sort />
          </div>
        </div>

        <div className=" w-full my-3 grid  grid-cols-3  gap-3">
          {Array.isArray(productItems) ? (
            productItems.map((item) => {
              console.log(item);

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
                      <Button name="buy now" url="o" />
                    </div>
                  </article>
                </div>
              );
            })
          ) : (
            <div>no product found</div>
          )}
        </div>
        <Pagination />
      </div>
    </section>
  );
};
export default All;
