import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: "auto",
  },
});

function createData(total, actives, inactives) {
  return { total, actives, inactives };
}

const rows = [createData(20, 17, 3)];

export default function Data_1() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Total</TableCell>
            <TableCell align="center">Actives</TableCell>
            <TableCell align="center">Inacatives</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell align="center" component="th" scope="row">
                {row.total}
              </TableCell>
              <TableCell align="center" style={{ color: "green" }}>
                {row.actives}
              </TableCell>
              <TableCell align="center" style={{ color: "red" }}>
                {row.inactives}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
