import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import ApiService from '../services/api';

const adminImage = require('../images/avatar-admin.png');

class HeaderComponent extends Component {

  async onLogout(){
    const url = "logout";
    await ApiService.post(url);
    localStorage.clear();
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <header className="page-header" role="banner">
          <div className="hidden-lg-up">
            <a href="#" className="header-btn btn press-scale-down" data-action="toggle"
              data-class="mobile-nav-on">
              <i className="ni ni-menu"></i>
            </a>
          </div>
          <div className="search">
            <div type="text" id="app-name"><span className="appIcon-Intranet"></span>
                  INTRANET
              </div>
            <a href="#" className="btn-danger btn-search-close js-waves-off d-none"
              data-action="toggle" data-class="mobile-search-on">
              <i className="fal fa-times"></i>
            </a>
          </div>
          {/* SETTING */}
          <a href="#" className="header-icon" data-toggle="modal" data-target=".js-modal-settings">
            <i className="fal fa-cog"></i>
          </a>
          <a href="#" data-toggle="dropdown" title="drlantern@gotbootstrap.com"
            className="header-icon d-flex align-items-center justify-content-center ml-2">
            <img src={adminImage.default} className="profile-image rounded-circle"
              alt="Dr. Codex Lantern"></img>
          </a>
          <a className="header-icon" onClick={() => this.onLogout()}  style={{cursor: 'pointer'}} data-toggle="modal" data-target=".js-modal-settings">
            <i className="fal fa-sign-out-alt"></i>
          </a>
        </header>
      </div>
    );
  }
}

export default withRouter(HeaderComponent);