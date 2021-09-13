import React, {useState} from 'react';
import './Login.css';
import {FormControl, FormHelperText, InputLabel, Input, Button} from "@material-ui/core";

export const Login = () => {
    const [userName, setUserName] = useState('')
    const [reqUsername, setReqUserName] = useState('no-helper')
    const [password, setPassword] = useState('')
    const [reqPassword, setReqPassword] = useState('no-helper')

    const onUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        userName === '' ? setReqUserName("helper") : setReqUserName('no-helper');
        password === '' ? setReqPassword("helper") : setReqPassword('no-helper');
        console.log('Should implement Login Submit!!')
    }

    return (
        <div className='form'>
            <div className='form-fields'>
                {/*User Name*/}
                <FormControl required className="formControl">
                    <InputLabel htmlFor="username">
                        Username
                    </InputLabel>
                    <Input
                        id="username"
                        value={userName}
                        onChange={onUserNameChange}
                    />
                    <FormHelperText className={reqUsername}>
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
            </div>
            <Button
                variant="contained"
                onClick={onSubmit}
                color="primary"
                className='submit'
            >
                LOGIN
            </Button>
        </div>
    );
}

export default Login;