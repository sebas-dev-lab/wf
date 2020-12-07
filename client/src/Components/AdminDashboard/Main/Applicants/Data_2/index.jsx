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

function createData(work_Active, work_Inactive) {
  return { work_Active, work_Inactive };
}

const rows = [createData(14, 6)];

export default function Data_2() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Work Active</TableCell>
            <TableCell align="center">Work Inactive</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell
                style={{ color: "green" }}
                align="center"
                component="th"
                scope="row"
              >
                {row.work_Active}
              </TableCell>
              <TableCell align="center" style={{ color: "red" }}>
                {row.work_Inactive}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
