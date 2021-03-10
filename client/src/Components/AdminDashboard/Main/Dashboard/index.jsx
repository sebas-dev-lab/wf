import React from "react";
import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import RegisterChart from "./RegisterChart";
import MoneyChart from "./MoneyChart";
import SelectChart from "./ChartSelect";
import MessageAlert from "./MessageAlert";

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

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <RegisterChart />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <SelectChart />
          </Paper>
          <Paper className={classes.paper}>
            <MoneyChart />
          </Paper>
          <Paper className={classes.paper}>
            <Button>
              <MessageAlert />
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Dashboard;
