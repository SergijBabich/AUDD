 import React from 'react';
import PreLoader from '../preloader/preloader.js';
import m from './main.module.css';
import 'react-h5-audio-player/lib/styles.css';
import MUSIC from './sergey.mp3';
import AudioPlayer from "react-h5-audio-player";
class MusicData extends  React.Component   {
  constructor(props) {
    super(props);
  }

  state = {
      value:0
  }

  showOtherComponent = () => {

    if (this.state.value <=5) {
      console.log(this.props.music[this.state.value].media.length);
      console.log(this.state.value);
      this.setState({
        value: this.state.value + 1
      })
    console.log(this.props.music[this.state.value].media.length);
    }
    else {
      this.state.value =0
    }

  }
 render() {
  return (
    <>{this.props.music.length ===0 ? <div>error</div>:
    <div>
      <p> Id sound {this.props.music[this.state.value].song_id}</p>
      <p>{this.props.music[this.state.value].title}</p>
      <p>{this.props.music[this.state.value].title_with_featured}</p>
      <p>{this.props.music[this.state.value].artist}</p>
      <p>Url = {this.props.music[this.state.value].media.length === 2 ? 'nothing':JSON.parse(this.props.music[this.state.value].media)[0].url}</p>
      trtert

      <button  className={m.container__button} onClick={this.showOtherComponent} > </button>
    </div>}</>

  )
 }
}



export default MusicData;
