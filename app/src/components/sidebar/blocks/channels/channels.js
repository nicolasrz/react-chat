import React, { Component } from 'react';

import addCircular from './add-circular.svg'
import './channels.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="channels">
        <div className="channels-header">
          <h2>Salons</h2>

          <a href="/"><img src={addCircular} width="20" alt=""/></a>
        </div>

        <ul>
          <li><a href="/"><span>#</span> bienvenue</a></li>
          <li><a href="/"><span>#</span> general</a></li>
          <li><a href="/"><span>#</span> divers</a></li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
