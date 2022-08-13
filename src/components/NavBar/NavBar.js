import gsap from 'gsap';
import React ,{useRef , useEffect } from 'react'
import './NavBar.css'

function NavBar() {
  const navRef = useRef()
  const headTitleRef = useRef()
  const titleH= "<hello>"
  useEffect(()=>{
    gsap.fromTo(navRef.current , { x : "200" }, {x : "0" , duration : 1.5})
    gsap.fromTo(headTitleRef.current , { y : "-50" } , { y  : "0" , duration : 1.5})
  },[]);
  return (
    <div className='title_navigation_bar'>
        <div className="navigation_bar_logo">
                <h4 className="nav_logo" ref={headTitleRef}> {titleH} </h4>
            </div>
            <div className="navigation_bar_navs" ref={navRef}>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
    </div>
  )
}

export default NavBar