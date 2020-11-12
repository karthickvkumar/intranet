import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'

import SidebarComponent from '../components/sidebar';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

import BouncedEmail from '../views/csr-tools/um3-tools/bounced-email';
import EmailFaxlookup from '../views/csr-tools/um3-tools/email-faxlookup';
import EntryPointbyEmail from '../views/csr-tools/um3-tools/entry-pointby-email';
import FaxSizeMonitor from '../views/csr-tools/um3-tools/fax-size-monitor';
import ForwardingFailure from '../views/csr-tools/um3-tools/forwarding-failure';
import ForwardingPendingEvent from '../views/csr-tools/um3-tools/forwarding-pending-event';
import InboundActivity from '../views/csr-tools/um3-tools/inbound-activity';
import IVRCallLookup from '../views/csr-tools/um3-tools/ivr-call-lookup';
import NotificationActivity from '../views/csr-tools/um3-tools/notification-activity';
import OutboundActivity from '../views/csr-tools/um3-tools/outbound-activity';
import PartialFaxLookup from '../views/csr-tools/um3-tools/partial-fax-lookup';
import PartialPercentage from '../views/csr-tools/um3-tools/partial-percentage';
import PlatformStatus from '../views/csr-tools/um3-tools/platform-status';
import SystemHolds from '../views/csr-tools/um3-tools/system-holds';
import TLSValidator from '../views/csr-tools/um3-tools/tls-validator';

class DashboardPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-wrapper">
        <div className="page-inner">
          <SidebarComponent></SidebarComponent>
          <div className="page-content-wrapper">
            <HeaderComponent></HeaderComponent>
            <main id="js-page-content" role="main" className="page-content" style={{height: '86vh'}}>
              {/* CSR-TOOLS */}
              <Switch>
                <Route path="/default/csrtools/bounce-email" component={BouncedEmail}></Route>
                <Route path="/default/csrtools/email-fax-lookup" component={EmailFaxlookup}></Route>
                <Route path="/default/csrtools/entry-point-email" component={EntryPointbyEmail}></Route>
                <Route path="/default/csrtools/fax-size-monitor" component={FaxSizeMonitor}></Route>
                <Route path="/default/csrtools/forwarding-failure" component={ForwardingFailure}></Route>
                <Route path="/default/csrtools/forwarding-pending-event" component={ForwardingPendingEvent}></Route>
                <Route path="/default/csrtools/inbound-activity" component={InboundActivity}></Route>
                <Route path="/default/csrtools/ivr-call-lookup" component={IVRCallLookup}></Route>
                <Route path="/default/csrtools/notification-activity" component={NotificationActivity}></Route>
                <Route path="/default/csrtools/outbound-activity" component={OutboundActivity}></Route>
                <Route path="/default/csrtools/partial-fax-lookup" component={PartialFaxLookup}></Route>
                <Route path="/default/csrtools/parcel-percentage" component={PartialPercentage}></Route>
                <Route path="/default/csrtools/platform-status" component={PlatformStatus}></Route>
                <Route path="/default/csrtools/system-holds" component={SystemHolds}></Route>
                <Route path="/default/csrtools/tls-validator" component={TLSValidator}></Route>
              </Switch>
            </main>
            <FooterComponent></FooterComponent>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;