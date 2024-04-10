import { useParams } from "react-router-dom"




const BudjetCakes = () => {
  const { bID } = useParams();
  return (
    <div>budjet/{bID }</div>
  )
}
export default BudjetCakes