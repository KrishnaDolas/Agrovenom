import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { EditIcon } from 'lucide-react';
import { useNavigate,useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';



function createData(userid, username, mobileno, userrole, status) {
  return { userid, username, mobileno, userrole, status };
}

const rows = [
  createData('100000201', 'Admin', 9421013332, 'Admin', 'Active'),
  createData('100000201', 'Admin', 9421013332, 'Admin', 'Active'),
  createData('100000201', 'Admin', 9421013332, 'Admin', 'Active'),
  createData('100000201', 'Admin', 9421013332, 'Admin', 'Active'),
  createData('100000201', 'Admin', 9421013332, 'Admin', 'Active'),
  createData('100000201', 'Admin', 9421013332, 'Admin', 'Active'),
];

export default function Userstable() {
  // const navigate = useNavigate();
  //   const HandleClick = () => {
  //     navigate('/Usersdetails');
  //   };
  
    const [data, setData] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/UserDetails/`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const result = await response.json();
            console.log('Result:', result);
            if (result.status === 'success') {
              setData(result.data);
            } else {
              console.error('API request failed:', result.message);
            }
          } else {
            console.error('Unexpected content type:', contentType);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
  
    const handleEditClick = async (androidid,mobileno ) => {
      try {
        const response = await fetch(`/api/GetUserDetails/${mobileno}/${androidid}`);
        const result = await response.json();
        if (result.status === 'success') {
          // Navigate to Usersdetails component with the fetched data
          navigate(`/usersdetails/${mobileno}/${androidid}`, { state: { formData: result.data } });
        } else {
          console.error('API request failed:', result.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">Mobile No</TableCell>
            <TableCell align="right">User Role</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.userid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.userid}
              </TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.mobileno}</TableCell>
              <TableCell align="right">{row.userrole}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right"><button onClick={() => handleEditClick(row.androidid, row.mobileno)}><EditIcon/></button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}