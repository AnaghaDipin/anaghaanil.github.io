import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'
import './About.css'
gsap.registerPlugin(ScrollTrigger)


function About() {
  const aboutRef = useRef()
  useEffect(() => {
    gsap.fromTo(aboutRef.current, { x: 0 }, {
      x: 500, scrollTrigger: {
        trigger: aboutRef.current,
        start: "-150%",
        end: "100%",
        scrub: 1
      }
    })
  }, [])
  return (
    <div className='about' id='about'>
      <div class="about_title_container">
        <h1 class="about_title" ref={aboutRef}>ABOUT ME</h1>
      </div>
      <div class="about_content_container">
        <p class="about_content">
          Decision maker, Problem Solver , Continuous and Team player who is enthusiastic<br />
          about cloud technologies. During my internship, I was privileged to work with <br />
          technology experts to build and support Web SAAS solutions based on<br />
          Linux platform in a cloud(Azure), Monitoring & Securing, LAMP and <br />
          Linux server setup administration. I could play a firm role in automating,<br />
          supporting & to ensure CI/CD in Product Developing<br />
        </p>
      </div>
    </div>
  )
}

export default About