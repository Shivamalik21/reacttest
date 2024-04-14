import React, {  useRef, useState } from 'react'
import { useDispatch} from "react-redux";
import { setuser } from '../slice/dataSlice';


const Newuser = () => {
  
   const[img,setimg]=useState()
  const dispatch=useDispatch()
  const username=useRef()
  const age=useRef()
  const email=useRef()
  console.log(img)
  return (
    <div className='p-8'>
   <div style={{boxShadow:"1px 3px 4px grey", height:"5vw",paddingTop:"2.5vw", paddingLeft:"1vw" }} >
    <h1 style={{fontSize:"25px", fontWeight:"bold"}}>Add New User</h1>
    
   </div>
   <div className='flex justify-around mt-20  ' style={{width:"80vw", height:"23vw", alignItems:"center", boxShadow:"-3px 2px 4px grey", borderTop:"2px solid lightGrey"}}>
   <img style={{border:"1px solid green ",width:"8vw", height:"8vw", borderRadius:"100%", }} src={img? URL.createObjectURL(img):"data:image/jpeg;base64,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"}alt="img"/>
   <div style={{display:"flex",flexDirection:"column", gap:"2vw"}} >
    <div className='flex'><p>image:</p><label for="im"><span class="material-icons">
upload_file
</span></label>
</div>
<input id="im" type='file' style={{display:"none"}} onChange={((e)=>{
  setimg(e.target.files[0])
})}></input>
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
   dispatch(setuser({name:username.current.value,
    email:email.current.value,
    age:age.current.value,
   
  }))
  alert("data Added to user")
 }
})}>Submit</button>
   </div>
   </div>
    </div>
  )
}

export default Newuser