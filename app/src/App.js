import React, { Component } from 'react';
import { css } from 'glamor'

// make css rules
const title = css({
  fontFamily: 'Montserrat',
  fontWeight: 100,
  fontSize: '4em',
  color: '#c3c3c3',
  textAlign: 'center',
  marginTop: '6em'
});

class App extends Component {
  render = () => (<h1 {...title}>Goosta</h1>);
}

export default App;
