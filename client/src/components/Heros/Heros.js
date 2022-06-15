import React from 'react';
import { useSelector } from 'react-redux';

import Hero from './Hero/Hero';
import useStyles from './styles';

const Heros = () => {
  const heros = useSelector((state) => state.heros)
  const classes = useStyles();

  console.log(heros);

  return (
    <div>
      <Hero/>
      <Hero/>
    </div>
  )
}

export default Heros
