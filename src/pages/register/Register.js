import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from '../../components/NavBarComp';
import styles from './register.module.css';
import UserContext from '../../Context';
import authenticate from '../../utils/authenticate';
import DropdownForm from '../../components/DropdownForm';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //offers : []
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            isFirstNameCorrect: true,
            isLastNameCorrect: true,
            isUsernameCorrect: true,
            isPasswordCorrect: true,

        };
    }

    static contextType = UserContext;

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value
        this.setState(newState)
    }

    isFieldCorrect(field) {
        return field.length > 2 && field.length < 80;
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {
            username,
            password,
            lastName,
            firstName
        } = this.state

       const isFirstNameCorrect = this.isFieldCorrect(firstName)
       const isLastNameCorrect = this.isFieldCorrect(lastName)
       const isUsernameCorrect = this.isFieldCorrect(username)
       const isPasswordCorrect = this.isFieldCorrect(password)

       if (!isFirstNameCorrect || !isLastNameCorrect || !isUsernameCorrect || !isPasswordCorrect) {
           this.setState({isFirstNameCorrect, isLastNameCorrect, isPasswordCorrect, isUsernameCorrect})
           return;
       }


        await authenticate('http://localhost:8080/api/v1/auth/register', {
            username,
            password,
            lastName,
            firstName
        }, (user) => {
            this.context.logIn(user)
            // this.props.history.push('/')
            
            window.location.href = 'http://localhost:3000'
        }, (e) => {
            console.log('Error', e)
        }
        )
    }

    componentDidMount() {
        // fetching from api 
        this.setState({
            //offers: offerArray //result from query fetch....
        })
    }

    render() {
        const { firstName, lastName, username, password, isPasswordCorrect, isFirstNameCorrect, isLastNameCorrect, isUsernameCorrect } = this.state;

        return (
            <div>
                <NavBarComp />
                <div className={styles.container}>
                    <h2 className="text-center text-white">Register User</h2>
                    <form
                        className="main-form mx-auto col-md-8 d-flex flex-column justify-content-center" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="mb-3 col-md-6 mb-3">
                                <label htmlFor="firstName" className="text-white font-weight-bold">First Name</label>
                                <input id="firstName" onChange={(e) => this.onChange(e, 'firstName')} value={firstName} type="text" min="2" max="20" className="form-control"
                                    placeholder="First name" />
                               {isFirstNameCorrect ? null :    <p
                                    className="errors alert alert-danger">
                                    First name is invalid.
                                </p>}
                            </div>
                            <div className="mb-3 col-md-6 mb-3">
                                <label htmlFor="lastName" className="text-white font-weight-bold">Last Name</label>
                                <input id="lastName" value={lastName} onChange={(e) => this.onChange(e, 'lastName')} type="text" min="2" max="20" className="form-control"
                                    placeholder="Last name" />
                                {isLastNameCorrect ? null :    <p
                                    className="errors alert alert-danger">
                                    Last name is invalid.
                                </p>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6 mb-3">
                                <label htmlFor="username" className="text-white font-weight-bold">Username</label>
                                <input id="username" value={username} onChange={(e) => this.onChange(e, 'username')} type="text" min="2" max="20" className="form-control"
                                    placeholder="Username" />
                                {isUsernameCorrect ? null :    <p
                                    className="errors alert alert-danger">
                                    Username is invalid.
                                </p>}
                            </div>
                            <div className="mb-3 col-md-6 mb-3">
                                <label htmlFor="password" className="text-white font-weight-bold">Password</label>
                                <input id="password" value={password} onChange={(e) => this.onChange(e, 'password')} type="password" min="2" max="20" className="form-control"
                                    placeholder="Password" />
                                {isPasswordCorrect ? null :    <p
                                    className="errors alert alert-danger">
                                    Password is invalid.
                                </p>}
                             
                            </div>
                        </div>
                        {/* <div className="mb-3">
                            <label className="text-center text-white font-weight-bold" htmlFor="roles">Roles</label>
                            <div>
                                <DropdownForm />
                            </div>
                            <p
                                className="errors alert alert-danger">
                                Selecting a role is required.
                            </p>
                        </div> */}

                        <div className="row">
                            <div className="col col-md-4">
                                <div className="button-holder d-flex mb-3">
                                    <input type="submit" className="btn btn-info btn-lg" value="Register" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

