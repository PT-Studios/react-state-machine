import React from 'react';

import Settings from './Settings';

export default class SettingsPanel extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showPanel: false
    }
  }

  openSettings = () => {
    let panelElement = document.getElementById("settings-panel");
    let infoElement = document.getElementById("settings-info");

    panelElement.classList.add("show")

    if (this.state.showPanel){
      this.setState({showPanel: true})
      panelElement.classList.add("show")
      infoElement.classList.add("show")
    } else {
      this.setState({showPanel: false})
      panelElement.classList.remove("show")
      infoElement.classList.remove("show")
    }
  }

  sendSettingsChanges = (settingName, settingsValue) => {
    this.props.callbackSettingsChanges(settingName, settingsValue)
  }

  render() {
    return(
      <div id="settings-panel" className="">
        <button className="settings-button" onClick={this.openSettings}>&#9881;</button>
        <Settings callbackSettingsChanges={this.sendSettingsChanges} timerDuration={this.props.timerDuration} />
      </div>
    )
  }
}