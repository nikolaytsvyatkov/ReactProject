import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './login.module.css'
import NavBarComp from '../../components/NavBarComp';
import UserContext from '../../Context';
import authenticate from '../../utils/authenticate';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : ''

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
        } = this.state

    //    const isFirstNameCorrect = this.isFieldCorrect(firstName)
    //    const isLastNameCorrect = this.isFieldCorrect(lastName)
    //    const isUsernameCorrect = this.isFieldCorrect(username)
    //    const isPasswordCorrect = this.isFieldCorrect(password)

    //    if (!isFirstNameCorrect || !isLastNameCorrect || !isUsernameCorrect || !isPasswordCorrect) {
    //        this.setState({isFirstNameCorrect, isLastNameCorrect, isPasswordCorrect, isUsernameCorrect})
    //        return;
    //    }

        console.log("here", this.context)
        await authenticate('http://localhost:8080/api/v1/auth/login', {
            username,
            password
        }, () => {
            this.context.logIn()
            // this.props.history.push('/')
            window.location.href = 'http://localhost:3000'
            //set in local storage
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
        return (
            <div>
                <NavBarComp />
                <div className={styles.container}>
                    <h2 className="text-center text-white">Login</h2>
                    <form
                        className="main-form mx-auto col-md-8 d-flex flex-column justify-content-center" onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="text-white font-weight-bold mb-2">Username</label>
                            <input onChange={(e) => this.onChange(e, 'username')} className="form-control" id="username" name="username" type="text" min="2" max="50"
                                placeholder="Username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="text-white font-weight-bold mb-2">Password</label>
                            <input onChange={(e) => this.onChange(e, 'password')} id="password" name="password" type="password" min="2"
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
}

