import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
<<<<<<< HEAD
=======

>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useNavigate, NavLink } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  appbar: {
<<<<<<< HEAD
     color: 'red',
   //  padding: theme.spacing(0.5),
  },
  inactiveLink: {
    color: "white",
    padding: theme.spacing(1),
    fontSize: "1.5rem",
  },
  activeLink: {
    color: "red",
    padding: theme.spacing(1),
    fontSize: "1.5rem",
    background: "white",
  },
=======
    // background: 'none',
  },
  inactiveLink: {
    color: 'pink',  //link colours
    padding : theme.spacing(1),
    fontSize: '1.5rem'
  }, 
  activeLink: {  // link that's clicked
    color: 'yellow',
    padding : theme.spacing(1),
    fontSize: '1.5rem',
    background: "#bfbfbf"
  }
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
}));

const SiteHeader = () => {
  const classes = useStyles();
<<<<<<< HEAD
  const navigate = useNavigate();
=======
  const navigate = useNavigate()
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const open = Boolean(anchorEl);
  const menuOptions = [
    { label: "Home", path: "/" },
<<<<<<< HEAD
    { label: "Favourites", path: "/movies/favourites" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Top Rated", path: "/movies/top_rated" },
   // { label: "Straight To Video", path: "/movies/video" },
=======
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Favourites", path: "/movies/favourites" },
    { label: "Option 3", path: "/" },
    { label: "Option 4", path: "/" },
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

<<<<<<< HEAD
  return (
    <>
      <AppBar
        className={classes.appbar}
        position="fixed"
        elevation={10}
        color="primary"
      >
=======
  return ( 
    <>
      <AppBar className={classes.appbar}
      position="fixed" elevation={0} color='primary'> 
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            TMDB Client
          </Typography>
          <Typography variant="h6" className={classes.title}>
<<<<<<< HEAD
            Your Favourite Move App!
=======
            All you ever wanted to know about Movies!
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              {menuOptions.map((opt) => (
<<<<<<< HEAD
                <NavLink
                  key={opt.label}
                  to={opt.path}
                  className={({ isActive }) =>
                    isActive ? classes.activeLink : classes.inactiveLink
                  }
=======
                <NavLink     /* this is for hyperlink */
                  key={opt.label}
                  to={opt.path}
                  className={({ isActive }) =>
                  isActive ? classes.activeLink : classes.inactiveLink
                }
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
                  color="inherit"
                  // onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
<<<<<<< HEAD
                </NavLink>
=======
                </NavLink> 
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

<<<<<<< HEAD
export default SiteHeader;
=======
export default SiteHeader;
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
