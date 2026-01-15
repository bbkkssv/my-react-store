function Contact() {
  return (
    <div className="container py-4 text-wa-brown">
      <h1 className="mb-3">Contact Us</h1>
      <p className="mb-4 fs-5">Get in touch with us for any questions about camping or reservations.</p>
      
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card text-center p-4 rounded shadow-sm h-100 bg-wa-green text-wa-cream border-0">
            <h3 className="mb-3 text-wa-orange">Email</h3>
            <p>info@whisperingacresofalabama.com</p>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card text-center p-4 rounded shadow-sm h-100 bg-wa-green text-wa-cream border-0">
            <h3 className="mb-3 text-wa-orange">Phone</h3>
            <p>847-341-2166</p>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card text-center p-4 rounded shadow-sm h-100 bg-wa-green text-wa-cream border-0">
            <h3 className="mb-3 text-wa-orange">Address</h3>
            <p>3127 Lower Tuskegee Rd<br/>Tallassee, AL 36078</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
