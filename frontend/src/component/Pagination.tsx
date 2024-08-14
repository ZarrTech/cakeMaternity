import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { setCurrentPage } from "../features/cart/productSlice";

const Pagination = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { page, pages, count } = useSelector((state: RootState) => state.cart);
  console.log(pages);

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
  };

  return (
    <section className=" flex justify-center items-center gap-4">
      <div className="pagination-controls">
        {Array.from({ length: pages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-2 py-1 ${
              page === index + 1 ? "bg-gray-400" : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};
export default Pagination;
