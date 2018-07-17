import React, { Component } from 'react';

import User from './blocks/user/user'

import addCircular from './add-circular.svg'
import './users.css';

class Users extends Component {
  render() {
    return (
      <div className="channels">
        <div className="channels-header">
          <h2>Utilisateurs</h2>

          <a href="#"><img src={addCircular} width="20" alt=""/></a>
        </div>

        <ul>
          <li>
            <a href="#">
              <User
                username="Brandon Sueur"
                picture="brandonsueur"
                actif=false
                show=['username', 'actif']
              >
            </a>
          </li>
          <li><a href="#"><span>#</span> general</a></li>
          <li><a href="#"><span>#</span> divers</a></li>
        </ul>
      </div>
    );
  }
}

export default Users;
