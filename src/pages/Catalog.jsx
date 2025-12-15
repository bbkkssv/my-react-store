import Product from "../components/Product";
import { useEffect,useState } from "react";
import DataService from "../services/dataService";

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let service = new DataService();
    let data = service.getProducts();
    setProducts(data);
  },[]);

  return (
    <div className="container py-5">
      <h1 className="text-center text-light fw-bold mb-5" style={{fontSize: '3rem'}}>Our Amazing Catalog</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map(prod => (
          <div key={prod._id} className="col">
            <Product data={prod}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
