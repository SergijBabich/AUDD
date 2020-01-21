import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
const api_token ='e18f6001fd4236175f7dc468d0470702';
/*let  bodyFormData = new FormData();
    bodyFormData.append("file", file);
    bodyFormData.set("api_token", 'e18f6001fd4236175f7dc468d0470702');
    bodyFormData.set("return", "timecode,apple_music,deezer,spotify");*/
const instance = axios.create({
  baseURL: 'https://api.audd.io/',
  headers: {
           "Content-Type": "multipart/form-data"
         }

});

export const soundAPI = {
  getMusicFromLyrics(lyrics){
    return instance.get(`findLyrics/?q=${lyrics}&api_token=${api_token}&return=timecode,apple_music,deezer,spotify,`).then(response => {
         console.log(response);
           console.log(response.data);
           return response.data;
         })
  }
}
/*
export const soundFileAPI = {
  getMusicFromFile(file){
    return instance.get().then(response => {
         console.log(response);
           console.log(response.data);
           return response.data;
         })
  }
}
*/