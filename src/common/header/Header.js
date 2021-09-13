import React, {useState} from 'react';
import './Header.css';
import logoSVG from '../../assets/logo.svg';
import { Button } from "@material-ui/core";
import Modal from '../modal/Modal';
import Register from "../../screens/register/Register";
import Login from "../../screens/login/Login";

export const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const onLoginClick = () => {
        setLoggedIn(!loggedIn);
    }

    const onBookShowClick = () => {
        !loggedIn ? setShowModal(!showModal) : console.log('Should show Book Show screen');
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <React.Fragment>
            <div className='header'>
                <img className='logo' src={logoSVG} alt="React Logo" />
                <div className='buttons'>
                    <Button className='button' variant='contained' color='primary' onClick={onBookShowClick}>BOOK SHOW</Button>
                    <Button className='button' variant='contained' onClick={onLoginClick}>{loggedIn ? 'LOGOUT' : 'LOGIN'}</Button>
                </div>
            </div>
            {showModal &&
            <Modal
                open={showModal}
                close={closeModal}
                tabs={['Login', 'Register']}
                tabActions={{
                    Login: <Login />,
                    Register: <Register />
                }}
            />
            }
        </React.Fragment>
    );
}

export default Header;

/* --------------------- TODO ---------------------
Access token for - 'loggedIn' state

BOOK SHOW button -
1. This button should always be displayed in the header when a user clicks on a released movie, whether they are logged in or not.
2. When a user is not logged in, clicking the Book Show button would open the modal that would ask them to log in/register on the application.
If the user is logged in, then it would open the Book Show page, which you can find in the ‘bookshow’ folder,
which is present in the ‘screens’ folder. (The code for BookShow is already provided to you.
You just need to integrate that with the Book Show button.)
*/
