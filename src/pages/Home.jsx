import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Charachters from '../components/Charachters'
import axios from 'axios'

const Home = () => {
    const [filterData, setFilterData] = useState();
    const handleFilter = (data) => {
        console.log(data)
        setFilterData(data)
    }
  return(
    <div>
        <div className='flex flex-1 justify-between mr-[2.5%] ml-[2.5%]'>
            <Sidebar handleFilter={handleFilter}/>
            <Charachters filterData={filterData}/>
        </div>
    </div>
  )
}

export default Home