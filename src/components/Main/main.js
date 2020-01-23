import React, {useRef} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from   'react-redux';
import {Input} from '../../Utils/formControl.js';
import {File} from '../../Utils/formControl.js';
import MusicData from './MusicData.js';
import PreLoader from '../preloader/preloader.js';
import {getMusicFromFile} from '../../REDUX/music_Reducer.js';
import main from './main.module.css';
import MusicDataFile from './MusicDataFile.js';
import {required , maxLengthCreator, minLengthCreator} from '../../Utils/validator.js';

 let  value='I was wondering if after all these years';
class Main  extends React.Component {
  constructor(props) {
      super(props);
      this.inputRef = React.createRef(null);
      console.log(this.props);
      }


   getUserLine = (formData) => {
     console.log(formData);
     console.log(this.props);
     let doneStr = formData.someStr.replace(/ /g, '%20');
     this.props.getMusicFromLyrics(doneStr);
  }
  /*myPostElement =(el, index) =>{
    return <MusicData song_id={this.props.music[index].song_id} />
  }*/
uploadFile = (e) => {
  console.log(this.props.musicFile);
  e.preventDefault();
  console.log(this.inputRef.current.files[0]);
this.props.saveFile(this.inputRef.current.files[0]);
}

render() {
  return (
    <div className={main.container}>
           Upload file:
           <input type={"file"}  ref={this.inputRef} />
           <button className={main.container__button} onClick={this.uploadFile} ></button>
      <MainFormRedux onSubmit={this.getUserLine} />
    {!this.props.music  ?  <PreLoader />:  <MusicData music={this.props.music} /> }
    {!this.props.musicFile?  <PreLoader />:  <MusicDataFile musicData = {this.props.musicFile} />}

    {/*this.myPostElement*/}

    </div>
  )
}
}
const maxLength20 = maxLengthCreator(100);
const minLength8 = minLengthCreator(8);
const MainForm = (props) => {
  return  (
    <div>
    <form  onSubmit = {props.handleSubmit}>
    <div>
    <Field component={Input}  validate={[required, maxLength20]}  name={'someStr'}  placeholder='Enter your mail' />
   </div>
   <label></label>
  <div>
  {/*<Field component={'input'} name={'rememberMe'}  value ='false' type={'checkbox'} />*/}
  </div>
  <div >
  <button  className={main.container__button}></button>
  </div>
    </form>
    </div>
  )
}

const MainFormRedux = reduxForm({
  form:'postSound'
})(MainForm)
 const _onSuccess = data => {
   console.log(data);
 }
 /*
const ManiFormFile = (props) => {
    const inputRef = useRef(null);
const getUserFile = e => {
  e.preventDefault()
  console.log(inputRef.current.files[0]);
  getMusicFromFile(inputRef.current.files[0], _onSuccess);
    }
  return  (
    <div>
    <form  onSubmit = {getUserFile}>
   <div>
   <input type='file' ref={inputRef}  name='musicFile' />
   </div>
  <button ></button>
    </form>
    </div>
  )
}

*/

export default Main;
