import React from 'react'
import { Link } from 'react-router-dom'

const Pages = () => {
  return (
    <div>

        {/* Pages menu */}
     <div>
        <Link to="/about">About</Link>
        <Link to="/faq">Faq</Link>
        <Link to="/pricing">Pricing Plan</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/acategory">Category Styles</Link>
        <Link to="/event">Events</Link>
        <Link to="/portfolio">Portfolio</Link>
     </div>

    </div>
  )
}

export default Pages