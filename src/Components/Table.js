import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useSelector, useDispatch} from "react-redux";
import { setremove,setdata} from '../slice/dataSlice';
import { NavLink } from 'react-router-dom';






export default function DataTable() {
  const dispatch=useDispatch()

  const counter = useSelector((state) => state.dataSlice);

 const rows=counter.user[0].user.map((e,index)=>{
    return{ id:index , Name: e.Name, Email: e.Email, Age: e.Age, 
     
      } 
      
    });
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
       renderCell:((param)=>{
        
         
        return(
          <div style={{width:"10vw", marginLeft:"3vw"}}>
    <NavLink to="/details"><button style={{border:"1px dotted blue ",marginRight:"2vw", height:"3.5vw", width:"4vw"}} onClick={(()=>{
      dispatch(setdata(rows.filter((row) => row.id=== param.row.id)));
    })} >
      View
    </button></NavLink>
    <button style={{border:"1px dotted red", height:"3.5vw", width:"6vw"}} onClick={((e)=>{
        e.stopPropagation(); // don't select this row after clicking
       dispatch(setremove(rows.filter((row) => row.id !== param.row.id)));
      
      
    })}>
     Remove
    </button>
    </div>
        )
       })
       
      }
      
    ];
  
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