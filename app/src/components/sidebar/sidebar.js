import React, { Component } from 'react';

import Channels from './blocks/channels/channels'

import logo from './logo.svg'

import './sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src={logo} alt="Logo Goosta" />
        </div>

        <Channels />

      </aside>
    );
  }
}

export default Sidebar;
