import * as React from 'react';
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

// const RedirectButton = () => {
//   const navigate = useNavigate();
// }
//   const HandleClick = () => {
//     navigate('/Farmersdetails.js');
//   };

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1000118', 'pk', 6946494949, 0, 'Trial'),
  createData('1000118', 'pk', 6946494949, 0, 'Trial'),
  createData('1000118', 'pk', 6946494949, 0, 'Trial'),
  createData('1000118', 'pk', 6946494949, 0, 'Trial'),
  createData('1000118', 'pk', 6946494949, 0, 'Trial'),
  createData('1000118', 'pk', 6946494949, 0, 'Trial'),
];

export default function BasicTable() {
    // const navigate = useNavigate();
    const navigate = useNavigate();

    const HandleClick = () => {
      // const navigate = useNavigate();
      navigate('/Farmersdetails');
    };

    const send = useNavigate();

    const HandleClick2 = () => {
      // const navigate = useNavigate();
      navigate('/Users');
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
              <TableCell align="right"><button onClick={() => HandleClick()}><EditIcon/></button>&nbsp;<button onClick={() => HandleClick2()}><PeopleIcon/></button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
