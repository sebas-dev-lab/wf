import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Grid, Paper, TextField } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

const user = {
  name: "seba",
  lastName: "lescano",
  dni: 1223455,
  email: "seba@gmai.com",
  city: "san martin",
  profession: "technician",
  status: true,
  workFinder: true,
};

export default function UserDetail({ open, moldaChange }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={moldaChange}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Grid lg="8" container className={classes.paper} spacing={2}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Avatar
                  src="https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg"
                  className={classes.large}
                />
                <TextField
                  disabled
                  id="standard-disabled"
                  label="Name"
                  value={user.name + " " + user.lastName}
                  style={{ margin: 8, width: "90%" }}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Paper>
              <Paper className={classes.paper}>
                <TextField
                  disabled
                  id="standard-disabled"
                  label="DNI"
                  value={user.dni}
                  style={{ margin: 8, width: "90%" }}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  disabled
                  id="standard-disabled"
                  label="City"
                  style={{ margin: 8, width: "90%" }}
                  value={user.city}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <TextField
                  disabled
                  id="standard-disabled"
                  label="Cuenta Google"
                  value={user.email}
                  style={{ margin: 8, width: "90%" }}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  disabled
                  id="standard-disabled"
                  label="Cuenta GitHub"
                  style={{ margin: 8, width: "90%" }}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Paper>
              <Paper className={classes.paper}>
                <TextField
                  disabled
                  id="standard-disabled"
                  label="In search of work"
                  value={user.workFinder && "Active"}
                  style={{
                    margin: 8,
                    width: "90%",
                    colro: user.workFinder ? "green" : null,
                  }}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  disabled
                  id="standard-disabled"
                  label="User Status"
                  value={user.status}
                  style={{
                    margin: 8,
                    width: "90%",
                    color: user.status ? "green" : null,
                  }}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
}
