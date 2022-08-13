import { faGithub, faLinkedin , faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React , { useRef , useEffect}from 'react'
import './Contact.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


function Contact() {
    const contactRef = useRef()
    useEffect(()=>{
        gsap.fromTo(contactRef.current,{x : -400},{ x : 0 , scrollTrigger : {
            trigger : contactRef.current,
            start: "-220%",
            end: "-100%",
            scrub: 1,
            
        }})
        if(window.innerWidth < 700){
            gsap.fromTo(contactRef.current,{x : -400},{ x : 0 , scrollTrigger : {
                trigger : contactRef.current,
                start: "-520%",
                end: "-400%",
                scrub: 1,
            }})
        }
    },[])
  return (
    <div className='contact' id='contact'>
        <h1 className='contact_title' ref={contactRef}>CONTACT</h1>
        <div className="github">
            <a href="https://github.com/anazbinnoushad">
                <FontAwesomeIcon icon={ faGithub } className="contact_icon" />
            </a>
        </div>
        <div class="mail">
            <a href="mailto:anazbinnoushad@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="contact_icon"/>
            </a>
        </div>
        <div className="linkedin">
            <a href="https://www.linkedin.com/in/anaz-n-4560011bb/">
                <FontAwesomeIcon icon={ faLinkedin } className="contact_icon"/>
            </a>
        </div>
        <div className="instagram">
          <a href="https://www.instagram.com/anaz_bin_noushad/">
              <FontAwesomeIcon icon={ faInstagram } className="contact_icon"/>
          </a>
        </div>
    </div>
  )
}

export default Contact