import React from 'react'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import tiktok from '../assets/tiktok.png'

const Footer = () => {
  return (
    <div className='bg-amber-900 flex flex-col text-black min-w-full'>
        <div className='flex flex-row justify-evenly flex-grow p-5'>
            <div>
                <h3 className='p-3 font-bold'>About us</h3>
                <p>Locate and Go  is a privately held <br /> firm committed to excellence <br />through providing relocation ,<br /> transportation and  accelerate <br />delivery  services.</p>
            </div>
            <div className='flex flex-col'>
                <h3 className='p-3 font-bold'>Social Media</h3>
                <div className='flex flex-row' >
                    <img className='w-12 p-2' src={instagram} alt="Instagram" />
                    <img className='w-12 p-2' src={twitter} alt="Twitter" />
                    <img className='w-12 p-2' src={tiktok} alt="tiktok" />
                </div>
            </div>
            <div>
                <h3 className='p-3 font-bold'>Businness Hours</h3>
                <ul>
                    <li>Weekdays 8a.m - 8p.m</li>
                    <li>Saturdays 9a.m - 6pm</li>
                    <li>Sundays 11a.m - 4pm</li>
                </ul>
            </div>
        </div>
        <div>
            <p className='p-3 font-bold flex justify-center '>&copy; Locate and Go relocation Services</p>
        </div>
    </div>
  )
}

export default Footer
