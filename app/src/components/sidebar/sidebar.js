import React, { Component } from 'react';

import Channels from './blocks/channels/channels'

import './sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h3 class="logo">react-chat</h3>
        </div>

        <Channels />

      </aside>
    );
  }
}

export default Sidebar;
