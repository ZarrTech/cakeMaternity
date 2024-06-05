
import { useSelector,  useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import {  setSortCriteria } from "../features/cart/cartSlice";

const Sort = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {  sortCriteria } = useSelector((state: RootState) => state.cart)

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortCriteria(e.target.value));
  }

  return (
      <select className=" bg-orange text-white font-medium outline-none px-2 py-1" value={sortCriteria} onChange={handleSortChange}>
        <option value="latest">Latest</option>
        <option value="low to high">Price: low to high</option>
        <option value="high to low">Price: hight to low</option>
      </select>
  );
};
export default Sort;
