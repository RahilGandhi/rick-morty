import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Character = ({element}) => {
    useEffect(() => {
        //console.log(element)  
    }, [])

    const navigate = useNavigate();
     
    const knowMore = () => {
        navigate('/character', {state : {element}})
    }
  return (
    <div className='bg-gray-50 border rounded-2xl w-[45%] flex p-5 mb-5'>
        <img src={element.image} alt="character-image" className='rounded-full' height="50px" width="200px"/>
        <div className=''>
            <h3 className='text-xl font-bold px-3 py-3 text-slate-800'>{element.name}</h3>
            <h4 className='px-3 py-1 text-slate-700'>Status : {element.status}</h4>
            <h4 className='px-3 py-1 text-slate-700'>Gender : {element.gender}</h4>
            <h4 className='px-3 py-1 text-slate-700'>Species : {element.species}</h4>
            <button className='px-3 py-1 text-blue-500' onClick={() => {knowMore()}}>Know More</button>
        </div>
        
    </div>
  )
}

export default Character