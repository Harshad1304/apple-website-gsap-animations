import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { heroVideo, smallHeroVideo } from '../utils'

function Hero() {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo: heroVideo)

    const handleVideoSrcSet = ()=>{
        if(window.innerWidth < 760){
            setVideoSrc(smallHeroVideo)
        }else{
            setVideoSrc(heroVideo)
        }
    }

    useEffect(()=>{
        window.addEventListener('resize',handleVideoSrcSet);

        return ()=>{
            window.removeEventListener('resize',handleVideoSrcSet)
        }
    },[])
    useGSAP(()=>{
        gsap.to('#hero',{
            opacity:1,
            delay:2,
            ease:'power1.in',

        })
        gsap.to('#cta',{
            opacity:1,
            y:-50,
            delay:2,
            ease:'power1.in',

        })
    },[])
  return (
    <section className='w-full  h-[calc(100vh-60px)] bg-black relative '>
        <div className=' h-5/6 w-full flex justify-center items-center flex-col'>
        <p id='hero' className='text-center font-semibold text-3xl text-gray-400 opacity-0 max-md:mb-10'>iPhone 15 Pro</p>
        <div className='md:w-10/12 w-9/12'>
        <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type='video/mp4'/>
        </video>
        </div>
        </div>
        <div id='cta' className='flex flex-col gap-3 items-center opacity-0 translate-y-20'>
        <a href="#highlights" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10  py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy</a>
        <p className='font-normal text-xl mt-10'>From $199/month or $999</p>
        </div>
    </section>
  )
}

export default Hero