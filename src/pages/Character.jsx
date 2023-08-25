import React from 'react'
import { useLocation } from 'react-router-dom'

const Character = ({element}) => {
    const location = useLocation();
    const data = location.state.element
    //console.log(data)
  return (
    <div>
        <h2 className='text-center font-bold bg-slate-200 p-8'>Character Details</h2>
        <div className='main'>
        <h2 className='text-center py-5 text-2xl font-mono font-bold'>{data.name}</h2>
        <img src={data.image} alt='Character-Image' className='ml-[40%] border rounded-lg'/>
        <h3 className='text-center p-2 text-xl'><span className='font-bold'>Status :</span> {data.status}</h3>
        <h3 className='text-center p-2 text-xl'><span className='font-bold'>Location :</span>{data.location.name}</h3>
        <h3 className='text-center p-2 text-xl'><span className='font-bold'>Species :</span>{data.species}</h3>
        <h3 className='text-center p-2 text-xl'><span className='font-bold'>Gender :</span>{data.gender}</h3>    
        <h3 className='text-center p-2 text-xl'><span className='font-bold'>Origin :</span>{data.origin.name}</h3>    
        </div>
    </div>
  )
}

export default Character