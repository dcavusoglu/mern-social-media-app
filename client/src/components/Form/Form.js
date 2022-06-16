import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createHero, updateHero } from '../../actions/heros';


const Form = ({currentId, setCurrentId}) => {
  const hero = useSelector((state) => currentId ? state.heros.find((h) => h._id === currentId) : null);

  const [heroData, setHeroData] = useState({ creator: '', title: '', detail: '', birthDate: '', deathDate: '', school: '', tags: '', selectedFile:'' })
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if(hero) setHeroData(hero);
  }, [hero]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId) {
      dispatch(updateHero(currentId, heroData));
    } else {
      dispatch(createHero(heroData));
    }
    clear();
  }

  const clear = () => {
    setCurrentId(null);
    setHeroData({ creator: '', title: '', detail: '', birthDate: '', deathDate: '', school: '', tags: '', selectedFile:'' });
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>{currentId ?  'Updating the hero' : 'Creating a Hero' } </Typography>
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
