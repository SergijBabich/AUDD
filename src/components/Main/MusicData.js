import React from 'react';
import PreLoader from '../preloader/preloader.js';
import m from './main.module.css';
import 'react-h5-audio-player/lib/styles.css';
import ReactPlayer from 'react-player';
import MusicErrorData from "./Error/MusicErrorData.js";
import externalLink from '../../img/externalLink.png';
import AudioPlayer from "react-h5-audio-player";
class MusicData extends  React.Component   {
  constructor(props) {
    super(props);
    this.thisIs= 0
  }
  state = {
      value:0
  }
  showOtherComponent = () => {
  if (this.props.music !== undefined) {
    if (this.state.value <=3 ) {
      this.setState({
        value: this.state.value + 1,
        isBurning: 0
      })
      }
    else {
      this.setState({
        value: 0,
        isBurning: 2
      })
    }
  }
}
  showWin =() => {
    this.setState({isBurning: 1});
  }
 render() {
    let error = 'data not found';
   let result = null;
   const isBurning = this.state.isBurning;
    if (isBurning === 1) {
          result =  <div className={m.music_data_error}>Yes! I won,enjoy listening</div>
        }
    if (isBurning === 2) {
          result =  <div className={m.music_data_error}>Congratulations, you won us!</div>
        }
  return (
    <>
    {result}
     {this.props.music.length ===0 || !this.props.music[this.state.value]  ? <MusicErrorData />:
        <div className={m.music_data_container}>
            <div className={m.music_data_container_data}>
              <div >
                <p className={m.music_data_container__p}>Title - { this.props.music[this.state.value].title || error }</p>
                <p className={m.music_data_container__p}>Title with featured -{ this.props.music[this.state.value].title_with_featured  || error  }</p>
                <p className={m.music_data_container__p}>Executor -{ this.props.music[this.state.value].artist  || error  }</p>
             </div>
             <div>
             {this.props.music[this.state.value].media.length === 2 ?
              <div className={m.show_link_error} >Sorry, but We didn't find ling at this soung</div>:
                <div className={m.show_link} >
                  <a  className={m.music_data_container__p} href={JSON.parse(this.props.music[this.state.value].media)[0].url}>
                    Listen to the other source <i className={m.fas}></i>
                  </a>
                <img src={externalLink} alt="Song link" />
              </div> }

          </div>
         </div>
         <div className={m.music_data_container_preview}>
            {this.props.music[this.state.value].media.length === 2 || JSON.parse(this.props.music[this.state.value].media)[0].provider !== 'youtube' ?
                <div className={m.find_error}>Sorry but We did't find links to the song, please go to another source, to listen</div>:
            <div className={m.find_error} >  <ReactPlayer   url={this.props.music[this.state.value].media.length === 2 ? 'nothing':JSON.parse(this.props.music[this.state.value].media)[0].url} playing /></div>}
        <div className={m.music_data_container_preview_button}>
            <button  className={m.container__button} onClick={this.showWin} >that's her!</button>
            <button  className={m.container__button} onClick={this.showOtherComponent} >Search more</button>
        </div>
      </div>
    </div>}
  </>

  )
 }
}




export default MusicData;
