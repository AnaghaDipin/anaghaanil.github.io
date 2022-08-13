import gsap from 'gsap'
import React , {useRef , useEffect} from 'react'
import './Title.css'



function Title() {
  const titleRef = useRef()
  const tagRef  = useRef()
  useEffect(()=>{
  
    gsap.fromTo(titleRef.current,{scale : 0},{ scale : 6 , ease : "elastic.out(1,0.3)" , duration : 2})
    gsap.fromTo(tagRef.current,{ opacity : 0 , y : 200 },{ opacity : 1 , y : 0 , duration : 1})
  },[])
  return (
    <div>
        <div className="the_title">
            <div className="title_name_container">
                <h1 className="title_name" ref={titleRef}>Anagha Anil</h1>
            </div>
            <div className="title_tag_container">
                <p className="title_tag" ref={tagRef}></p>
            </div>
        </div>
    </div>
  )
}

export default Title