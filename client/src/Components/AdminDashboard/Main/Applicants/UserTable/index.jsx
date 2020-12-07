import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Modal } from "@material-ui/core";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import { TablePaginationActions, createData } from "./pagination";
import TablePagination from "@material-ui/core/TablePagination";
import TableFooter from "@material-ui/core/TableFooter";
import { data } from "./data";
import { useStyles } from "./style";
import UserDetail from "../UserDetail";

export default function DenseTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [modal, setModal] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const rows = data.map((item) => {
    return createData(
      item.id,
      item.name,
      item.lastName,
      item.workStatus,
      item.status
    );
  });
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const moldaChange = () => {
    setModal(!modal);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Work</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <>
              <TableRow key={row.id} onClick={moldaChange}>
                <TableCell align="center" component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="center">
                  {row.name + " " + row.lastName}
                </TableCell>
                <TableCell align="center">
                  {row.workStatus ? "Active" : "Inactive"}
                </TableCell>
                <TableCell align="center">
                  {row.status ? "Active" : "Inactive"}
                </TableCell>
                <TableCell align="center">
                  <Button>
                    <DeleteSweepIcon />
                  </Button>
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
        <UserDetail open={modal} moldaChange={moldaChange} />
        {emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
