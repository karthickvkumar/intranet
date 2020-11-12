import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

const logo = require('../images/logo.png');

class SidebarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: {
        netops: false,
        sla_monitoring: false,
        server_maintenance: false,
        fdp_working_servers: false,
        fdp_tools: false,
        rd: false,
        builds: false,
        csr_tools: false,
        um3_tools: false,
        reports: false,
        outbound: false,
        inbound: false
      }
    }
  }

  onClickCollapse(event,view) {
    event.preventDefault();
    const { collapse } = this.state;
    let collapsable = { ...collapse, [view]: !collapse[view] }
    this.setState({
      collapse : collapsable
    });
  }

  render() {
    const { collapse } = this.state;
    return (
      <aside className="page-sidebar">
        <div className="page-logo">
          <a className="nav-a-link" className="page-logo-link press-scale-down d-flex align-items-center position-relative" data-toggle="modal" data-target="#modal-shortcut">
            <div style={{ 'marginLeft': "15%" }}>
              <img src={logo.default} alt="Concord Technologies" aria-roledescription="logo" />
            </div>
          </a>
        </div>

        <nav id="js-primary-nav" className="primary-nav" role="navigation">
          <div className="nav-filter">
            <div className="position-relative">
              <input type="text" id="nav_filter_input" placeholder="Filter menu" className="form-control" tabIndex="0" />
              <a className="nav-a-link" className="btn-primary btn-search-close js-waves-off" data-action="toggle" data-class="list-filter-active" data-target=".page-sidebar">
                <i className="fal fa-chevron-up"></i>
              </a>
            </div>
          </div>

          <div className="info-card">
            <a className="nav-a-link" className="pull-trigger-btn" data-action="toggle" data-class="list-filter-active" data-target=".page-sidebar" data-focus="nav_filter_input">
              <i className="fal fa-angle-down"></i>
            </a>
          </div>

          <ul id="js-nav-menu" className="nav-menu">
            <li>
              <a className="nav-a-link" title="NetOps" data-filter-tags="netOps" onClick={(e) => this.onClickCollapse(e,'netops')}>
                <i className="fal fa-cog"></i>
                <span className="nav-link-text" data-i18n="nav.netOps">NetOps</span>
                <b className="collapse-sign"><em className={collapse['netops'] ? 'fal fa-angle-up' : 'fal fa-angle-down'}></em></b>
              </a>
              <ul className={collapse['netops'] ? 'show' : 'hidden'}>
                <li>
                  <a className="nav-a-link" title="SLA Monitoring"
                    data-filter-tags="sla monitoring" onClick={(e) => this.onClickCollapse(e,'sla_monitoring')}>
                    <span className="nav-link-text" data-i18n="nav.sla_monitoring">SLA Monitoring</span>
                    <b className="collapse-sign"><em className={collapse['sla_monitoring'] ? 'fal fa-angle-up' : 'fal fa-angle-down'}></em></b>
                  </a>
                  <ul className={collapse['sla_monitoring'] ? 'show' : 'hidden'}>
                    <li>
                      <a className="nav-a-link" title="Reports" data-filter-tags="reports">
                        <span className="nav-link-text" data-i18n="nav.reports">Reports</span>
                      </a>
                    </li>
                    <li>
                      <a className="nav-a-link" title="Search Events" data-filter-tags="search events">
                        <span className="nav-link-text" data-i18n="nav.search_events">Search Events</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="nav-a-link" title="Server Maintenance"
                    data-filter-tags="server_maintenance" onClick={(e) => this.onClickCollapse(e,'server_maintenance')}>
                    <span className="nav-link-text" data-i18n="nav.server_maintenance">Server Maintenance</span>
                    <b className="collapse-sign"><em className={collapse['server_maintenance'] ? 'fal fa-angle-up' : 'fal fa-angle-down'}></em></b>
                  </a>
                  <ul className={collapse['server_maintenance'] ? 'show' : 'hidden'}>
                    <li>
                      <a className="nav-a-link" title="FDP Working Servers"
                        data-filter-tags="fdp_working_servers" onClick={(e) => this.onClickCollapse(e,'fdp_working_servers')}>
                        <span className="nav-link-text" data-i18n="nav.fdp_working_servers">FDP Working Servers</span>
                        <b className="collapse-sign"><em className={collapse['fdp_working_servers'] ? 'fal fa-angle-up' : 'fal fa-angle-down'}></em></b>
                      </a>
                      <ul className={collapse['fdp_working_servers'] ? 'show' : 'hidden'}>
                        <li>
                          <a className="nav-a-link" title="Number Blocking"
                            data-filter-tags="number blocking">
                            <span className="nav-link-text"
                              data-i18n="nav.number_blocking">Number Blocking</span>
                          </a>
                        </li>
                        <li>
                          <a className="nav-a-link" title="Number Overrides"
                            data-filter-tags="number overrides">
                            <span className="nav-link-text"
                              data-i18n="nav.number_overrides">Number Overrides</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="nav-a-link" title="Introduction"
                    data-filter-tags="application intel introduction" onClick={(e) => this.onClickCollapse(e,'fdp_tools')}>
                    <span className="nav-link-text" data-i18n="nav.application_intel_introduction">FDP Tools</span>
                    <b className="collapse-sign"><em className={collapse['fdp_tools'] ? 'fal fa-angle-up' : 'fal fa-angle-down'}></em></b>
                  </a>
                  <ul className={collapse['fdp_tools'] ? 'show' : 'hidden'}>
                    <li>
                      <a href="number-blocking.html" title="General"
                        data-filter-tags="pages inbox general">
                        <span className="nav-link-text" data-i18n="nav.pages_inbox_general">Number
                                                  Blocking</span>
                      </a>
                    </li>
                    <li>
                      <a href="number-overrides.html" title="Read"
                        data-filter-tags="pages inbox read">
                        <span className="nav-link-text" data-i18n="nav.pages_inbox_read">Number
                                                  Overrides</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* EOF NETOPS */}
            <li>
              <a className="nav-a-link" title="R&D" data-filter-tags="r&d" onClick={(e) => this.onClickCollapse(e,'rd')}>
                <i className="fal fa-cubes"></i>
                <span className="nav-link-text" data-i18n="nav.r&d">R&D</span>
                <b className="collapse-sign"><em className={collapse['rd'] ? 'fal fa-angle-up' : 'fal fa-angle-down'}></em></b>
              </a>
              <ul className={collapse['rd'] ? 'show' : 'hidden'}>
                <li>
                  <a className="nav-a-link" title="Builds" data-filter-tags="builds" onClick={(e) => this.onClickCollapse(e,'builds')}>
                    <span className="nav-link-text" data-i18n="nav.builds">Builds</span>
                    <b className="collapse-sign"><em className={collapse['builds'] ? 'fal fa-angle-up' : 'fal fa-angle-down'}></em></b>
                  </a>
                  <ul className={collapse['builds'] ? 'show' : 'hidden'}>
                    <li>
                      <a className="nav-a-link" title="Create" data-filter-tags="create">
                        <span className="nav-link-text" data-i18n="nav.create">Create</span>
                      </a>
                    </li>
                    <li>
                      <a className="nav-a-link" title="Issue Notification"
                        data-filter-tags="issue notification">
                        <span className="nav-link-text" data-i18n="nav.issue_notification">Issue
                                                  Notification</span>
                      </a>
                    </li>
                    <li>
                      <a className="nav-a-link" title="Status" data-filter-tags="status">
                        <span className="nav-link-text" data-i18n="nav.status">Status</span>
                      </a>
                    </li>
                    <li>
                      <a className="nav-a-link" title="History" data-filter-tags="history">
                        <span className="nav-link-text" data-i18n="nav.history">History</span>
                      </a>
                    </li>
                    <li>
                      <a className="nav-a-link" title="Adminal" data-filter-tags="admin">
                        <span className="nav-link-text" data-i18n="nav.admin">Admin</span>
                      </a>
                      <li>
                        <a className="nav-a-link" title="Projects" data-filter-tags="projects">
                          <span className="nav-link-text" data-i18n="nav.projects">Projects</span>
                        </a>
                      </li>
                      <li>
                        <a className="nav-a-link" title="Notification Emails"
                          data-filter-tags="notification emails">
                          <span className="nav-link-text"
                            data-i18n="nav.notification_emails">Notification Emails</span>
                        </a>
                      </li>
                    </li>
                    <li>
                      <a href="build-reports.html" title="Reports" data-filter-tags="reports">
                        <span className="nav-link-text" data-i18n="nav.reports">Reports</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* EOF R&D */}
            <li>
              <a className="nav-a-link" title="CSR Tools" data-filter-tags="csr tools" onClick={(e) => this.onClickCollapse(e,'csr_tools')}>
                <i className="fal fa-gavel"></i>
                <span className="nav-link-text" data-i18n="nav.csr_tools">CSR Tools</span>
                <b className="collapse-sign"><em className={collapse['csr_tools'] ? 'fal fa-angle-up' : 'fal fa-angle-down'}></em></b>
              </a>
              <ul className={collapse['csr_tools'] ? 'show' : 'hidden'}>
                <li>
                  <a className="nav-a-link" title="UM3 Tools" data-filter-tags="um3 tools" onClick={(e) => this.onClickCollapse(e,'um3_tools')}>
                    <span className="nav-link-text" data-i18n="nav.pages_inbox">um3_tools</span>
                    <b className="collapse-sign"><em className={collapse['um3_tools'] ? 'fal fa-angle-up' : 'fal fa-angle-down'}></em></b>
                  </a>
                  <ul className={collapse['um3_tools'] ? 'show' : 'hidden'}>
                    <li>
                      <NavLink to="/default/csrtools/inbound-activity"  className="nav-a-link" title="Inbound Activity"
                        data-filter-tags="Inbound Activity" activeClassName="nav-a-link-active">
                        <span className="nav-link-text" data-i18n="nav.inbound_activity">Inbound Activity</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/default/csrtools/outbound-activity" className="nav-a-link" title="Outbound Activity"
                        data-filter-tags="outbound activity" activeClassName="nav-a-link-active">
                        <span className="nav-link-text" data-i18n="nav.outbound_ activity">Outbound
                                              Activity</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/default/csrtools/notification-activity" className="nav-a-link" title="Notification Activity"
                        data-filter-tags="notification activity" activeClassName="nav-a-link-active">
                        <span className="nav-link-text"
                          data-i18n="nav.notification_activity">Notification Activity</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/default/csrtools/ivr-call-lookup" className="nav-a-link" title="CCW First Action Report"
                        data-filter-tags="ccw first action report" activeClassName="nav-a-link-active">
                        <span className="nav-link-text" data-i18n="nav.ccw_first_action _report">IRV Call Lookup</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/default/csrtools/email-fax-lookup" className="nav-a-link" title="Email To Fax Lookup"
                        data-filter-tags="email to fax lookup" activeClassName="nav-a-link-active">
                        <span className="nav-link-text" data-i18n="nav.email_to_fax_lookup">Email To Fax
                                              Lookup</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/default/csrtools/entry-point-email" className="nav-a-link" title="EntryPoint By Email"
                        data-filter-tags="entryPoint by email" activeClassName="nav-a-link-active">
                        <span className="nav-link-text" data-i18n="nav.entryPoint_by_email">EntryPoint
                                              By Email</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/default/csrtools/partial-fax-lookup" className="nav-a-link" title="Partial Fax Lookup"
                        data-filter-tags="partial fax lookup" activeClassName="nav-a-link-active">
                        <span className="nav-link-text" data-i18n="nav.partial_fax_lookup">Partial Fax
                                              Lookup</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/default/csrtools/parcel-percentage" className="nav-a-link" title="Partial Percentages"
                        data-filter-tags="partial percentages" activeClassName="nav-a-link-active">
                        <span className="nav-link-text" data-i18n="nav.partial_percentages">Partial
                                              Percentages</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/default/csrtools/fax-size-monitor" className="nav-a-link" title="Fax Size Monitor"
                        data-filter-tags="fax size monitor" activeClassName="nav-a-link-active">
                        <span className="nav-link-text" data-i18n="nav.fax_size_monitor">Fax Size
                                              Monitor</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/default/csrtools/platform-status" className="nav-a-link" title="Platform Status"
                        data-filter-tags="platform status" activeClassName="nav-a-link-active">
                        <span className="nav-link-text" data-i18n="nav.platform_status">Platform
                                              Status</span>
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* EOF CSR TOOLS */}
            <li>
              <a className="nav-a-link" title="Reports" data-filter-tags="reports" onClick={(e) => this.onClickCollapse(e,'reports')}>
                <i className="fal fa-chart-pie"></i>
                <span className="nav-link-text" data-i18n="nav.reports">Reports</span>
                <b className="collapse-sign"><em className={collapse['reports'] ? 'fal fa-angle-up' : 'fal fa-angle-down'}></em></b>
              </a>
              <ul className={collapse['reports'] ? 'show' : 'hidden'}>
                <li>
                  <a className="nav-a-link" title="Outbound" data-filter-tags="outbound" onClick={(e) => this.onClickCollapse(e,'outbound')}>
                    <span className="nav-link-text" data-i18n="nav.outbound">Outbound</span>
                    <b className="collapse-sign"><em className={collapse['outbound'] ? 'fal fa-angle-up' : 'fal fa-angle-down'}></em></b>
                  </a>
                  <ul className={collapse['outbound'] ? 'show' : 'hidden'}>
                    <li>
                      <a href="reports-outbound.html" title="Average Time-to-First-Dial"
                        data-filter-tags="average time-to-first-dial">
                        <span className="nav-link-text"
                          data-i18n="nav.average_time-to-first-dial">Average Time-to-First-
                                              Dial</span>
                      </a>
                    </li>
                    <li>
                      <a className="nav-a-link" title="Average Total Completion Time"
                        data-filter-tags="average total completion time">
                        <span className="nav-link-text"
                          data-i18n="nav.average_total_completion_time">Average Total Completion
                                              Time</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="nav-a-link" title="Inbound" data-filter-tags="inbound" onClick={(e) => this.onClickCollapse(e,'inbound')}>
                    <span className="nav-link-text" data-i18n="nav.inbound">Inbound</span>
                    <b className="collapse-sign"><em className={collapse['inbound'] ? 'fal fa-angle-up' : 'fal fa-angle-down'}></em></b>
                  </a>
                  <ul className={collapse['inbound'] ? 'show' : 'hidden'}>
                    <li>
                      <a href="reports-inbound.html" title="Transmission Failures" data-filter-
                        tags="transmission failures">
                        <span className="nav-link-text" data-
                          i18n="nav.transmission_failures">Transmission Failures</span>
                      </a>
                    </li>
                    <li>
                      <a className="nav-a-link" title="Usage Summary"
                        data-filter-tags="usage summary">
                        <span className="nav-link-text" data-i18n="nav.usage_summary">Usage
                                              Summary</span>
                      </a>
                    </li>
                  </ul>

                </li>
              </ul>
              <div className="filter-message js-filter-message bg-success-600"></div>
            </li>
            {/* EOF REPORTS */}
          </ul>
        </nav>
      </aside>
    );
  }
}

export default SidebarComponent;