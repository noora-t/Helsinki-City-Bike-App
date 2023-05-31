import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TablePaginationActions } from './TablePaginationActions';
import { API_ENDPOINT } from '../api/index';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';

export const Journeys = () => {
  const [ rows, setRows ] = useState([]);
  const [ page, setPage ] = useState(0);
  const [ rowsPerPage, setRowsPerPage ] = useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  useEffect(() => {
    const fetchData = async () => {
      let min = 1;
      let max = 1000;
      while(max <= 3000000) {
        try {
          const res = await axios.get(`${API_ENDPOINT}/journeys?min=${min}&max=${max}`);
          setRows(rows.concat(res.data));      
        } catch(err) {
          console.log(err);
        }

        min += 1000;
        max += 1000;
      }
     }

     fetchData();

   }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Departure Station</TableCell>
              <TableCell align="left">Return Station</TableCell>
              <TableCell align="left">Distance (km)</TableCell>
              <TableCell align="left">Duration (min)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { rows.length > 1 &&  (rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.journey_id}>
                <TableCell style={{ width: 100 }} align="left">
                  {row.departure_station_name}
                </TableCell>
                <TableCell style={{ width: 100 }} align="left">
                  {row.return_station_name}
                </TableCell>
                <TableCell style={{ width: 100 }} align="left">
                  {Math.round(row.distance_meters / 1000 * 100) / 100}
                </TableCell>
                <TableCell style={{ width: 100 }} align="left">
                  {Math.round(row.duration_seconds / 60 * 100) / 100}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              { rows.length > 1 &&
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              /> }
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}