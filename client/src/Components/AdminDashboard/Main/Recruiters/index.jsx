import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchRecruiters from "./Search";
import RecTable from "./RecTable";
import RecFilter from "./RecFilter";
import Data_1 from "../Applicants/Data_1";
import { Grid, Paper } from "@material-ui/core";

//TODO: Tabla de reclutadores
//TODO: Acceder a detalles del perfil del recruiter
//TODO: Grafico de reclutadores registrados en el ultimo mes y el total
//TODO: N° de cierre de cuetnas
//TODO: Promover reclutadore a applicants. Eliminar recruiters
//TODO: Poder filtrar por pais, empresa, Status(activo/inactivo)
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

const Recruiters = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <RecTable />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <RecFilter />
          </Paper>
          <Paper className={classes.paper}>
            <SearchRecruiters />
          </Paper>
          <Paper className={classes.paper}>
            <Data_1 />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Recruiters;
