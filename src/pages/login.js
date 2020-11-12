import React, { Component } from 'react';
import ApiService from '../services/api';

const logo = require('../images/logo.png');

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      login : {
        userid: '',
        password: ''
      },
      loading: false
    }
  }

  handleInput = (event) => {
    const {login} = this.state;
    this.setState({
      login: {...login, [event.target.name] : event.target.value}
    });
  }

  async onLogin(){
    const url = "login";
    this.setState({loading : true});
    const {userid, password} = this.state.login;
    if(userid.trim() != '' && password.trim() != ''){
      const response = await ApiService.post(url, this.state.login);
      if(response.data.authenticated){
        this.setState({loading : false});
        localStorage.setItem('user', JSON.stringify(response.data));
        this.props.history.push('/default');
      }
      else{
        alert("Server Error")
        this.setState({loading : false});
      }
    }
    else{
      alert('Invalid Username or Password');
      this.setState({loading : false});
    }
  }

  componentWillMount(){
    let user = localStorage.getItem('user')
    let authData = JSON.parse(user);
    const isAuthenticated = authData ? authData.authenticated : false;
    if(isAuthenticated){
      this.props.history.push('/default')
    }
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: '#032474' }}>
          <div className="page-logo" >
            <a href="#" className="page-logo-link press-scale-down d-flex align-items-center position-relative" data-toggle="modal" data-target="#modal-shortcut">
              <div style={{ 'marginLeft': "15%" }}>
                <img src={logo.default} alt="Concord Technologies" aria-roledescription="logo" />
              </div>
            </a>
          </div>
        </div>
        <div className="flex-center">
          <h3 style={{fontWeight: 'bold'}}>Concord Intranet Login</h3>
          <label className="align-label">Username:</label>
          <input type="text" className="align-input" name="userid" placeholder="Enter username.." onChange={this.handleInput}/>
          <br></br>
          <label className="align-label">Password:</label>
          <input type="password" className="align-input" name="password" placeholder="Enter password.." onChange={this.handleInput}/>
          <br></br>
          <div className="align-btn">
            <button className="login-btn" onClick={() => this.onLogin()}>{this.state.loading ? 'Loading..' : 'Login'}</button>
            <a href="" className="forget-password-btn">Forget Passowrd?</a>
          </div>
        </div>
      </div>

    );
  }
}

export default LoginPage;