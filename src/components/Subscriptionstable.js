import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Edit2Icon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1', 'Monthly', 30, 149, 'btn'),
  createData('2', 'Yearly Single User', 365, 999, 'btn'),
  createData('3', 'Yearly Multi User', 365, 1799, 'btn'),
];

export default function Subscriptionstable() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const Subscriptionid=useState({id:1});

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/SubscriptionsDetails/`,{
      
          method: 'GET' 
    
      }); // featching the data from server
      const result = await response.json();
     // Add this line to check the structure of the result
      if (result.status === 'success') {
        setData([...result.data]); // Update to use result.data
      } else {
        console.error('API request failed:', result.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  useEffect(() => {
    fetchData();
    
  }, []);

  const handleEditClick = async (id) => {
     navigate(`/Subscriptionsdetails/${id}`)
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Subscription ID</TableCell>
            <TableCell align="right">Subscription</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.subscriptionid}
              </TableCell>
              <TableCell align="right">{row.subscription}</TableCell>
              <TableCell align="right">{row.duration}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right"><button onClick={() => handleEditClick(row.subscriptionid)}><Edit2Icon/></button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}