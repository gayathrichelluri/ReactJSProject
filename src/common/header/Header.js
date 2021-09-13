import React from 'react';
import './Header.css';
import logoSVG from '../../assets/logo.svg';
import {Button} from "@material-ui/core";

export const Header = () => {
    const isLoggedIn = false;

    return (
        <div className='header'>
            <img className='logo' src={logoSVG} alt="React Logo" />
            <div className='buttons'>
                <Button className='button' variant='contained' color='primary'>BOOK SHOW</Button>
                <Button className='button' variant='contained'>{isLoggedIn ? 'LOGOUT' : 'LOGIN'}</Button>
            </div>
        </div>
    );
}

export default Header;

/* --------------------- TODO ---------------------

LOGIN/REGISTER MODAL

BOOK SHOW button -
1. This button should always be displayed in the header when a user clicks on a released movie, whether they are logged in or not.
2. When a user is not logged in, clicking the Book Show button would open the modal that would ask them to log in/register on the application.
If the user is logged in, then it would open the Book Show page, which you can find in the ‘bookshow’ folder,
which is present in the ‘screens’ folder. (The code for BookShow is already provided to you.
You just need to integrate that with the Book Show button.)
*/
