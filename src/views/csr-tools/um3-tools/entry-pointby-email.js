import React, { Component } from 'react';
import ApiService from '../../../services/api';

const loader = require('../../../images/loader.gif')

class EntryPointbyEmail extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      entryPointList: [],
      loader: false,
      apiCall: false
    }
  }

  handleEmailAddress = (event) => {
    this.setState({
      email : event.target.value
    })
  }

  async onSubmit(){
    if(this.state.email != ''){
      const url = "getEntryPointByTargetAddress";
      const data = {
          email: this.state.email
      }
      this.setState({loader : true})
      const response = await ApiService.post(url,data);
      if(response.status == 403){
        alert(response.data.message);
        localStorage.clear();
        this.props.history.push('/login');
        return;
      }
      this.setState({
        loader : false,
        apiCall: true,
        entryPointList: response.data
      });
    }else{
      alert("Invalid Email")
    }
  }

  render() {
    let entryPoints = this.state.entryPointList.map((value, index) => {
      return(
        <tr key={index}>
          <td>{value.Events}</td>     
          <td>{value.CustOrderId}</td>     
          <td>{value.EntryPoint}</td>     
          <td>{value.MostRecentDt}</td>     
        </tr>
      )
    })
    return (
      <div>
        <h3>EntryPoint By Email</h3>
        <label>Enter Email Address: </label>
        <input type="text" className="inputBox space-l-10" onChange={this.handleEmailAddress}></input>
        <button className="btn btn-default space-l-10" onClick={() => this.onSubmit()}>Submit</button>
        {this.state.loader && <img src={loader.default} style={{width: '40px'}}/>}
        {this.state.apiCall && <div>
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>OrderId</th>
                  <th>EntryPoint</th>
                  <th>Most Recent Activity</th>
                </tr>
              </thead>
              <tbody>
              {
                this.state.entryPointList.length == 0 ? 
                <tr>
                  <td colSpan="4">No Record Found</td>
                </tr>:
                entryPoints
              }
              </tbody>
            </table>
          </div>}
      </div>
    );
  }
}

export default EntryPointbyEmail;