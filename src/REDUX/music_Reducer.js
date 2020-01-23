import {soundAPI} from "../api/api.js";
import {soundFileAPI} from "../api/api.js";
const GET_MUSIC_DATA = 'GET-MUSIC-DATA';
const SET_MUSIC_LINE = 'SET-MUSIC-LINE';
const SET_MUSIC_FILE = 'SET-MUSIC-FILE';

let initialState = {
  lyrics:null,
  music:null,
  file: null,
  musicFile:undefined,
  countWinsUser:null,
  countWinsProgram:null,
}
  const musicReducer = ( state = initialState, action) => {
  switch (action.type) {

    case SET_MUSIC_LINE:
        return {
          lyrics: action.lyrics
        }
    case GET_MUSIC_DATA:{
      return {...state , music:action.music}
  }
  case SET_MUSIC_FILE:{
console.log(action.musicFile);
    return {...state , musicFile:action.musicFile}
}
    default:
        return state
  }
}
export let setLyricsData = (lyrics) => {
  return {
    type: SET_MUSIC_LINE,
    lyrics
  }
}

export let getMusicData  = (music) => {
  return {
    type: GET_MUSIC_DATA,
    music
    }
}

export let getMusicFile  = (musicFile) => {
  return {
    type: SET_MUSIC_FILE,
    musicFile

    }
}
 export const getMusicFromLyrics = (lyrics) => {
   return async (dispatch) => {
    let data = await soundAPI.getMusicFromLyrics(lyrics);
        dispatch(setLyricsData(lyrics));
        dispatch(getMusicData(data.result));
  }
}
export const saveFile = (file) =>  async (dispatch) => {
   let data = await soundAPI.saveFile(file);
   dispatch(getMusicFile(data.result));
 }

/*
export const getMusicFromFile = (file) => {
  return async (dispatch) => {
   let data = await soundFileAPI.getMusicFromFile(file);
       dispatch(setFileData(file));
       dispatch(getMusicFile(data.result));
 }
}*/
export default musicReducer;
