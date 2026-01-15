import { useState } from 'react'

function Admin() {
  // Coupon State for the coupon section
  const [couponCode, setCouponCode] = useState("")
  const [couponDiscount, setCouponDiscount] = useState(0)
  const [coupons, setCoupons] = useState([])

  // Products State for the products section
  const [productTitle, setProductTitle] = useState("")
  const [productCategory, setProductCategory] = useState("")
  const [productImage, setProductImage] = useState("")
  const [productPrice, setProductPrice] = useState(0)
  const [products, setProducts] = useState([])

  function saveCoupon() {
    const newCoupon = {
      code: couponCode,
      discount: couponDiscount
    }

    setCoupons([...coupons, newCoupon])
    
    // Clear form starting from scratch
    setCouponCode("")
    setCouponDiscount(0)
  }

  function saveProduct() {
    const newProduct = {
      title: productTitle,
      category: productCategory,
      image: productImage,
      price: productPrice
    }

    setProducts([...products, newProduct])
    
    // Clear form starting from scratch
    setProductTitle("")
    setProductCategory("")
    setProductImage("")
    setProductPrice(0)
  }

  return (
    <div className='container py-4 text-wa-brown'>
      <h1 className='text-center mb-4'>Store Administration</h1>

      <div className='row g-4'>
        <div className='col-md-6'>
          <h3 className='mb-3'>Add Products</h3>

          <div className='p-4 rounded bg-white border-wa-green'>
            <div className='mb-3'>
              <label className='form-label'>Title</label>
              <input
                type='text'
                className='form-control'
                value={productTitle}
                onChange={(e) => setProductTitle(e.target.value)}
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Category</label>
              <input
                type='text'
                className='form-control'
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Image (URL)</label>
              <input
                type='text'
                className='form-control'
                placeholder='https://whisperingacresofalabama.com/images/rv-sites.jpg'
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Price</label>
              <input
                type='number'
                className='form-control'
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </div>

            <button className='btn btn-wa-green' onClick={saveProduct}>Save Product</button>
          </div>
        </div>

        <div className='col-md-6'>
          <h3 className='mb-3'>Add Coupons</h3>

          <div className='p-4 rounded bg-white border-wa-green'>
            <div className='mb-3'>
              <label className='form-label'>Code</label>
              <input
                type='text'
                className='form-control'
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Discount</label>
              <input
                type="number"
                className='form-control'
                value={couponDiscount}
                onChange={(e) => setCouponDiscount(e.target.value)}
              />
            </div>

            <button className='btn btn-wa-orange' onClick={saveCoupon}>Save Coupon</button>
          </div>
        </div>
      </div>

      <div className='row g-4 mt-4'>
        <div className='col-md-6'>
          <h5 className='mb-3'>Products List:</h5>
          {
            products.length === 0
            ? <p className='text-muted'>There are no products</p>
            :
            <div className='row g-3'>
              {products.map((product, index) => (
                <div key={index} className='col-12'>
                  <div className='card p-3 bg-wa-green text-wa-cream border-0'>
                    <div className='row g-3 align-items-center'>
                      <div className='col-auto'>
                        <img 
                          src={product.image} 
                          className='rounded card-img-admin'
                        />
                      </div>
                      <div className='col'>
                        <h6 className='mb-1'>{product.title}</h6>
                        <p className='mb-0 small text-wa-teal'>{product.category}</p>
                        <p className='mb-0 fw-bold'>${parseFloat(product.price).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
        </div>

        <div className='col-md-6'>
          <h5 className='mb-3'>Coupons List:</h5>
          {
            coupons.length === 0
            ? <p className='text-muted'>There are no coupons</p>
            :
            <ul className='list-unstyled'>
              {coupons.map((coupon, index) => (
                <li key={index} className='mb-2 p-2 border-bottom border-wa-green'>
                  {coupon.code} - {coupon.discount}%
                </li>
              ))}
            </ul>
          }
        </div>
      </div>
    </div>
  )
}

export default Admin