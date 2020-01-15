import React from 'react';

import Stoplight from './Elements/Stoplight';

export default class StateMachine extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return(
      <div id="wrapper">
        <Stoplight />
      </div>
    )
  }
}