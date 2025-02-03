import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Chip() {
    const videoRef = useRef(null);

    useGSAP(() => {
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '20% bottom',
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        });

        gsap.from('#heading', {
            scrollTrigger: {
                trigger: '#chip',
                start: '80% bottom',
            },
            opacity: 0,
            scale: 1.2,
            y: 100,
            duration: 2,
            ease: 'power2.inOut',
        });

        gsap.to('.fadeIn', {
            y: 0,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 1.5,
            scrollTrigger: {
                trigger: '.fadeIn',
                toggleActions: 'restart reverse restart reverse',
                start: '20% bottom',
            },
        });
    }, []);

    return (
        <section className='sm:py-32 py-20 sm:px-10 px-5'>
            <div className='screen-max-width'>
                <div className='flex justify-center items-center w-full my-20' id='chip'>
                    <img src={chipImg} alt="chip" width={180} height={180} />
                </div>

                <div className='flex flex-col items-center'>
                    <h2 id='heading' className='text-4xl md:text-7xl font-semibold text-center'>
                        A17 Pro chip.
                        <br /> A monster win for gaming.
                    </h2>
                    <p id='heading' className='text-gray-400 font-semibold text-xl md:text-2xl py-10 text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptatem ipsam quasi dolorem labore nisi dolore provident vel nostrum perspiciatis.
                    </p>
                </div>

                {/* Image and Video Section */}
                <div className='mt-10 md:mt-20 mb-14'>
                    <div className='relative h-full flex justify-center items-center'>
                        <div className='overflow-hidden'>
                            <img src={frameImg} alt="frame" className='bg-transparent relative z-10' />
                        </div>
                        <div className='absolute w-[95%] h-[90%] rounded-[56px] overflow-hidden'>
                        <video 
    className='pointer-events-none' 
    playsInline 
    muted 
    autoPlay 
    loop 
    ref={videoRef}> 
    <source src={frameVideo} type='video/mp4' />  {/* Use .mp4 for better browser compatibility */}
</video>
                        </div>
                    </div>
                    <p className='text-gray-100 font-semibold text-center mt-3'>Honkai: Star Rail</p>
                </div>

                {/* Left-aligned Content Section */}
                <div className='w-full flex flex-col md:flex-row gap-10 mt-10 md:mt-16'>

                    {/* Left Side - Paragraphs */}
                    <div className='flex-1 flex flex-col gap-6'>
                        <p className='text-gray-400 max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px] fadeIn'>
                            iPhone 15 Pro is{' '}
                            <span className='text-white'>the first iPhone to feature an aerospace-grade titanium design</span>,
                            using the same alloy that spacecrafts use for missions to Mars.
                        </p>
                        <p className='text-gray-400 max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px] fadeIn'>
                            Titanium has one of the best strength-to-weight ratios of any metal, making these our{' '}
                            <span className='text-white'>lightest Pro</span>.
                        </p>
                    </div>

                    {/* Left Side - "New Pro-class GPU" */}
                    <div className='flex flex-col gap-2 opacity-0 translate-y-[100px] fadeIn'>
                        <p className='text-gray-400 text-xl font-normal md:font-semibold'>New</p>
                        <p className='text-white text-3xl md:text-5xl font-normal md:font-semibold'>Pro-class GPU</p>
                        <p className='text-gray-400 text-xl font-normal md:font-semibold'>with 6 cores</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Chip;
