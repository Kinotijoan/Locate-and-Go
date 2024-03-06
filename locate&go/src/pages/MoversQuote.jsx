import React from 'react'
import { useNavigate } from 'react-router-dom';
import myBackgroundImage from '../assets/img7.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MoversQuote = () => {
    const navigate = useNavigate();

    const onSubmit = (data) => {
      console.log(data);
      navigate('/Homepage');
    };

  return (
    <div>
        <Header/>
        <div>
            <div className='bg-cover bg-center bg-no-repeat h- w- flex justify-center' style={{backgroundImage: `url(${myBackgroundImage})`}}>
                <form action="" onSubmit={onSubmit}>
                    <div className='flex flex-col items-center text-white p-10 pt-2 bg-black bg-opacity-55 m-32 h-2/3'>
                        <h1 className='font-bold p-5 text-center pl-10 '>MY MOVING QUOTE</h1>
                        <div className='flex flex-row items-start'>
                                <label className="font-bold"htmlFor="From">Moving from :</label>
                                <input type="text" className='p-2 ml-5 m-2 w-[18.75rem] rounded bg-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent'/>
                        </div>
                        <div className='flex flex-row items-start'>
                                <label className="font-bold"htmlFor="TO">Moving to :</label>
                                <input type="text" className='p-2  ml-10 m-2 w-[18.75rem] rounded bg-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent'/>
                        </div>
                        <div className='flex flex-col items-start'>
                            <label className="font-bold" htmlFor="Description">Additional information :</label>
                            <textarea
                                autoFocus
                                className='m-5 ml-28 w-[18.75rem] rounded bg-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent h-44'
                            />
                        </div>
                      <div>
                            <button className='p-2 m-2 w-[18.75rem] rounded bg-amber-300 font-bold'>SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default MoversQuote