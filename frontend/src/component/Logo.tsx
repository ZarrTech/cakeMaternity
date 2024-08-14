import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate()
  return (
    <div className="flex-1">
      <button
        onClick={() => navigate("/")}
        className="btn btn-ghost text-[1.7rem] font-bold"
      >
        CM
      </button>
    </div>
  );
};
export default Logo;
