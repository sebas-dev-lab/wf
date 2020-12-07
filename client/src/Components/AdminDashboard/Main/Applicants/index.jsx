import React from "react";
import ApplicantsTable from "./UserTable";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import UserFilter from "./UsersFilter";
import SearchApplicants from "./Search";
import Data_1 from "./Data_1";
import Data_2 from "./Data_2";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
}));
const Applicants = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <ApplicantsTable />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <UserFilter />
          </Paper>
          <Paper className={classes.paper}>
            <SearchApplicants />
          </Paper>
          <Paper className={classes.paper}>
            <Data_1 />
          </Paper>
          <Paper className={classes.paper}>
            <Data_2 />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Applicants;
