import React, { useState, useEffect } from 'react';
import './header.css';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import logo from './imgs/logo.jpg';
import btnall from './imgs/btnall.gif';




const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  // toggledropdownmenu................
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdownmenu = () => {
    setIsDropdownOpen(!isDropdownOpen);

  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingDown = prevScrollPos > currentScrollPos;

    setVisible(isScrollingDown);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);




  // drowpdown button

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (

    <div className={`navbar ${visible ? 'navbar-visible' : 'navbar-hidden'}`} >


      <img src={logo} alt="" className='logo' />
      <a href="/" className="navhead"> TAEKWON-DO</a>


      <div className="desktopMenu">

        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="destopMenuListItem">HOME</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="destopMenuListItem">ABOUT</Link>
        <Link activeClass='active' to='admisstion' spy={true} smooth={true} offset={-100} duration={500} className="destopMenuListItem">ADMISSION</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="destopMenuListItem">CONTACT</Link>
        <NavLink className='lgbtn destopMenuListItem ' onClick={toggleDropdown} >Login</NavLink>
        {dropdownOpen && (
          <div className="dropdown-menu">

            <NavLink to="/login" className='dropbtn' >Student Login</NavLink>
            <NavLink to="/Admin" className='dropbtn' >Admin Login</NavLink>

          </div>
        )}
      </div>
      <div className="news">
        <div className="title">Notice: </div>
        <div className="newsDes">
          <p className='Des'>  "I believe in being strong when everything seems to be going wrong". We are working on women's safety through self-defence training. </p>
          <p className="Des">  We are working on women's safety through self-defence training.</p>
          <p className="Des"> We work with those women who feel they are insecure in society. We train those women they are face problems in public transport and also other places. They are interested to learn Taekwondo.</p>
        </div>

      </div>


      <Link className="cetaoption">
        <div className="dropdown-toggle" onClick={toggleDropdownmenu}>
          <a href="/" >   <img src={btnall} alt="" className='arrimg'  />   </a>
        
        </div>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div className="desktopMenuall">
              <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="destopMenuListItema">HOME</Link>
              <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="destopMenuListItema">ABOUT</Link>
              <Link activeClass='active' to='admisstion' spy={true} smooth={true} offset={-100} duration={500} className="destopMenuListItema">ADMISSION</Link>
              <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="destopMenuListItema">CONTACT</Link>
              <NavLink className='lgbtn destopMenuListItem ' onClick={toggleDropdown} >Login</NavLink>
              {dropdownOpen && (
                <div className="dropdownmenu">

                  <NavLink to="/login" className='dropbtn' >Student Login</NavLink>
                  <NavLink to="/Admin" className='dropbtn' >Admin Login</NavLink>

                </div>
              )}
            </div>


          </div>
        )}
      </Link>


    </div>




  )
}

export default Header;