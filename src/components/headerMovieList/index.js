import React from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
<<<<<<< HEAD
const useStyles = makeStyles((theme) => ({
=======

const useStyles = makeStyles((theme) => ({ // hook function
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: theme.spacing(1.5),
  },
}));

<<<<<<< HEAD
const Header = (props) => {
  const navigate = useNavigate();

  const classes = useStyles();
  const title = props.title;
  return (
    <Paper component="div" className={classes.root}>
      <IconButton aria-label="go back" onClick={() => navigate(-1)}>
=======
const Header = (props ) => {
  const classes = useStyles();
  const title = props.title
  return (
    <Paper component="div" className={classes.root}>
      <IconButton
        aria-label="go back"
      >
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {title}
      </Typography>
<<<<<<< HEAD
      <IconButton aria-label="go forward" onClick={() => navigate(1)}>
=======
      <IconButton
        aria-label="go forward"
      >
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
