import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { EditIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
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
  const navigate = useNavigate();
    const HandleClick = () => {
      navigate('/Farmersdetails');
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right"><button onClick={() => HandleClick()}><EditIcon/></button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}