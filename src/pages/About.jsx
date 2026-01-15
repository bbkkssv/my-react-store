import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='container py-5 text-wa-brown about-max-width'>
      <h1 className='text-center mb-4 text-wa-brown fw-bold'>About Whispering Acres RV Park</h1>
      
      <div className='mb-5'>
        <h2 className='mb-3 text-wa-green fs-3'>More Than Just a Place to Park—It's Home</h2>
        <p className='lead'>Whispering Acres RV Park was born from a simple idea: create a place where long-term RVers could truly settle in, not just stop over. Located on 54 peaceful acres in Tallassee, Alabama, we're not your typical campground. We're a community designed specifically for people who've chosen the RV lifestyle as a way of life.</p>
      </div>

      <div className='mb-5'>
        <h2 className='mb-3 text-wa-green fs-3'>Our Story</h2>
        <p>What started as raw land has become a thoughtfully designed RV community that combines rural tranquility with modern conveniences. We understand the challenges of finding quality long-term RV sites because we've lived it ourselves. Too many parks cater exclusively to vacationers, leaving full-timers and long-term travelers scrambling for a place to call home.</p>
        <p>We built Whispering Acres to be different—a place where you can stay for months or years, not just days. Where you're treated as a resident, not a transient guest. Where improvements matter because this is home for our community.</p>
      </div>

      <div className='mb-5'>
        <h2 className='mb-3 text-wa-green fs-3'>What Drives Us</h2>
        
        <div className='mb-4'>
          <h5 className='fw-bold text-wa-brown'>Community First</h5>
          <p>We believe in creating genuine connections. When you stay here, you're not just renting a site—you're joining a community of fellow RV enthusiasts who value peace, space, and the freedom of mobile living.</p>
        </div>

        <div className='mb-4'>
          <h5 className='fw-bold text-wa-brown'>Constant Improvement</h5>
          <p>We're always evolving. From our new fitness center to upcoming improvements, we reinvest in amenities that matter to long-term residents. If there's something that would make your life better, we want to hear about it.</p>
        </div>

        <div className='mb-4'>
          <h5 className='fw-bold text-wa-brown'>Straightforward & Honest</h5>
          <p>No hidden fees. No bait-and-switch. Our pricing is transparent, our policies are clear, and we handle issues head-on. Month-to-month flexibility means you're never locked in—but we think you'll want to stay.</p>
        </div>

        <div className='mb-4'>
          <h5 className='fw-bold text-wa-brown'>Owner-Operated Care</h5>
          <p>This isn't some corporate park managed by a distant company. We're here, on-site, personally invested in making this the best RV community in Central Alabama. When you call, you're talking to people who genuinely care about your experience.</p>
        </div>
      </div>

      <div className='mb-5'>
        <h2 className='mb-3 text-wa-green fs-3'>Why Tallassee?</h2>
        <p>When we were searching for the perfect location, Tallassee checked every box. Centrally located between Auburn, Montgomery, and Lake Martin—each just 25 minutes away—it offers the best of both worlds: peaceful country living with easy access to urban amenities, college sports, shopping, healthcare, and recreation.</p>
        <p>The land itself spoke to us. Mature pines, open spaces, natural ponds, and room to breathe. It was the perfect canvas for building something special.</p>
      </div>

      <div className='mb-5'>
        <h2 className='mb-3 text-wa-green fs-3'>Our Commitment to You</h2>
        <p className='mb-3'>We know choosing where to park your home is a big decision. We promise to:</p>
        <ul className='lh-lg'>
          <li><strong>Maintain the property</strong> to standards we'd want for ourselves</li>
          <li><strong>Respond quickly</strong> to maintenance issues and concerns</li>
          <li><strong>Keep improving</strong> based on resident feedback</li>
          <li><strong>Respect your privacy</strong> while building genuine community</li>
          <li><strong>Be transparent</strong> about policies, pricing, and changes</li>
          <li><strong>Treat you fairly</strong> because this is your home, and that matters</li>
        </ul>
      </div>

      <div className='mb-5'>
        <h2 className='mb-3 text-wa-green fs-3'>Built for the Long Haul</h2>
        <p>From our EF-5 rated storm shelters to our metered electric (so you only pay for what you use), every decision reflects our focus on long-term residents. We've added amenities that matter to people living here—a real fitness center, on-site laundry with modern QR payment, fishing ponds for relaxation, walking trails for exercise, and secure property access.</p>
        <p>We're not trying to be everything to everyone. We're focused on being the best option for RVers seeking a genuine long-term home base in Central Alabama.</p>
      </div>

      <div className='mb-5'>
        <h2 className='mb-3 text-wa-green fs-3'>Come See For Yourself</h2>
        <p>We'd love to show you around. While we operate by appointment to respect our current residents' privacy, we're always happy to give prospective residents a tour. See the sites, walk the property, meet some of our community members, and get a feel for whether Whispering Acres is the right fit for you.</p>
        <p>Because at the end of the day, this is about more than full hookups and level pads. It's about finding a place where you can settle in, breathe easy, and enjoy the RV lifestyle you've worked hard to achieve.</p>
      </div>

      <div className='text-center p-4 rounded bg-wa-green'>
        <h4 className='mb-3 text-wa-cream'>Ready to learn more?</h4>
        <p className='mb-3 text-wa-cream'>Contact us or call (847) 341-2166</p>
        <Link to="/contact" className='btn btn-lg btn-wa-orange'>Contact Us</Link>
      </div>

      <div className='text-center mt-4 text-muted small'>
        <p className='mb-0'>Whispering Acres RV Park</p>
        <p>3127 Lower Tuskegee Rd, Tallassee, AL 36078</p>
      </div>
    </div>
  )

}

export default About;
