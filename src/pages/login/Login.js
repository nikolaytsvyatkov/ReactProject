import React, { Component, useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './login.module.css'
import NavBarComp from '../../components/NavBarComp';
import UserContext from '../../Context';
import authenticate from '../../utils/authenticate';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const userContext = useContext(UserContext)
    let navigate = useNavigate();

    const onUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const onPasswordChanged = (event) => {
        setPassword(event.target.value)
    }

    const isFieldCorrect = (field) => {
        return field.length > 2 && field.length < 80;
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        //TODO ADD CHECK TO FIELDS


        await authenticate('http://localhost:8080/api/v1/auth/login', {
            username,
            password
        }, (response) => {
            const { token } = response
            
            userContext.logIn()
            localStorage.setItem('token', token)
            navigate("/")
        }, (e) => {
            console.log('Error', e)
        }
        )
    }
    
    return (
        <div>
            <NavBarComp />
            <div className={styles.container}>
                <h2 className="text-center text-white">Login</h2>
                <form
                    className="main-form mx-auto col-md-8 d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="text-white font-weight-bold mb-2">Username</label>
                        <input value={username} onChange={(e) => onUsernameChange(e)} className="form-control" id="username" name="username" type="text" min="2" max="50"
                            placeholder="Username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="text-white font-weight-bold mb-2">Password</label>
                        <input value={password} onChange={(e) => onPasswordChanged(e)} id="password" name="password" type="password" min="2"
                            max="20" className="form-control"
                            placeholder="Password" />

                    </div>

                    <p className="errors alert alert-danger">
                        Invalid username or password.
                    </p>

                    <div className="row">
                        <div className="col col-md-4">
                            <div className="button-holder d-flex mb-3">
                                <input type="submit" className="btn btn-info btn-lg" value="Create Account" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login