import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import 'material-icons/iconfont/material-icons.css';


const Home = () => {
    const[clicked,setclicked]=useState("false")
    const bgColOR=clicked==='false'? 'white' : 'black';
const textcolor=bgColOR==='white'?'black':'white'
  return (
    <div style={{backgroundColor:bgColOR,  color:textcolor}}>
    <div className='border-solid border border-slate-300 flex justify-between h-16 '>
        <div className='flex'>
        <div className='border-solid border-r-2 border-slate-300 w-40 ml-3.5  overflow-hidden'><img style={{borderRadius:"100%"}} src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg" alt="img" className='w-16 ml-8 ' id="App-logo"></img></div> 
       
       <div className='pt-4'><input className='border-solid border-2 border-slate-300 h-8 ml-4 p-4 rounded-3xl'placeholder='search'></input></div> 
        </div>
        <div >
      
            <ul className='flex gap-6 mr-8 pt-4'>
                <li className='flex align-middle'><span class="material-icons">
language
</span>English</li>
                <li><span class="material-icons"  onClick={(()=>{
           if(clicked==="true"){
            setclicked("false")
           }else{
            setclicked("true")
           }
                })}>
dark_mode
</span></li>
                <li><span class="material-icons">
notifications
</span></li>
                <li><span class="material-icons">
message
</span></li>
                <li><span class="material-icons">
account_circle
</span></li>
                 </ul>
        </div>
    </div>
    
    <div className='flex'>
    <div id="menu" className='border-solid border-r-2 border-slate-300 h-screen w-44 pl-4 pt-5 '>
    <p>MAIN</p>
    <ul><NavLink to="/">
        <li> <span class="material-icons">
dashboard
</span>Dashboard</li></NavLink>
</ul>
    <p>LIST</p>
    <ul >
        <NavLink to="/user">
        <li> <span class="material-icons">
group
</span>Users</li></NavLink>
       <li> <span class="material-icons">
store
</span>Products</li>
       <li> <span class="material-icons">
credit_card
</span>Order</li>
       <li> <span class="material-icons">
local_shipping
</span>Delivery </li>
      
    </ul>
    <p>USEFUL</p>
    <ul>
        <li> <span class="material-icons">
query_stats
</span>
            Stats
        </li>
        <li> <span class="material-icons">
notifications
</span>
          Notification
        </li>
    </ul>
    <p>SERVICE</p>
     <ul>
        <li> <span class="material-icons">
monitor_heart
</span>System Health</li>
        <li> <span class="material-icons">
psychology
</span>Logs</li>
        <li><span class="material-icons">
settings
</span>Settings</li>
     </ul>
     <p>USER</p>
     <ul>
        <li> <span class="material-icons">
account_circle
</span>Profile</li>
        <li> <span class="material-icons">
logout
</span>Logout</li>
     </ul>
    </div>
    <div>
        <Outlet/>
        
    </div>
    </div>
</div>
  )
}

export default Home