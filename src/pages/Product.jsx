import { useParams,useNavigate, useFetcher } from "react-router-dom"
import { product } from "./Products";


const Product = () => {
  const {title}  = useParams();
  const navigate = useNavigate();

  const Product = product.find((item) => item.title === title);

  const naviHandler = () => {
    navigate('/products')
  }


  return (
    <div className="product">
      <section className="product-con">
        <h1>{Product.title}</h1>
        <p>{Product.description}</p>
        <button onClick={naviHandler} className="nav-btn">Go Back</button>
      </section>
    </div>
    )
}

export default Product