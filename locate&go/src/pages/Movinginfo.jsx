import React from 'react'

const Movinginfo = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('Joan');
    const [movingFrom, setMovingFrom] = useState('');
    const [movingTo, setMovingTo] = useState('');
    const [goodsDescription, setGoodsDescription] = useState('');
  
    const handleEdit = () => {
      setIsEditing(!isEditing);
    };
  return (
    <div>
        <div className="flex flex-col items-center justify-center mt-12">
      <h1 className="text-2xl mb-4">Hello, {name}. Below is your moving information...</h1>
      {isEditing ? (
        <div>
          <label className="block">Moving From: </label>
          <input className="border p-2 my-2 rounded" value={movingFrom} onChange={(e) => setMovingFrom(e.target.value)} />
          <label className="block">Moving To: </label>
          <input className="border p-2 my-2 rounded" value={movingTo} onChange={(e) => setMovingTo(e.target.value)} />
          <label className="block">Description of the Goods: </label>
          <input className="border p-2 my-2 rounded" value={goodsDescription} onChange={(e) => setGoodsDescription(e.target.value)} />
        </div>
      ) : (
        <div>
          <p className="my-2">Moving From: {movingFrom}</p>
          <p className="my-2">Moving To: {movingTo}</p>
          <p className="my-2">Description of the Goods: {goodsDescription}</p>
        </div>
      )}
      <button className="bg-green-500 text-white px-4 py-2 rounded mt-4 cursor-pointer" onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </div>
    </div>
  )
}

export default Movinginfo