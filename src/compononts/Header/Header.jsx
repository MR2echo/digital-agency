import React, {useRef, useEffect} from 'react'

import "./header.css";


const nav__links = 
[
    {
        path: '#',
        display: 'Home'
    },
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#services',
        display: 'Services'
    },
    {
        path: '#projects',
        display: 'Porjects'
    },
    {
        path: '#blog',
        display: 'Blog'
    },

]

const Header = ({theme, toggleTheme}) => {

  const headerRef = useRef(null)

  const menuRef = useRef(null)

  const headerFunc = ()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
    {
        headerRef.current.classList.add('header__shrink')
    }else{
        headerRef.current.classList.remove('header__shrink')
    }
  }


  useEffect(()=> {
    window.addEventListener('scroll', headerFunc)

    return ()=> window.removeEventListener('scroll', headerFunc) 
  }, []);



  const handleClick = e => {
    e.prevenDefault()

    const targetAttr = e.target.getAttribute('href')

    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
        left: 0,
        top: location - 80,
    });
  };


  const toggleMenu = ()=> menuRef.current.classList.toggle('mobile__active');

  return (
    <header className="header" ref={headerRef}>
        <div className="container">
            <div className="nav__wrapper">
                <div className="logo">
                    <h2>Digency</h2>
                    {/* <p>Grow with us</p> */}
                </div>

                {/* ======== navigation ======= */}
                <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                    <ul className="menu">
                       {nav__links.map((item, index) => (
                        <li className='menu__item' key={index}>
                            <a href={item.path} onClick={handleClick} className="menu__link">
                                {item.display}
                            </a>
                        </li>
                       ))}
                    </ul>
                </div>

                {/* ======== light mode ======= */}
                <div className="light__mode">
                    <span onClick={toggleTheme}>
                        {theme ==="light-theme" ? (
                            <span>
                                <i class="ri-moon-line"></i> Dark
                            </span>
                        ) : (
                            <span>
                                <i class="ri-sun-line"></i> Light
                            </span>
                        )}
                    </span>
                </div>


                <span className='mobile__menu' onClick={toggleMenu}>
                    <i className='ri-menu-line'></i>
                </span>
            </div>
        </div>
    </header>
  )
}

export default Header