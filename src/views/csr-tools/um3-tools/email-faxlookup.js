import React, { Component } from 'react';
import DataTable  from 'react-data-table-component';
import moment from 'moment';

import ApiService from '../../../services/api';
import {customStyles} from '../../../services/custom-style';
const loader = require('../../../images/loader.gif')

class EmailFaxlookup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      failed: '',
      email: '',
      loader: false,
      apiCall: false,
      faxLookList: []
    }
  }

  handleInput = (event) => {
    if (event.target.name == "failed") {
      this.setState({
        [event.target.name]: event.target.checked
      })
    }
    else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  async onSubmit() {
    let { startDate, endDate } = this.state;
    const url = "getEmailFaxLookup";
    startDate = moment(startDate).format('MM/DD/YYYY');
    endDate = moment(endDate).format('MM/DD/YYYY');
    const data = {
      startDate, endDate
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
      faxLookList: response.data
    });
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
      {
        name: 'Recip',
        selector: 'RecipientCt',
        sortable: true,
      },
      {
        name: 'Pgs',
        selector: 'RecipientPageCt',
        sortable: true,
      },
      {
        name: 'ASN',
        selector: 'DlvryServerPrefix',
        sortable: true,
      },
      {
        name: 'ASN',
        selector: 'Status',
        sortable: true,
      },
    ];
    
    return (
      <div>
        <h3>Email to Fax Lookup</h3>
        <div>
          <label>Start Date: </label>
          <input type="date" className="inputBox space-l-10" name="startDate" onChange={this.handleInput}></input>
        </div>
        <div className="space-t-10">
          <label>End Date: </label>
          <input type="date" className="inputBox space-l-10" name="endDate" onChange={this.handleInput}></input>
        </div>
        <div className="space-t-10">
          <label>Failed Only: </label>
          <input type="checkbox" className="space-l-10" name="failed" value="falied" onChange={this.handleInput}></input>
        </div>
        <div className="space-t-10">
          <label>Email Address: </label>
          <input type="text" className="inputBox space-l-10" name="email" onChange={this.handleInput}></input>
          <span className="space-l-10">(Leave blank to display all results)</span>
        </div>
        <button className="btn btn-default space-t-10" onClick={() => this.onSubmit()}>Submit</button>
        {this.state.loader && <img src={loader.default} style={{ width: '40px' }} />}
        <div className="align-table">
        {this.state.apiCall &&
          <DataTable
            columns={columns}
            data={this.state.faxLookList}
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

export default EmailFaxlookup;