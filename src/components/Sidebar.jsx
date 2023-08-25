import React, { useState } from 'react'
import axios from 'axios'
const Sidebar = () => {

    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const [gender, setGender] = useState('')
    const [data, setData] = useState('')


    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleStatusChange = (event) => {
        setStatus(event.target.value)
    }
    const handleGenderChange = (event) => {
        setGender(event.target.value)
    }
     const handleSearch = () => {
        console.log(name, status, gender)
        axios.get(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&gender=${gender}`)
             .then(function (response) {
             setData(response.data.results)
             console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

  return (
    <div className='bg-gray-200 w-[20%] p-10'>
        <h3 className='text-center text-xl font-semibold text-slate-800' >Filters</h3>
        <div className='p-1 mt-10'>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
            <input type="text" id="first_name" value={name} onChange={handleNameChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Rick" required/>
        </div>
        <label for="status" class="block mb-2 text-sm font-medium text-gray-900 ml-1 mt-3">Status</label>
            <select id="status" value={status} onChange={handleStatusChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="Unknown">Unknown</option>
            </select>
            <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 ml-1 mt-3">Gender</label>
            <select id="gender" value={gender} onChange={handleGenderChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>
            </select>
            <button type="button" onClick={handleSearch} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 w-full mt-5 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Search</button>
    </div>
  )
}

export default Sidebar