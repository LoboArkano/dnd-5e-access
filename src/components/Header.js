import React from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  myheader: {
    padding: [20, 25],
    backgroundColor: 'rgb(214, 2, 2)',

    '& a': {
      color: 'rgb(247, 242, 242)',
      textDecoration: 'none',
      fontSize: 40,
      fontFamily: ['MedievalSharp', 'Arial', 'Helvetica', 'sans-serif'],
    },
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.myheader}>
      <nav>
        <ul>
          <li>
            <Link to="/">D&D 5e Access</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
