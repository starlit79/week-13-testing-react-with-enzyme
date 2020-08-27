import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <form className="login" data-test="login-form">
                <div>The Unlovely Login</div>
                <div>
                    <label>Email</label>
                    <input id="email" onBlur={this.handleInputChange} name="email" type="text" data-test="login-email" />
                </div>
                <div>
                    <label>Password</label>
                    <input id="password" onBlur={this.handleInputChange} name="password" type="password" data-test="login-password" />
                    <button data-test="login-submit">Submit</button>
                </div>
            </form>
        );
    }
}
export default Login;
