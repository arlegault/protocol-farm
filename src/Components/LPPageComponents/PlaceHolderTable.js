import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  pools: number,
  shares: number,
  sharevalue: number,
  profits: number,
) {
  return { name, pools, shares, sharevalue, profits };
}

const rows = [
  createData('0xfbdca68601f835b27790d98bbb8ec7f05fdeaa9b', 7, 6.0, 151229950, 4.0),
  createData('0xfbdca68601f835b27790d98bbb8ec7f05fdeaa9b', 10, 9.0, 75000, 4.3),
  createData('0xfbdca68601f835b27790d98bbb8ec7f05fdeaa9b', 5, 16.0, 22000, 6.0),
  createData('0xfbdca68601f835b27790d98bbb8ec7f05fdeaa9b', 3, 3.7, 5682434, 4.3),
  createData('0xfbdca68601f835b27790d98bbb8ec7f05fdeaa9b', 2, 16.0, 23423, 3.9),
];

export default function PlaceHolderTable() {
  return (
    <TableContainer sx={{ minWidth: 650, maxWidth: 3/4 }} component={Paper}>
      <Table  aria-label="simple table">
        <TableHead style={{backgroundColor:'#00FF66', color: 'black',}}>
          <TableRow>
            <TableCell>Liquidity Provider</TableCell>
            <TableCell align="right">Count of Pools</TableCell>
            <TableCell align="right">Shares</TableCell>
            <TableCell align="right">Share Value</TableCell>
            <TableCell align="right"> Est Profits</TableCell>
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
              <TableCell align="right">{row.pools}</TableCell>
              <TableCell align="right">{row.shares}</TableCell>
              <TableCell align="right">{row.sharevalue}</TableCell>
              <TableCell align="right">{row.profits}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}