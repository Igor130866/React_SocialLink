import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

console.log(classes);

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile'>Profile</NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to='/dialogs'>Message</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/News'>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='Music'>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='Setting'>Setting</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;