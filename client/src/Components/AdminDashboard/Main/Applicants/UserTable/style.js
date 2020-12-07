import { makeStyles, useTheme } from "@material-ui/core/styles";

export const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

export const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
