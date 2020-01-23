 import React from 'react';
import PreLoader from '../preloader/preloader.js';
import m from './MusicData.module.css';
import 'react-h5-audio-player/lib/styles.css';
import MUSIC from './sergey.mp3';
import AudioPlayer from "react-h5-audio-player";
import MusicErrorFile from "./Error/MusicErrorFile.js";
class MusicDataFile extends  React.Component   {
  constructor(props) {
    super(props);
    if (this.props.musicData) {
         let deezer = this.props.musicData.deezer;
    }
  }
  state = {
      value:0
  }
  /*a = this.props.music[this.state.value].media;
     newArr = JSON.parse(this.a);*/


  showOtherComponent = () => {
     console.log(this.props);



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
    <> {this.props.musicData == null? <MusicErrorFile />:
    <div className={m.container}>
        <div className={m.media}>
         <div className={m.media_img}>
            <img src={this.props.musicData.deezer.artist.picture_medium} alt="Song image" />
          </div>
            <div className={m.media_container}>
            <div className={m.media_item1}>
                1 Song, 3 Minutes
            </div>

                <div className={m.media_item2}>
                    <a href="#">
                        Preview <i className={m.fas}></i>
                    </a>
                </div>
            </div>
        </div>
        <div class={m.content}>
            <h1>{this.props.musicData.title} - Single</h1>
            <h3>{this.props.musicData.artist}</h3>
            <small>{this.props.musicData.album}</small><br/>

            <a href={this.props.musicData.deezer.artist.link}>Listen on Apple Music<i className={m.fas}></i></a>
            <div class={m.contant_song}>
            <AudioPlayer
                src={this.props.musicData.deezer.preview}
              onPlay={e => console.log("onPlay")}
              // other props here
            />
            </div>
            <div class={m.contant_release}>
                <span><b>Released:</b></span> {this.props.musicData.release_date}<br />
                &copy; {this.props.musicData.label}<br></br>
                <div>
                  <span id="span">Also Available in iTunes</span>
                <div className={m.button_container}>
                  <button  className={m.content_button} onClick={this.showOtherComponent} >Yes </button>
                  <button  className={m.content_button} onClick={this.showOtherComponent} >No </button>
                </div>
                </div>

            </div>
        </div>
    </div>}</>
  )
 }
}



export default MusicDataFile;
