import * as React from 'react';
import { DataGrid, renderActionsCell} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useSelector, useDispatch} from "react-redux";
import { alignProperty } from '@mui/material/styles/cssUtils';
import { NavLink } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'Name', headerName: 'Name', width: 150 },
  { field: 'Email', headerName: 'Email', width: 160 },
  {
    field: 'Age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    align:"center",
    headerAlign: 'center',
  },
  {
    field: 'action',
    headerName: 'Action',
 width:250,
    hover:"none",
     align:"center",
    headerAlign: 'center',
    zindex:"1",
   renderCell:()=>{
    return(
      <div style={{width:"10vw", marginLeft:"3vw"}}>
<NavLink to="/details"><button style={{border:"1px dotted blue ",marginRight:"2vw", height:"3.5vw", width:"4vw"}} >
  View
</button></NavLink>
<button style={{border:"1px dotted red", height:"3.5vw", width:"6vw"}}>
  Remove
</button>
</div>
    )
   }
   
  }
  
];




export default function DataTable() {
 
  const counter = useSelector((state) => state.dataSlice);
const dispatch = useDispatch();
 const rows=counter.user[0].user.map((e,index)=>{
    return{ id:index , Name: e.name, Email: e.email, Age: e.age, 
     
      } 
      
    });
   
  
  return (
    <Box sx={{ height: 400, width: '70vw'   }}>
      <DataGrid
       
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        
        
      />
    </Box>
  );
}