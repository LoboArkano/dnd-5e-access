import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  errorContainer: {
    display: 'flex',
    height: '100vh',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    fontFamily: ['Merriweather', 'Arial', 'Helvetica', 'sans-serif'],
    fontWeight: 700,
  },
});

const Error = () => {
  const classes = useStyles();

  return (
    <div className={classes.errorContainer}>
      <h1>Ooops!! Page not found</h1>
    </div>
  );
};

export default Error;
