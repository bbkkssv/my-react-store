const catalog = [
  {
    title: "White T-Shirt",
    category: "merchandise",
    price: 19.99,
    image: "whiteT.png",
    _id: "1",
  },
  {
    title: "Grey T-Shirt",
    category: "merchandise",
    price: 24.99,
    image: "greyT.png",
    _id: "2",
  },
  {
    title: "Grey Sweatshirt",
    category: "merchandise",
    price: 29.99,
    image: "greysweatshirt.png",
    _id: "3",
  },
  {
    title: "Green Hoodie",
    category: "merchandise",
    price: 34.99,
    image: "greenhoodie.png",
    _id: "4",
  },
  {
    title: "White T-Shirt 2",
    category: "merchandise",
    price: 22.99,
    image: "whiteT2.png",
    _id: "5",
  },
];

class DataService {
  getProducts() {
    return catalog;
  }
}

export default DataService;
