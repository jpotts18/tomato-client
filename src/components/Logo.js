import { Avatar, makeStyles } from '@material-ui/core';
import React from 'react'

import LogoImage from '../img/logo.png';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    padding: 28,
    backgroundColor: theme.palette.primary.dark,
  }
}));

export default function Logo() {
  const classes = useStyles();
  return (
    <div>
      <Avatar className={classes.avatar}>
        <img src={LogoImage} alt="Tomazo Logo" />
      </Avatar>
    </div>
  )
}
