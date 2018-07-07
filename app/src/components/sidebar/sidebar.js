import React, { Component } from 'react';

import logo from './logo.svg'

import './sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src={logo} alt="Logo Goosta" />
        </div>
      </aside>
    );
  }
}

export default Sidebar;
