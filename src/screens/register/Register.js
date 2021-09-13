import React, {useState} from 'react';
import './Register.css';
import {Button, FormControl, FormHelperText, Input, InputLabel} from "@material-ui/core";

export const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [reqFirstName, setReqFirstName] = useState('no-helper')
    const [lastName, setLastName] = useState('')
    const [reqLastName, setReqLastName] = useState('no-helper')
    const [email, setEmail] = useState('')
    const [reqEmail, setReqEmail] = useState('no-helper')
    const [password, setPassword] = useState('')
    const [reqPassword, setReqPassword] = useState('no-helper')
    const [contact, setContact] = useState('')
    const [reqContact, setReqContact] = useState('no-helper')

    const onFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const onLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onContactChange = (e) => {
        setContact(e.target.value);
    }

    const onSubmit = (e) => {
        firstName === '' ? setReqFirstName("helper") : setReqFirstName('no-helper');
        lastName === '' ? setReqLastName("helper") : setReqLastName('no-helper');
        email === '' ? setReqEmail("helper") : setReqEmail('no-helper');
        password === '' ? setReqPassword("helper") : setReqPassword('no-helper');
        contact === '' ? setReqContact("helper") : setReqContact('no-helper');
        console.log('Should implement Register Submit!!')
    }

    return (
        <div className='form'>
            <div className='form-fields'>
                {/*First Name*/}
                <FormControl required className="formControl">
                    <InputLabel htmlFor="firstname">
                        First Name
                    </InputLabel>
                    <Input
                        id="firstname"
                        value={firstName}
                        onChange={onFirstNameChange}
                    />
                    <FormHelperText className={reqFirstName}>
                        <span className="red">Required</span>
                    </FormHelperText>
                </FormControl>

                {/*Last Name*/}
                <FormControl required className="formControl">
                    <InputLabel htmlFor="lastname">
                        Last Name
                    </InputLabel>
                    <Input
                        id="lastname"
                        value={lastName}
                        onChange={onLastNameChange}
                    />
                    <FormHelperText className={reqLastName}>
                        <span className="red">Required</span>
                    </FormHelperText>
                </FormControl>

                {/*Email*/}
                <FormControl required className="formControl">
                    <InputLabel htmlFor="email">
                        Email
                    </InputLabel>
                    <Input
                        id="email"
                        value={email}
                        type="email"
                        onChange={onEmailChange}
                    />
                    <FormHelperText className={reqEmail}>
                        <span className="red">Required</span>
                    </FormHelperText>
                </FormControl>

                {/*Password*/}
                <FormControl required className="formControl">
                    <InputLabel htmlFor="password">
                        Password
                    </InputLabel>
                    <Input
                        id="password"
                        value={password}
                        type="password"
                        onChange={onPasswordChange}
                    />
                    <FormHelperText className={reqPassword}>
                        <span className="red">Required</span>
                    </FormHelperText>
                </FormControl>

                {/*Contact Number*/}
                <FormControl required className="formControl">
                    <InputLabel htmlFor="contact">
                        Contact No.
                    </InputLabel>
                    <Input
                        id="contact"
                        value={contact}
                        onChange={onContactChange}
                    />
                    <FormHelperText className={reqContact}>
                        <span className="red">Required</span>
                    </FormHelperText>
                </FormControl>
            </div>
            <Button
                variant="contained"
                onClick={onSubmit}
                color="primary"
                className='submit'
            >
                REGISTER
            </Button>
        </div>
    );
}

export default Register;