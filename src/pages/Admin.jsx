import './Admin.css'

function Admin() {
  return (
    <div className='text-light'>
      <h1 className='text-light'>Store administration</h1>

      <div className='d-flex gap-4'>
        <section className='w-50'>
          <h3 className='text-light'>Add Products</h3>
          <div className='border border-secondary bg-dark text-light'>
            input
            label
          </div>
        </section>

        <section className='w-50'>
          <h3 className='text-light'>Add Coupons</h3>
          <div className='border border-secondary bg-dark text-light'>
            input
            label
          </div>
        </section>
      </div>

    </div>
  )
}

export default Admin
