import React, { Component } from 'react';
import DataTable  from 'react-data-table-component';
import moment from 'moment';

import ApiService from '../../../services/api';
import {customStyles} from '../../../services/custom-style';
const loader = require('../../../images/loader.gif');

class IVRCallLookup extends Component {
  constructor(props){
    super(props);
    this.state = {  
      startDate : '',
      endDate : '',
      faxNumber: '',
      loader: false,
      apiCall: false,
      callLookupList : []
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
      const url = "getIVRCallLookup";
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
        callLookupList: response.data
      });
    }else{
      alert("Invalide Input")
    }

  }

  render() {
    const columns = [
      {
        name: 'EventDt',
        selector: 'EventDt',
        sortable: false,
      },
      {
        name: 'IVR',
        selector: 'SourceIVRName[0]',
        sortable: false,
      },
      {
        name: 'Calling Number',
        selector: 'SourceAddress',
        sortable: false,
      },
      {
        name: 'Duration',
        selector: 'EventDuration',
        sortable: false,
      },
      {
        name: 'CustomerID',
        selector: 'AcctMgmtCustId',
        sortable: false,
      },
      {
        name: 'SystemEventId',
        selector: 'SystemEventId',
        sortable: false,
      },
      {
        name: 'SystemEventId',
        selector: 'SystemEventId',
        sortable: false,
      },
      {
        name: 'SystemEventId',
        selector: 'SystemEventId',
        sortable: false,
      },
      {
        name: 'Status',
        selector: 'EventStatusCdDescription',
        sortable: false,
      },
      {
        name: 'Page(s)',
        selector: 'CallFaxPageCt',
        sortable: false,
      },
      {
        name: 'Speed',
        selector: 'CallFaxReceiveSpeed',
        sortable: false,
      },
      {
        name: 'ECM',
        cell: row => <div style={{textTransform: 'capitalize'}}>{row.CallFaxECM.toString()}</div>,
        sortable: false,
      },
      {
        name: 'MR',
        cell: row => <div style={{textTransform: 'capitalize'}}>{row.CallFaxMR.toString()}</div>,
        sortable: false,
      },
      {
        name: 'MMR',
        cell: row => <div style={{textTransform: 'capitalize'}}>{row.CallFaxMMR.toString()}</div>,
        sortable: false,
      },
      { 
        name: 'Partial',
        selector: 'PartialFax',
        sortable: false,
      },
      {
        name: 'ProviderId',
        selector: 'ProviderId',
        sortable: false,
      },
      {
        name: 'DbProviderId',
        selector: 'EntryPointProviderId',
        sortable: false,
      },
      {
        name: 'NetworkId',
        selector: 'NetworkId',
        sortable: false,
      },
      {
        name: 'IPAddress',
        selector: 'IPAddress',
        sortable: false,
      },
    ];
    return (
      <div>
        <h3>IVR Call Lookup</h3>
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

          <label className="space-l-10">Records: </label>
          <select className="space-l-10">
            <option>10</option>
            <option>100</option>
            <option>1000</option>
            <option>ALL</option>
          </select>
        </div>
        <button className="btn btn-default space-t-10" onClick={() => this.onSubmit()}>Submit</button>
        {this.state.loader && <img src={loader.default} style={{width: '40px'}}/>}
        <div className="align-table">
        {this.state.apiCall &&
          <DataTable
            columns={columns}
            data={this.state.callLookupList}
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

export default IVRCallLookup;