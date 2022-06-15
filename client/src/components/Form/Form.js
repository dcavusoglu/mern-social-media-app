import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { createHero } from '../../actions/heros.js';

const Form = () => {
  const [heroData, setHeroData] = useState({ creator: '', title: '', detail: '', birthDate: '', deathDate: '', school: '', tags: '', selectedFile:'' })
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createHero(heroData));
  }

  const clear = () => {

  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>Creating a Hero</Typography>
        <TextField
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={heroData.creator}
          onChange={(e) => setHeroData({ ...heroData, creator: e.target.value})}
        />
         <TextField
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={heroData.title}
          onChange={(e) => setHeroData({ ...heroData, title: e.target.value})}
        />
        <TextField
          name='detail'
          variant='outlined'
          label='Detail'
          fullWidth
          value={heroData.detail}
          onChange={(e) => setHeroData({ ...heroData, detail: e.target.value})}
        />
        <TextField
          name='birthdate'
          variant='outlined'
          label='Birthdate'
          fullWidth
          value={heroData.birthDate}
          onChange={(e) => setHeroData({ ...heroData, birthDate: e.target.value})}
        />
        <TextField
          name='deathDate'
          variant='outlined'
          label='Death'
          fullWidth
          value={heroData.deathDate}
          onChange={(e) => setHeroData({ ...heroData, deathDate: e.target.value})}
        />
        <TextField
          name='school'
          variant='outlined'
          label='School'
          fullWidth
          value={heroData.school}
          onChange={(e) => setHeroData({ ...heroData, school: e.target.value})}
        />
        <TextField
          name='tags'
          variant='outlined'
          label='Tags'
          fullWidth
          value={heroData.tags}
          onChange={(e) => setHeroData({ ...heroData, tags: e.target.value})}
        />
        <div>
          <FileBase className={classes.paper} type='file' multiple={false} onDone={({base64}) => setHeroData({ ...heroData, selectedFile: base64})} />
        </div>
        <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
        <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form
