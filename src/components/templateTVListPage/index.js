import React, { useState } from "react";
import Header from "../headerTVShowList";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import TvList from "../tvList";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#080426",
    paddingTop: theme.spacing(7),
  },

  fab: {
    marginTop: theme.spacing(8),
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function TVListPageTemplate({ tvShows, title, action }) {
  const classes = useStyles();
  /*  const [titleFilter, setTitleFilter] = useState('');
   const [genreFilter, setGenreFilter] = useState('0');
   const [drawerOpen, setDrawerOpen] = useState(false); */
  // come back to above if I decide to use tv filter

 //  const genreId = Number(genreFilter);

  let displayedTVShows = tvShows
   /*  .filter((m) => {
      return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    }); */
 /*  const handleChange = (type, value) => {
    if (type === "title") setTitleFilter(value);
    else setGenreFilter(value);
  }; */
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
          <TvList action={action} tvShows={displayedTvShows} />
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        Filter
      </Fab>
    {/*   <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
        />
      </Drawer> */}
    </>
  );
}
export default TVListPageTemplate;
