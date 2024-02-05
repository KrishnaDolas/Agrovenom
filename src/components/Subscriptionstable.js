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


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1', 'Monthly', 30, 149, 'btn'),
  createData('2', 'Yearly Single User', 365, 999, 'btn'),
  createData('3', 'Yearly Multi User', 365, 1799, 'btn'),
];

export default function Subscriptionstable() {
  const navigate = useNavigate();
    const HandleClick = () => {
      // const navigate = useNavigate();
      navigate('/Subscriptionsdetails');
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
              <TableCell align="right"><button onClick={() => HandleClick()}><Edit2Icon/></button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}