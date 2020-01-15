import React from 'react';

export default class Settings extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  handleChanges = (e) => {
    this.props.callbackSettingsChanges(e.target.name, e.target.value*1000)
  }

  render() {
    return(
      <form id="settings-info" className="">
        <label htmlFor="timerDuration">Duration:</label>
        <input id="timerDuration" name="timerDuration" type="number" min="1" max="10" value={this.props.timerDuration/1000} onChange={this.handleChanges}></input>
      </form>
    )
  }
}