import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
   
    <PieChart 
    
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'TodaySale',color: 'orange' },
            { id: 1, value: 15, label: 'All Product' },
           
          ],
          
        },
      ]}
      width={400}
      height={250}
    />
   
  );
}
