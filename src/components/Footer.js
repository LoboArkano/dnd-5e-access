import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  footerContainer: {
    width: '100%',
    backgroundColor: 'rgb(214, 2, 2)',
    padding: [20, 25],
    color: 'rgb(247, 242, 242)',
  },

  link: {
    color: 'rgb(247, 242, 242)',
    textDecoration: 'none',

    '&:hover': {
      color: 'rgb(160, 156, 156)',
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footerContainer}>
      Data provided for
      <a href="https://api.open5e.com/monsters/" className={classes.link}> Open5e API</a>
    </footer>
  );
};

export default Footer;
