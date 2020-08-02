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
      <footer id="footer" className="footer has-text-white-ter full-width-image-container margin-top-0" style={{backgroundImage: `url('/img/home-jumbotron.jpg')`,
      backgroundPosition: `bottom center`,
      backgroundSize: 'cover',
      backgroundAttachment: `fixed`, marginBottom: 0, paddingTop: 0}}
      >
        <div className="columns has-text-white-ter is-centered" style={{marginBottom: 0}}>
          <div className="column is-4" style={{}}>
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
          <div className="column is-4 has-text-centered">
            <div className="columns is-mobile is-multiline is-centered" style={{height: '100%'}}>
              <section>
                <ul className="menu-list has-text-centered ml-0 mt-0">
                  <li>
                    <Link className="navbar-item is-size-4" to="/about">
                      About
                    </Link>
                  </li>
                </ul>
              </section>
              <section className="column is-full py-3" >
                <IconContext.Provider value={{ color: "white", size: 25 }}>
                  <div className="">
                      <a href="tel:+1360-241-2244" className="px-4"><span><FaPhone /></span></a>
                      <a href="mailto:joshua@backwoodsbiochar.com" className="px-4"><span><FaEnvelope /></span></a>
                      <a href="https://www.facebook.com/Backwoods-Biochar-104956791259951" className="px-4"><span><FaFacebook /></span></a>
                      <a href="https://www.instagram.com/backwoods_biochar_llc/" className="px-4"><span><FaInstagram /></span></a>
                  </div>
                </IconContext.Provider>
                <div className="is-size-7" style={{paddingTop: 10}}>
                  <small className="col-8 mx-auto text-center text-white">Copyright © 2020, <a href="/" title="">BackwoodsBiochar</a>.</small><br/>
                  <small className="col-8 mx-auto text-center text-white pb-4">created by justInCodeWD</small>
                </div>
              </section>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
