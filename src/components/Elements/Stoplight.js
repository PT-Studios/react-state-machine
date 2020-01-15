import React from 'react';

import SettingsPanel from '../Settings/SettingsPanel';

export default class Stoplight extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      color: 'red',
      timerDuration: 3000,
      timer: null
    }

  }

  componentDidMount() {
    console.log(`Traffic light created with inital ${this.state.color} state.`)
    const _timer = this.intervalChanged(this.state.timerDuration)
    this.setState({timer: _timer});
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.color !== this.state.color) {
      let lightElements = document.querySelectorAll(".on");
      let selectedLightElement = document.getElementById(this.state.color);

      [].forEach.call(lightElements, function(el) {
        el.classList.remove("on");
      }, selectedLightElement.classList.add("on"));

      console.log(`Light switched to ${this.state.color}.`);
    }

    if (prevState.timerDuration !== this.state.timerDuration) {
      clearInterval(this.state.timer);

      let _timer = this.intervalChanged(this.state.timerDuration)
      this.setState({timer: _timer});
    }
  }

  intervalChanged = (duration) => {
    let _timer = setInterval(
      () => this.lightChanged(duration),
      duration
    );
    return _timer;
  }

  lightChanged = (duration) => {

    // This function is basically the entire state machine. Everything else is just to help it run :)

    switch(this.state.color) {
      case 'red':
        this.setState({color: 'green'})
        return
      case 'yellow':
        this.setState({color: 'red'})
        return
      case 'green':
        this.setState({color: 'yellow'})
        return
      default:
        this.setState({color: 'red'})
        return
    }
  }

  saveSetting = (settingName, settingValue) => {
    switch (settingName){
      case 'timerDuration':
        this.setState({timerDuration: settingValue})
        console.log(`Timer duration changed to ${settingValue}.`);
        return
      default:
        this.setState({settingName: settingValue})
        return
    }
  }

  render() {
    return(
      <div id="stoplight" className="d-flex justify-content-center align-items-center">
        <div id="red" className="light light__red on d-flex shadow"></div>
        <div id="yellow" className="light light__yellow d-flex shadow"></div>
        <div id="green" className="light light__green d-flex shadow"></div>
        <SettingsPanel callbackSettingsChanges={this.saveSetting} timerDuration={this.state.timerDuration} />
      </div>
    )
  }
}