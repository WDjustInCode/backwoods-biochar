import React from 'react'
import { Link } from 'gatsby'

// import icons
import { IconContext } from "react-icons";
import { FaFacebook, FaEnvelope } from "react-icons/fa/";
import { FaInstagram } from "react-icons/fa/";
import { FaPhone } from "react-icons/fa/";

const Footer = class extends React.Component {
  render() {
    return (
      <div className="columns is-centered">
      <footer id="footer" className=" column footer has-text-white-ter is-three-quarters-desktop margin-top-0" style={{backgroundImage: `url('/img/footerBgImage.png')`,
       backgroundPosition: `top center`, backgroundSize: 'cover', marginBottom: 0, paddingTop: 350, height: 800}}
      >
        <div className="columns is-multiline is-widescreen has-text-white-ter is-centered">
          <div className="column is-12" style={{padding: 0}}>
            <section className="menu">
              <ul className="menu-list has-text-centered ml-0 mt-0 is-size-4">
                <li>
                  <Link to="/" className="navbar-item">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="footerMenu navbar-item" to="/products">
                    Products
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/blog">
                    Latest Stories
                  </Link>
                </li>
              </ul>
            </section>
          </div>
          <div className="column is-12 has-text-centered" style={{padding: 0}}>
            <ul className="menu-list has-text-centered ml-0 mt-0">
              <li>
                <Link className="navbar-item is-size-4" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <IconContext.Provider value={{ color: "white", size: 25 }}>
              <div className="" style={{paddingTop: 20,paddingBottom: 10}} >
                  <a href="tel:+1360-241-2244" className="px-4"><span><FaPhone /></span></a>
                  <a href="mailto:joshua@backwoodsbiochar.com" className="px-4"><span><FaEnvelope /></span></a>
                  <a href="https://www.facebook.com/Backwoods-Biochar-104956791259951" className="px-4"><span><FaFacebook /></span></a>
                  <a href="https://www.instagram.com/backwoods_biochar_llc/" className="px-4"><span><FaInstagram /></span></a>
              </div>
            </IconContext.Provider>
          </div>
          <div className="column is-size-7 has-text-centered" style={{marginBottom: 10}}>
            <small className="col-8 mx-auto text-center text-white">Copyright © 2020, <a href="/" title="">BackwoodsBiochar</a>.</small><br/>
            <small className="col-8 mx-auto text-center text-white pb-4">Backwoods digital team</small>
          </div>
        </div>
      </footer>
      </div>
    )
  }
}

export default Footer
