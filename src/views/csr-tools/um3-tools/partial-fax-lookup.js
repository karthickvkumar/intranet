import React, { Component } from 'react';
import DataTable  from 'react-data-table-component';
import moment from 'moment';

import ApiService from '../../../services/api';
import {customStyles} from '../../../services/custom-style';
const loader = require('../../../images/loader.gif')

class PartialFaxLookup extends Component {
  constructor(props){
    super(props);
    this.state = {  
      startDate : '',
      endDate : '',
      faxNumber: '',
      loader: false,
      apiCall: false,
      partialFaxLookList : []
    }
  }

  handleInput = (event) => {
      this.setState({
        [event.target.name] : event.target.value
      })
  }

  async onSubmit(){
    let {startDate,endDate,faxNumber} = this.state;
    if(startDate !== "" && endDate !== '' && faxNumber !== ''){
      const url = "getPartialFaxLookup";
      startDate = moment(startDate).format('MM/DD/YYYY');
      endDate = moment(endDate).format('MM/DD/YYYY');
      const data = {
        startDate, endDate, faxNumber
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
        partialFaxLookList: response.data
      });
    }else{
      alert("Invalide Input")
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
        <h3>Partial Fax Lookup</h3>
        <div>
          <label>Start Date: </label>
          <input type="date" className="inputBox space-l-10" name="startDate" onChange={this.handleInput}></input>
        </div>
        <div className="space-t-10">
          <label>End Date: </label>
          <input type="date" className="inputBox space-l-10" name="endDate" onChange={this.handleInput}></input>
        </div>
        <div className="space-t-10">
          <label>Fax Number: </label>
          <input type="text" className="inputBox space-l-10" name="faxNumber" onChange={this.handleInput}></input>
        </div>
        <button className="btn btn-default space-t-10" onClick={() => this.onSubmit()}>Submit</button>
        {this.state.loader && <img src={loader.default} style={{width: '40px'}}/>}
        <div className="align-table">
        {this.state.apiCall &&
          <DataTable
            columns={columns}
            data={this.state.partialFaxLookList}
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

export default PartialFaxLookup;