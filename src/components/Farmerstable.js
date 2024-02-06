import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router-dom';

function BasicTable() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/BusinessDetails/'); // featching the data from server
        const result = await response.json();
        console.log(result); // Add this line to check the structure of the result
        if (result.status === 'success') {
          setData(result.data); // Update to use result.data
        } else {
          console.error('API request failed:', result.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = async (businessId) => {
    try {
      const response = await fetch(`/api/BusinessDetails/${businessId}/`);
      const result = await response.json();
      if (result.status === 'success') {
        // Navigate to Farmersdetails component with the fetched data
        navigate(`/Farmersdetails/${businessId}`, { state: { formData: result.data } });
      } else {
        console.error('API request failed:', result.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePeopleClick = (businessId) => {
    navigate(`/Users/${businessId}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Business ID</TableCell>
            <TableCell align="right">Business Name</TableCell>
            <TableCell align="right">Contact No</TableCell>
            <TableCell align="right">Multiuser</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.businessid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.businessid}
              </TableCell>
              <TableCell align="right">{row.businessname}</TableCell>
              <TableCell align="right">{row.contactno}</TableCell>
              <TableCell align="right">{row.multiuser}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">
                <button onClick={() => handleEditClick(row.businessid)}>
                  <EditIcon />
                </button>
                &nbsp;
                <button onClick={() => handlePeopleClick(row.businessid)}>
                  <PeopleIcon />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
