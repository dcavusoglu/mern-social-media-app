import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import {useDispatch} from 'react-redux';

import { deleteHero, addHero } from '../../../actions/heros';

const Hero = ( {hero, setCurrentId} ) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={hero.selectedFile} title={hero.title}/>
      <div className={classes.overlay}>
        <Typography varian='h6'>{hero.creator}</Typography>
        <Typography varian='body2'>{moment(hero.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }}
        size='small'
        onClick={()=> setCurrentId(hero._id)}>
          <MoreHorizIcon fontSize='medium'/>
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>{hero.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant='h5' gutterBottom>{hero.title}</Typography>
        <Typography variant='h6' color='textSecondary' componenet='p'>{hero.detail}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' onClick={()=>{dispatch(addHero(hero._id))}}>
          <AddCircleOutlineIcon fontSize='small'/>{hero.addCount >= 1 ? 'Added' :'Add'} {hero.addCount}
        </Button>
        <Button size='small' color='primary' onClick={()=>{dispatch(deleteHero(hero._id))}}>
          <DeleteIcon fontSize='small'/>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Hero
