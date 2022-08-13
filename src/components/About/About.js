import gsap from 'gsap'
import React , { useEffect , useRef} from 'react'
import { ScrollTrigger } from 'gsap/all'
import './About.css'
gsap.registerPlugin(ScrollTrigger)


function About() {
  const aboutRef = useRef()
  useEffect(()=>{
    gsap.fromTo(aboutRef.current,{ x : 0 } ,{ x : 500 , scrollTrigger  :{
      trigger : aboutRef.current,
      start : "-150%",
      end : "100%",
      scrub : 1
    }})
  },[])
  return (
    <div className='about' id='about'>
        <div class="about_title_container">
            <h1 class="about_title" ref={aboutRef}>ABOUT ME</h1>
        </div>
        <div class="about_content_container">
            <p class="about_content">Front-end developer who cares deeply about user <br /> experience. Passionate about learning new <br /> Front-End technologies.</p>
        </div>
    </div>
  )
}

export default About