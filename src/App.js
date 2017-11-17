import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import LoginService from './LoginService';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChangeUsername = (event) => {
        console.log(event.target.value)
        this.setState({username: event.target.value});
    };

    handleChangePassword = (event) => {
        this.setState({password: event.target.value});
    };

    handleSubmit= () => {
        LoginService.login(this.state.username, this.state.password);
    };

    render() {
        return (
            <div>
                <div className="imgcontainer">
                    <img src={logo} alt="Avatar" className="App-logo"/>
                </div>

                <div className="container">
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" value={this.state.username} onChange={this.handleChangeUsername} required="required"/>

                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChangePassword} required="required"/>

                    <button type="submit" value="Submit" onClick={this.handleSubmit}>Login</button>
                </div>

                <div className="container">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw"><a>Forgot password?</a></span>
                </div>
            </div>
        );
    }
}

export default App;
