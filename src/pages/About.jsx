import { useState } from 'react'
import './About.css'

function About() {
  const [isEmailVisible, setIsEmailVisible] = useState(true)

  function showEmailInformation() {
    setIsEmailVisible(true)
  }

  function hideEmailInformation() {
    setIsEmailVisible(false)
  }

  return (
    <div className='text-light'>
      <h1 className='text-light'>About Us</h1>
      <p className='text-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, iure sed totam debitis iste rerum!</p>

      {
        isEmailVisible == true
        ? <p className='text-light'>bbkkssv@gmail.com</p>
        : <p className='text-light'> Click the button below to see my email address.</p>
      }

      <button className='btn btn-outline-light me-2' onClick={hideEmailInformation}>Hide my email</button>
      <button className='btn btn-light' onClick={showEmailInformation}>Show my email</button>

    </div>
  )

}

export default About;
