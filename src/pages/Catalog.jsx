import Product from "../components/Product";
import { useEffect,useState } from "react";
import DataService from "../services/dataService";

// Main catalog page with filtering functionality
function Catalog() {
  const [products, setProducts] = useState([]);
  const [catergories, setCategories] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);

  // Loads all products and categories from data service
  function loadCatalog(){
    let cats = ["grey","green","white"];
    let service = new DataService();
    let data = service.getProducts();

    setCategories(cats);
    setProducts(data);
    setProductsToShow(data);
  }

  // Clears filter to show all products
  function clearFilter() {
    setProductsToShow(products);
  }

  // Filters products by category
  function filter(category) {
    let list = products.filter(prod => prod.category === category);
    setProductsToShow(list);
  }

  useEffect(() => {
    loadCatalog();
  },[]);

  return (
    <div className="container py-5">
      <h1 className="text-center text-light fw-bold mb-5" style={{fontSize: '3rem'}}>Our Amazing Catalog</h1>
      
      <div className="filters mb-4">
        <button className="btn btn-dark" onClick={clearFilter}>All</button>
        {catergories.map((cat) => (
          <button key={cat} className="btn btn-dark ms-2 text-capitalize" onClick={() => filter(cat)}>{cat}</button>
        ))}
      </div>

      <hr className="text-light mb-4" />

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {productsToShow.map(prod => (
          <div key={prod._id} className="col">
            <Product data={prod}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
