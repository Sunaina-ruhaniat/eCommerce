import React from 'react'
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillApple } from 'react-icons/ai'
import { FaGooglePlay } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="footer-content">
          <h3
            style={{
              fontFamily: 'Trebuchet MS',
              fontSize: '2em',
            }}>
            <em>Formal Couture</em>
          </h3>
          <div className="sub">
            <div>
              <b>Customer Care</b>
              <p>About Us</p>
              <p>Useful Links</p>
            </div>
            <div>
              <b>FAQs</b>
              <p>Track Order</p>
              <p>Returns & Refunds</p>
            </div>
            <div>
              <b>Our Story</b>
              <p>Contact Us</p>
              <p>Careers</p>
            </div>
            <div>
              <b>Blogs</b>
              <p>Site Map</p>
              <p>Corporate Information</p>
            </div>
            <div>
              <b>Social links</b>
              <div>
                <AiFillFacebook />
                <AiFillTwitterCircle />
                <AiFillInstagram />
              </div>
              <div>
                <AiFillApple />
                <FaGooglePlay />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
