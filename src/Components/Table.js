import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';

import { useSelector, useDispatch} from "react-redux";

const columns = [
  { field: 'id', headerName: 'ID', width: 160 },
  { field: 'Name', headerName: 'Name', width: 160 },
  { field: 'Email', headerName: 'Email', width: 160 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 160,
    colors:'red'
  },
  {
    field: 'action',
    headerName: 'Action',
    
    width: 200,
    rendercell:()=>{
      return(
        <div style={{width:"20ww ",height:"10vh", border:"1px solid green"}}>
      <button></button>
      </div>
      )
    }
   
  }
  
];




export default function DataTable() {
  const counter = useSelector((state) => state.dataSlice);
const dispatch = useDispatch();
 const rows=counter.user[0].user.map((e,index)=>{
    return{ id:index , Name: e.name, Email: e.email, age: e.age, 
    
    } 
      
    });
    console.log(counter)
    const useStyles =({
      table: {
        minWidth: 650,
        fontSize: 20,
        color: 'red',
      },})
  return (
    <div style={{ height: 400, width: '72vw', }}>
      <DataGrid
      classes={useStyles.table}
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
    </div>
  );
}