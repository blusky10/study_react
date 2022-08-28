import React from 'react';

import mealsImage from '../../assets/meals.jpeg';

import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Delicious food' />
        </div>
    </React.Fragment>
};

export default Header;