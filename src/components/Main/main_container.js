import {setLyricsData} from '../../REDUX/music_Reducer.js';

import {connect} from   'react-redux';
import musicReducer from '../../REDUX/music_Reducer.js';
import {getMusicFromLyrics} from '../../REDUX/music_Reducer.js';


import Main from './main.js'
export const mapStateToProps = (state) => {
return {
  sound: state.sound.lyrics,
  music:state.sound.music,
  file: state.sound.file
  }
}
/*export const mapDispatchToProps = (dispatch) => {
  return {
    getSoundData: (lyrics) => {
      dispatch(setLyricsData(lyrics));
    }
  }
}*/

const MainContainer = connect(mapStateToProps, {getMusicFromLyrics})(Main);
export default MainContainer;
