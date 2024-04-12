import React from 'react'
import { NavLink } from 'react-router-dom'

import DataTable from '../Components/Table';


 
const User = () => {
  return (
    <div className='user'>
    <div className='flex justify-between mb-8'>
    <h1 className='text-2xl font-bold'> USER</h1>
    <NavLink to="/newuser"><h1 className='text-2xl text-green-800 font-bold border border-green-500 w-32 h-12 p-1'>ADD NEW</h1></NavLink>
    </div>
    <div className='table'>
    <DataTable/>
    </div>
    </div>
  )
}

export default User