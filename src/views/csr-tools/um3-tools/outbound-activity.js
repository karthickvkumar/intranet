import React, { Component } from 'react';

class OutboundActivity extends Component {
  onSubmit(){

  }
  render() {
    return (
      <div>
        <h3>Outbound Activity</h3>
        <div>
          <label>Search By: </label> 
          <select className="space-l-10">
            <option>Username</option>
            <option>Mailbox Number</option>
            <option>Job ID</option>
            <option>Customer ID (Comp, Dept, User)</option>
          </select>
        </div>
        <div>
          <label>Search Text: </label>
          <input type="text" className="space-l-10"/>
        </div>
        <div>
          <label>Start Date: </label>
          <input type="date" className="space-l-10"/>
        </div>
        <div>
          <label>End Date: </label>
          <input type="date" className="space-l-10"/>
        </div>
        <div>
          <span style={{display: 'block'}}>Optional</span>
          <label>Filter By: </label>
          <input type="date" className="space-l-10"/>
        </div>
        <div>
          <label>Filter Text: </label>
          <input type="text" className="space-l-10"/>
        </div>
        <button className="btn btn-default space-t-10" onClick={() => this.onSubmit()}>Submit</button>
      </div>
    );
  }
}

export default OutboundActivity;