import React, { Component } from 'react';
import DataTable  from 'react-data-table-component';

import ApiService from '../../../services/api';
import {customStyles} from '../../../services/custom-style';
const loader = require('../../../images/loader.gif'); 

class NotificationActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobIdentifier: '',
      loader: false,
      apiCall: false,
      jobIdentifierList: []
    }
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async onSubmit() {
    let { jobIdentifier } = this.state;
    if (jobIdentifier !== "") {
      const url = "getNotificationActivity";
      const data = {
        jobIdentifier
      }
      this.setState({ loader: true })
      const response = await ApiService.post(url, data);
      if (response.status == 403) {
        alert(response.data.message);
        localStorage.clear();
        this.props.history.push('/login');
        return;
      }
      this.setState({
        loader: false,
        apiCall: true,
        jobIdentifierList: response.data
      });
    } else {
      alert("Invalide jobIdentifier")
    }

  }

  render() {
    const columns = [
      {
        name: 'Id',
        selector: 'FaxTicketNumber',
        sortable: true,
      },
      {
        name: 'Received',
        selector: 'TicketSubmittedDt',
        sortable: true,
      },
      {
        name: 'Email',
        selector: 'TicketSubmitEntryPointAddress',
        sortable: true,
      },
    ];
    return (
      <div>
        <h3>Notification Lookup</h3>
        <label>Job Identifier: </label>
        <input type="text" className="inputBox space-l-10" name="jobIdentifier" onChange={this.handleInput}></input>
        <button className="btn btn-default space-l-10" onClick={() => this.onSubmit()}>Submit</button>
        {this.state.loader && <img src={loader.default} style={{ width: '40px' }} />}
        <div className="align-table">
          {this.state.apiCall &&
            <DataTable
              columns={columns}
              data={this.state.jobIdentifierList}
              customStyles={customStyles}
              pagination
              dense
              striped
              highlightOnHover
              pointerOnHover
              noHeader
            />}
        </div>
      </div>
    );
  }
}

export default NotificationActivity;