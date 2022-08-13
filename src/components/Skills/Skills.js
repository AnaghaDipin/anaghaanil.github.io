import { faHtml5, faLinux } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gsap from 'gsap'
import React, { useRef, useEffect } from 'react'
import './Skills.css'
import { ScrollTrigger } from 'gsap/all'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faAws } from '@fortawesome/free-brands-svg-icons'
gsap.registerPlugin(ScrollTrigger)


function Skills() {
    const skillRef = useRef()
    const iconRef = useRef()

    useEffect(() => {
        gsap.fromTo(skillRef.current, { x: 0 }, {
            x: -500, scrollTrigger: {
                trigger: skillRef.current,
                start: "-250%",
                end: "100%",
                scrub: 1
            }
        })
        if(window.innerWidth < 700){
            gsap.fromTo(skillRef.current, { x: 0 }, {x: -100, scrollTrigger: {
                    trigger: skillRef.current,
                    start: "-250%",
                    end: "100%",
                    scrub: 1
                }
            })
        }
        
    }, [])
    return (
        <div className='skills' id='skills'>
            <div class="skills_title_body">
                <h1 class="skills_title" ref={skillRef}>SKILLS</h1>
            </div>
            <div className="html_title">
                <p className='skill_name'>Linux</p>
                <FontAwesomeIcon icon={faLinux} className="icon" />
            </div>
            <div className="css_title">
                <p className='skill_name'>Python</p>
                <FontAwesomeIcon icon={faPython} className="icon" />
            </div>
            <div className="javascript_title">
                <p className='skill_name'>AWS</p>
                <FontAwesomeIcon icon={faAws} className="icon" />
            </div>
            <div className="react_title">
                <p className='skill_name'>HTML</p>
                <FontAwesomeIcon icon={faHtml5} className="icon" />
            </div>
            <div className="firebase_title">
                <p className='skill_name'>MySQL</p>
            </div>
            <div className="material_ui">
                <p className='skill_name'>Ansible</p>
            </div>
            <div className="styled">
                <p className='skill_name'>SSH</p>
            </div>
        </div>

    )
}

export default Skills