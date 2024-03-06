// import React from 'react'
import MyBackground from '../assets/rel91.jpg' // import the image
import image from '../assets/company.jpeg'
import Header from '../components/Header'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
        <Header/>
        <main>
            <div className='' style={{backgroundImage : `url(${MyBackground})`}}>
                <div className='flex flex-row justify-center pt-4'>
                  <input type="text" className='p-2 w-[18.75rem] rounded-l-lg bg-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent' />
                  <button className='text-black font-bold bg-gray-600 rounded-r-lg w-16 '>Search </button>
                </div>
                <div className='flex flex-row flex-wrap justify-center items-start'>
                  <div className="company-card bg-white shadow-lg rounded-lg px-8 py-2 w-85 m-4">
                    <h2 className='text-3xl font-bold text-gray-800 mb-2 mt-1'>Joham movers</h2>
                    <img src={image} alt="company image" className='w-48 h-48 object-cover rounded mb-6' />
                    <div>
                        <div className='flex items-center mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <p className='text-gray-600'>+254712345678</p>
                        </div>
                        <div className='flex items-center mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <p className='text-gray-600'>johammovers@gmail.com</p>
                        </div>
                    </div>
                    <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Reviews:</h3>
                    <ul className='list-disc list-inside text-gray-600'>
                        <li>"Good customer service "</li>
                        <li>"Excellent communication and tracking <br />throughout the transportation"</li>
                    </ul>
                  </div>
                  <div className="company-card bg-white shadow-lg rounded-lg px-8 py-2 w-85 m-4">
                    <h2 className='text-3xl font-bold text-gray-800 mb-2 mt-1'>Joham movers</h2>
                    <img src={image} alt="company image" className='w-48 h-48 object-cover rounded mb-6' />
                    <div>
                        <div className='flex items-center mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <p className='text-gray-600'>+254712345678</p>
                        </div>
                        <div className='flex items-center mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <p className='text-gray-600'>johammovers@gmail.com</p>
                        </div>
                    </div>
                    <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Reviews:</h3>
                    <ul className='list-disc list-inside text-gray-600'>
                        <li>"Good customer service "</li>
                        <li>"Excellent communication and tracking <br />throughout the transportation"</li>
                    </ul>
                  </div>
                  <div className="company-card bg-white shadow-lg rounded-lg px-8 py-2 w-85 m-4">
                    <h2 className='text-3xl font-bold text-gray-800 mb-2 mt-1'>Joham movers</h2>
                    <img src={image} alt="company image" className='w-48 h-48 object-cover rounded mb-6' />
                    <div>
                        <div className='flex items-center mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <p className='text-gray-600'>+254712345678</p>
                        </div>
                        <div className='flex items-center mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <p className='text-gray-600'>johammovers@gmail.com</p>
                        </div>
                    </div>
                    <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Reviews:</h3>
                    <ul className='list-disc list-inside text-gray-600'>
                        <li>"Good customer service "</li>
                        <li>"Excellent communication and tracking <br />throughout the transportation"</li>
                    </ul>
                  </div>
                  <div className="company-card bg-white shadow-lg rounded-lg px-8 py-2 w-85 m-4 ">
                    <h2 className='text-3xl font-bold text-gray-800 mb-2 mt-1'>Joham movers</h2>
                    <img src={image} alt="company image" className='w-48 h-48 object-cover rounded mb-6' />
                    <div>
                        <div className='flex items-center mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <p className='text-gray-600'>+254712345678</p>
                        </div>
                        <div className='flex items-center mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <p className='text-gray-600'>johammovers@gmail.com</p>
                        </div>
                    </div>
                    <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Reviews:</h3>
                    <ul className='list-disc list-inside text-gray-600'>
                        <li>"Good customer service "</li>
                        <li>"Excellent communication and tracking <br />throughout the transportation"</li>
                    </ul>
                  </div>
                  <div className="company-card bg-white shadow-lg rounded-lg px-8 py-2 w-85 m-4 ">
                    <h2 className='text-3xl font-bold text-gray-800 mb-2 mt-1'>Joham movers</h2>
                    <img src={image} alt="company image" className='w-48 h-48 object-cover rounded mb-6' />
                    <div>
                        <div className='flex items-center mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <p className='text-gray-600'>+254712345678</p>
                        </div>
                        <div className='flex items-center mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <p className='text-gray-600'>johammovers@gmail.com</p>
                        </div>
                    </div>
                    <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Reviews:</h3>
                    <ul className='list-disc list-inside text-gray-600'>
                        <li>"Good customer service "</li>
                        <li>"Excellent communication and tracking <br />throughout the transportation"</li>
                    </ul>
                  </div>
                  <div className="company-card bg-white shadow-lg rounded-lg px-8 py-2 w-85 m-4 ">
                    <h2 className='text-3xl font-bold text-gray-800 mb-2 mt-1'>Joham movers</h2>
                    <img src={image} alt="company image" className='w-48 h-48 object-cover rounded mb-6' />
                    <div>
                        <div className='flex items-center mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <p className='text-gray-600'>+254712345678</p>
                        </div>
                        <div className='flex items-center mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <p className='text-gray-600'>johammovers@gmail.com</p>
                        </div>
                    </div>
                    <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Reviews:</h3>
                    <ul className='list-disc list-inside text-gray-600'>
                        <li>"Good customer service "</li>
                        <li>"Excellent communication and tracking <br />throughout the transportation"</li>
                    </ul>
                  </div>
                  
                </div>
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default HomePage;
