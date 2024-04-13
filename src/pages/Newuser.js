import React, {  useRef } from 'react'
import { useSelector} from "react-redux";


const Newuser = () => {
  const username=useRef()
  const age=useRef()
  const email=useRef()
  
  return (
    <div className='p-8'>
   <div style={{boxShadow:"1px 3px 4px grey", height:"5vw",paddingTop:"2.5vw", paddingLeft:"1vw" }} >
    <h1 style={{fontSize:"25px", fontWeight:"bold"}}>Add New User</h1>
    
   </div>
   <div className='flex justify-around mt-20  ' style={{width:"80vw", height:"23vw", alignItems:"center", boxShadow:"-3px 2px 4px grey", borderTop:"2px solid lightGrey"}}>
   <img style={{border:"1px solid green ",width:"8vw", height:"8vw", borderRadius:"100%", padding:"2vw"}} src="" alt="img"/>
   <div style={{display:"flex",flexDirection:"column", gap:"2vw"}} >
    <div className='flex'><p>image:</p><span class="material-icons">
upload_file
</span></div>
<div>
<label  for="name">Name:- </label>
<input ref={username} id="name" className='border-b' type='text'></input>
</div>
<div>
<label for="Email">Email:- </label>
<input ref={email} id="Email" className='border-b' type='text'></input>
</div>
<div>
<label for="Age">Age:- </label>
<input ref={age} id="Age" className='border-b' type='number'></input>

</div>
<button style={{border:"1px solid grey", height:"3vw", backgroundColor:"skyblue", color:"green"}} onClick={(()=>{
 if(username.current.value===""||age.current.value===""||email.current.value===""){
  alert("fill right input")
 }else{
  console.log(username.current.value)
 }
})}>Submit</button>
   </div>
   </div>
    </div>
  )
}

export default Newuser