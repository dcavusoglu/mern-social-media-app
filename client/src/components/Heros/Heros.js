import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Hero from './Hero/Hero';
import useStyles from './styles';

const Heros = ({setCurrentId}) => {
  const heros = useSelector((state) => state.heros)
  const classes = useStyles();

  console.log(heros);

  return (
    !heros.length ? <CircularProgress/> : (
      <Grid className={classes.container} container alignItems='stretch' spacing={3}>
        {heros.map((hero) => (
          <Grid key={hero._id} item xs={12} sm={6}>
            <Hero hero={hero} setCurrentId={setCurrentId}/>
          </Grid>
        ))}
      </Grid>
    )

  )
}

export default Heros
