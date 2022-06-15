import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getHeros } from './actions/heros';

import Form  from './components/Form/Form.js';
import Heros from './components/Heros/Heros.js';
import socio from './images/Socio.png';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeros());
  }, [dispatch]);

  return (
    <Container maxidth='lg'>
      <AppBar position='static' className={classes.appBar} color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>Socio Heros</Typography>
        <img className={classes.image} src={socio} alt='freud' height='60' />
      </AppBar>
      <Grow in>
        <Grid container justifyContent="space-between" alignItems='stretch' spacing={3}>
          <Grid item xs={12} sm={7}>
            <Heros />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  )
}

export default App
