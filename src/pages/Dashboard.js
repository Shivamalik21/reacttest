import React from 'react'
import  {NavLink} from 'react-router-dom'


import Linechart from '../Components/chart/Linechart'
import BasicPie from '../Components/chart/Piechart'
import { useSelector} from "react-redux";

const Dashboard = () => {
  const counter = useSelector((state) => state.dataSlice);
  return (
    <div  >
        <div className='flex'>
            <div className='dashborad'>
                <p><span>USERS</span><span style={{color:"green"}}>20%</span></p>
                <p className="">{counter.user[0].user.length}</p>
                <p> <NavLink to="/user"><span className='underline'>See all users</span></NavLink><span class="material-icons " style={{color:"red"}}>person
</span></p>
            </div>
            <div className='dashborad'>
                <p><span>ORDERS</span><span style={{color:"green"}}>20%</span></p>
                <p className="">100</p>
                <p>
                  <span className='underline'>View all Orders</span><span class="material-icons" style={{color:"blue"}}>shopping_cart
</span></p>
            </div>
            <div className='dashborad'>
                <p><span>EARNINGS</span><span style={{color:"green"}}>20%</span></p>
                <p className="">100</p>
                <p><span className='underline'>View net earnings</span><span class="material-icons" style={{color:"green"}}>attach_money
</span></p>
            </div>
            <div className='dashborad'>
                <p><span>BALANCE</span><span style={{color:"green"}}>20%</span></p>
                <p className="">100</p>
                <p><span className='underline'>See details</span><span class="material-icons" style={{color:"orange"}}>account_balance_wallet
</span></p>
            </div>
        </div>
        <div className='flex items-center justify-between h-96 border ml-8'>
            <div id="paichart " >
          <BasicPie/>
            </div>
            <div id="graph" >
            <Linechart/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard