const Footer = () => {
  const year = new Date().getFullYear()
  const openHour = 8
  const closeHour = 22

  // Get the current hour
  const currentHour = new Date().getHours()

  // Determine if the restaurant is open
  const isOpen = currentHour >= openHour && currentHour < closeHour

  return (
    <footer>
      <div className='container'>
        <div className='footer-content'>
          <p>&copy; {year} Pizza Restaurant. All rights reserved.</p>
          <ul className='social-links'>
            <li>
              <a href='#'>Facebook</a>
            </li>
            <li>
              <a href='#'>Instagram</a>
            </li>
            <li>
              <a href='#'>Twitter</a>
            </li>
          </ul>
          <p>123 Pizza Street, Food City, FL 12345 | Phone: (123) 456-7890</p>
          <p>
            Open Hours: {openHour}:00 AM - {closeHour}:00 PM
          </p>
          <p>
            {isOpen
              ? 'We are currently open!'
              : 'Sorry, we are currently closed.'}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
