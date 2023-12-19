import { Link } from "react-router-dom";

export const product = [
  {
    id : 1,
    title : "The Nun",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea nulla impedit, accusantium ex."
  },
  {
    id : 2,
    title : "The Conjuling",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea nulla impedit, accusantium ex."
  },
  {
    id : 3,
    title : "Silent",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea nulla impedit, accusantium ex."
  }
]

const Products = () => {
  return (
    <section>
    <h1>This is product pages.</h1>
    <div className="product">
     {
      product.map((item) => {
        const {id ,title} = item;
        return (
              <Link to={`/product/${title}`} key={id}>
                  <article  className="product-con">
                        <h2>{title}</h2>
                  </article>
               </Link>
        )
      })
     }
    </div>
  </section>
  )
}

export default Products