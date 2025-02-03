
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Navbar from './components/Navbar'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Model from './components/Model'
import * as Sentry from '@sentry/react'
import Features from './components/Features'
import Chip from './components/Chip'
import Footer from './components/Footer'
function App() {
  const mainRef = useRef(null);
  const circRef = useRef(null);

  const [mouseLeave, setMouseLeave] = useState(false);

  const[mousePointer,setMousePointer] = useState({
    x:-25,
    y:-25,
  });

  useGSAP(()=>{
    gsap.to(circRef.current,{
      x:mousePointer.x,
      y:mousePointer.y,
      ease:'power1',
      scale:mouseLeave?0:1,
    })
  },[mousePointer,mouseLeave]) // adding mouseLeave to dependenciy to see if the mouse is not in window then only itll go away

  const handleMouseMove =(e)=>{
    const mainRect = mainRef.current.getBoundingClientRect();
    setMousePointer((prev)=>({...prev,x:e.clientX-mainRect.left,y:e.clientY-mainRect.top}))
   if(mouseLeave){  // handling mouse move true if its true then only itll be false this will avoid rerending and setting state false again and again 
    setMouseLeave(false)
    console.log(mouseLeave)
   }
  }

  const handleMouseLeave = (e)=>{
    setMouseLeave(true)
    console.log(mouseLeave)
  }
 
  // const handleMouseMove =(e)=>{
    
  //   if(circRef.current){
  //     const mainRect = mainRef.current.getBoundingClientRect();

  //     setTimeout(()=>{
  //     circRef.current.style.top =`${e.clientY - mainRect.top}px`
  //   circRef.current.style.left =`${e.clientX - mainRect.left}px`
  //   },100)
  // }
    
  // }
  // useEffect(()=>{
  //   mainRef.current.addEventListener('mousemove',handleMouseMove)

  //   return ()=>{
  //     mainRef.current.removeEventListener('mousemove',handleMouseMove)
  //   }
  // },[])
  return ( <>
 
      <main onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}  ref={mainRef} className='relative'>   {/*Or we can add onMouseMove and pass the function */}
      <div ref={circRef} className='h-6 pointer-events-none w-6 absolute z-[99] rounded-full bg-white '></div>
      <Navbar /> 
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Chip />
      <Footer />
     </main>
  </>
    
  )
}

export default Sentry.withProfiler(App)
