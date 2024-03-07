import React from 'react'
import { useState } from 'react';
import myBackground from '../assets/img1Locate_and_Go.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Movinginfo = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('Joan');
    const [movingFrom, setMovingFrom] = useState('Nairobi, Kenya');
    const [movingTo, setMovingTo] = useState('Mombasa, Kenya');
    const [goodsDescription, setGoodsDescription] = useState('Fragile glass tables');
  
    const handleEdit = () => {
      setIsEditing(!isEditing);
    };
  return (
    <div>
        <Header />
        <div className="bg-cover bg-center bg-no-repeat h-dvh w-full flex justify-center" style={{backgroundImage : `url(${myBackground})`}}>
            <div className="flex flex-col items-center justify-center mt-12 bg-black bg-opacity-65 w-5/6 h-4/6">
            <h1 className="text-2xl font-bold mb-4 border-b-4 p-3 shadow-lg bg-transparent bg-opacity-20 rounded">Hello, {name}. <br />Below is your moving information...</h1>
                {isEditing ? (
                    <div>
                    <label className="block">Moving From: </label>
                    <input className="border rounded p-2 m-2 w-[18.75rem] bg-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent" value={movingFrom} onChange={(e) => setMovingFrom(e.target.value)} />
                    <label className="block">Moving To: </label>
                    <input className="border rounded p-2 m-2 w-[18.75rem] bg-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent" value={movingTo} onChange={(e) => setMovingTo(e.target.value)} />
                    <label className="block">Description of the Goods: </label>
                    <textarea autoFocus  className='m-2 w-[18.75rem] rounded bg-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent h-44 p-2' value={goodsDescription} onChange={(e) => setGoodsDescription(e.target.value)} />
                    </div>
                ) : (
                    <div className='flex flex-col'>
                        <label className=''>Moving From:</label>
                        <input className="border-b-8 border-opacity-55  border-amber-700 rounded p-2 m-2 w-[18.75rem]  rounded bg-black bg-opacity-65 border-double w" value={movingFrom} readOnly />

                        <label>Moving To:</label>
                        <input className="border-b-8 border-opacity-55  border-amber-700 rounded p-2 m-2 w-[18.75rem]  rounded bg-black bg-opacity-65 border-double w" value={movingTo} readOnly />

                        <label>Description of the Goods:</label>
                        <input className="border-b-8 border-opacity-55  border-amber-700 rounded p-2 m-2 w-[18.75rem]  rounded bg-black bg-opacity-65 border-double w" value={goodsDescription} readOnly />
                    </div>
                                    )}
                <button className="text-white px-4 py-2 rounded mt-4 cursor-pointer p-2 m-2 w-[18.75rem] rounded bg-amber-300 font-bold" onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Movinginfo