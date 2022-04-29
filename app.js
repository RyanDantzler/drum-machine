//Sound URLs - Thanks FCC
const soundURLs = {
  heaterOne: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  heaterTwo: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  heaterThree: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  heaterFour: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  heaterSix: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  dsc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  kickAndHat: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  kick: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  closedHH: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  chordOne: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  chordTwo: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  chordThree: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  lighter: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  openHH: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  snareAndHH: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  punchyKick: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  sideStickSnare: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  snare: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
};

const activeStyle = {
  backgroundColor: "#2196F3",
  boxShadow: "1px 1px 2px #0b4b7e",
  marginTop: 7,
  marginBottom: 3
};

const inactiveStyle = {
  backgroundColor: "#333",
  boxShadow: "2px 2px 4px #000",
  marginTop: 5,
  marginBottom: 5
};

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonStyle: inactiveStyle
    };
    this.activateButton = this.activateButton.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.playSound = this.playSound.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }
  
  activateButton() {
    if (this.state.buttonStyle.backgroundColor === "#333") {
      this.setState({
        buttonStyle: activeStyle
      });
    } else {
      this.setState({
        buttonStyle: inactiveStyle
      });
    }
  }
  
  handleKeydown(e) {
    if (e.keyCode == this.props.keyName.charCodeAt(0)) {
      this.playSound();
    }
  }
  
  playSound() {
    if (this.props.power) {
      const audio = document.getElementById(this.props.keyName);
      audio.currentTime = 0;
      audio.play();
      this.activateButton();
      setTimeout(() => this.activateButton(), 100);
      this.props.updateDisplay(this.props.name); 
    }
  }
  
  render() {
    return (
      <div id={this.props.name} className="drum-pad" onClick={this.playSound} style={this.state.buttonStyle}>
        <audio id={this.props.keyName} className="clip" src={this.props.audioSrc} />
          {this.props.keyName}
      </div>
    );
  }
};


class SoundKeys extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if (this.props.bank) {
      return (
        <div id="sound-keys">
          <DrumPad name="Heater 1" keyName="Q" power={this.props.power} updateDisplay={this.props.updateDisplay} audioSrc={soundURLs.heaterOne} />
          <DrumPad name="Heater 2" keyName="W" power={this.props.power} updateDisplay={this.props.updateDisplay} audioSrc={soundURLs.heaterTwo} />
          <DrumPad name="Heater 3" keyName="E" power={this.props.power} updateDisplay={this.props.updateDisplay} audioSrc={soundURLs.heaterThree} />

          <DrumPad name="Heater 4" keyName="A" power={this.props.power} updateDisplay={this.props.updateDisplay} audioSrc={soundURLs.heaterFour} />
          <DrumPad name="Clap" keyName="S" power={this.props.power} updateDisplay={this.props.updateDisplay} audioSrc={soundURLs.heaterSix} />
          <DrumPad name="Open HH" keyName="D" power={this.props.power} updateDisplay={this.props.updateDisplay} audioSrc={soundURLs.dsc} />

          <DrumPad name="Kick n' Hat" keyName="Z" power={this.props.power} updateDisplay={this.props.updateDisplay} audioSrc={soundURLs.kickAndHat} />
          <DrumPad name="Kick" keyName="X" power={this.props.power} updateDisplay={this.props.updateDisplay} audioSrc={soundURLs.kick} />
          <DrumPad name="Closed HH" keyName="C" power={this.props.power} updateDisplay={this.props.updateDisplay} audioSrc={soundURLs.closedHH} />
        </div>
      );
    }
    
    return (
        <div id="sound-keys">
          <DrumPad name="Chord 1" keyName="Q" power={this.props.power} updateDisplay={this.props.updateDisplay} audioSrc={soundURLs.chordOne} />
          <DrumPad name="Chord 2" keyName="W" power={this.props.power} updateDisplay={this.props.updateDisplay} audioSrc={soundURLs.chordTwo} />
          <DrumPad name="Chord 3" keyName="E" power={this.props.power} updateDisplay={this.props.updateDisplay} audioSrc={soundURLs.chordThree} />

          <DrumPad name="Shaker" keyName="A" power={this.props.power} updateDisplay={this.props.updateDisplay} audioSrc={soundURLs.lighter} />
          <DrumPad name="Open HH" keyName="S" power={this.props.power} updateDisplay={this.props.updateDisplay} audioSrc={soundURLs.openHH} />
          <DrumPad name="Closed HH" keyName="D" power={this.props.power} updateDisplay={this.props.updateDisplay} audioSrc={soundURLs.snareAndHH} />

          <DrumPad name="Punchy Kick" keyName="Z" power={this.props.power} updateDisplay={this.props.updateDisplay} audioSrc={soundURLs.punchyKick} />
          <DrumPad name="Side Stick" keyName="X" power={this.props.power} updateDisplay={this.props.updateDisplay} audioSrc={soundURLs.sideStickSnare} />
          <DrumPad name="Snare" keyName="C" power={this.props.power} updateDisplay={this.props.updateDisplay} audioSrc={soundURLs.snare} />
        </div>
    );
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: '',
      volume: 0.3,
      bank: true
    };
    this.updateDisplay = this.updateDisplay.bind(this);
    this.powerControl = this.powerControl.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
    this.bankControl = this.bankControl.bind(this);
  }
  
  updateDisplay(text) {
    this.setState({
      display: text
    });
  }
  
  powerControl() {
    this.setState({
      power: !this.state.power,
      display: ''
    });
  }
  
  adjustVolume(e) {
    this.setState({
      volume: e.target.value
    });
  }
  
  bankControl() {
    this.setState(prevState => ({
      bank: !prevState.bank,
      display: !prevState.bank ? 'Heater Kit' : 'Smooth Piano Kit'
    }));
  }
  
  render() {
    const clips = [].slice.call(document.getElementsByClassName('clip'));
      clips.forEach(sound => {
        sound.volume = this.state.volume;
      });
    return (
      <div id="drum-machine">
        <SoundKeys 
          bank={this.state.bank}
          power={this.state.power}
          updateDisplay={this.updateDisplay} />
        
        <div id="controls">
          <div>Power
              <label className={this.state.power ? "switch switch-on" : "switch"}>
                <input type="checkbox" />
                <span id="power" className="slider" onClick={this.powerControl}></span>
              </label>
            </div>
          <div id="display">{this.state.display}</div>
          <div id="volume">
            Volume
            <input min="0" max="1" type="range" step="0.01" value={this.state.volume} onChange={this.adjustVolume} />
          </div>
          <div>Bank
            <label className={this.state.bank ? "switch switch-on" : "switch"}>
              <input type="checkbox" />
              <span id="bank" className="slider" onClick={this.bankControl}></span>
            </label>
          </div>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));