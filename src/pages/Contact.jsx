import './Contact.css'

function Contact() {
  return (
    <div className="contact-container text-light">
      <h1 className="text-light">Contact Us</h1>
      <p className="text-light">Get in touch with us for any questions or concerns.</p>
      
      <div className="contact-info">
        <div className="contact-item">
          <h3>Email</h3>
          <p>info@whisperingacresofalabama.com</p>
        </div>
        
        <div className="contact-item text-light">
          <h3>Phone</h3>
          <p>847-341-2166</p>
        </div>
        
        <div className="contact-item text-light">
          <h3>Address</h3>
          <p>3127 Lower Tuskegee Rd<br/>Tallassee, AL 36078</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
