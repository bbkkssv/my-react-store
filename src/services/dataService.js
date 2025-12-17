// Product catalog data
const catalog = [
  {
    title: "White T-Shirt",
    category: "white",
    price: 19.99,
    image: "whiteT.png",
    _id: "1",
  },
  {
    title: "Grey T-Shirt",
    category: "grey",
    price: 24.99,
    image: "greyT.png",
    _id: "2",
  },
  {
    title: "Grey Sweatshirt",
    category: "grey",
    price: 29.99,
    image: "greysweatshirt.png",
    _id: "3",
  },
  {
    title: "Green Hoodie",
    category: "green",
    price: 34.99,
    image: "greenhoodie.png",
    _id: "4",
  },
  {
    title: "White T-Shirt 2",
    category: "white",
    price: 22.99,
    image: "whiteT2.png",
    _id: "5",
  },
];

// Data service for product operations
class DataService {
  // Returns all products
  getProducts() {
    return catalog;
  }
}

export default DataService;
