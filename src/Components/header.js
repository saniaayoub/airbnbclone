import React from 'react'
import logo from '../images/logo.png'
import './header.css'
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
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
            <div className="col-md-6"></div>
            <div className="col-md-3"></div>
          </div>
          <div className="row text-center">
            <div className="col-md-12">
              <p> hello</p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
