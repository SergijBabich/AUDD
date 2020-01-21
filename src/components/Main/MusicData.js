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
  a = this.props.music[this.state.value].media;
     newArr = JSON.parse(this.a);

  showOtherComponent = () => {

    if (this.state.value <=5) {
      this.setState({
        value: this.state.value + 1
      })

    }
    else {
      this.state.value =0
    }

  }


 render() {
  return (
    <div>
      <p> Id sound {this.props.music[this.state.value].song_id}</p>
      <p>{this.props.music[this.state.value].title}</p>
      <p>{this.props.music[this.state.value].title_with_featured}</p>
      <p>{this.props.music[this.state.value].artist}</p>
      <p>Url = {this.newArr[0].url}</p>
      trtert
      <AudioPlayer
        autoPlay
        src=''
        onPlay={e => console.log("onPlay")}
        // other props here
      />
      <button  onClick={this.showOtherComponent} > </button>
    </div>

  )
 }
}



export default MusicData;
