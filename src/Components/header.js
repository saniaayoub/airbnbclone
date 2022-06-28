import { Button } from 'bootstrap'
import React from 'react'
import logo from '../images/logo.png'
import './header.css'
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <div className="logo_div">
                <img
                  src={logo}
                  alt="logo"
                  className={'logo_img'}
                  width={'113'}
                  height={'40'}
                />
              </div>
            </div>
            <div className="col-md-4">
              <nav className="nav-class">
                <div className="nav-div">
                  <ul className="nav-list-custom">
                    <li className="nav-item">
                      <a className="nav-tag" href="#">
                        Anywhere
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-tag" href="#">
                        Any week
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-tag" href="#">
                        Add guests
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row text-center">
            <div className="col-md-12">
              <p> hello</p>
            </div>
          </div>
          <div></div>
        </div>
      </header>
    </>
  )
}

export default Header
