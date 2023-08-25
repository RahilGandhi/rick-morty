import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Character from './Character';

const Charachters = ({filters}) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState();
    useEffect(() => {   
        axios.get('https://rickandmortyapi.com/api/character')
             .then(function (response) {
             setData(response.data.results)
             setLoading(false)
             console.log(filters);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])
    
  return loading ? <h2 className='text-center'>Loading..</h2> : (
    <div className='bg-gray-100 w-[80%] p-10'>
        <h3 className='text-center text-xl font-semibold text-slate-800'>Characters</h3>
        <div className='mt-10 flex flex-wrap justify-around'>
            {data.map((element) => (
                <Character element={element} key={element.id}/>
            ))} 
        </div>
    </div>
  )
}

export default Charachters
