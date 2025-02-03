import React from 'react'
import { footerLinks } from '../constants/constants'

function Footer() {
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className='screen-max-width'>
            <div>
                <p className='font-semibold text-gray-400 '>More ways to shop: {' '}
                    <span className='cursor-pointer underline text-blue-600'>
                        Find an apple Store {' '}
                    </span>
                    or {' '}
                    <span className='cursor-pointer underline text-blue-600'>
                        other retailer 
                    </span>
                    {' '} near you.
                </p>
                <p className='font-semibold text-gray-400 '>Or call 123-456-789 {' '} </p>
            </div>

            <div className='bg-neutral-700 my-5 h-[1px]'></div>

            <div className='flex md:flex-row flex-col md:items-center justify-between'>
                <p className='font-semibold text-gray-400 text-xs'>Copyrright @ 2024 Apple Inc. All rights reserved.</p>
                <div className='flex'></div>
                {footerLinks.map((link, i)=>(
                    <p className='font-semibold text-gray-400 text-xs'>{link}{' '}{
                        i !== footerLinks.length -1 &&(
                            <span className='mx-2'>|</span>
                        )
                    }</p>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer