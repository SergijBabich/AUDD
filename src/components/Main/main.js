import React, {useRef} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from   'react-redux';
import {Input} from '../../Utils/formControl.js';
import {File} from '../../Utils/formControl.js';
import MusicData from './MusicData.js';
import PreLoader from '../preloader/preloader.js';
import {getMusicFromFile} from '../../REDUX/music_Reducer.js';
import {required , maxLengthCreator, minLengthCreator} from '../../Utils/validator.js';

 let  value='I was wondering if after all these years';
class Main  extends React.Component {
  constructor(props) {
      super(props);

      }


   getUserLine = (formData) => {
     console.log(formData);
     let doneStr = formData.someStr.replace(/ /g, '%20');
     this.props.getMusicFromLyrics(doneStr);
  }
  /*myPostElement =(el, index) =>{
    return <MusicData song_id={this.props.music[index].song_id} />
  }*/
render() {
  return (
    <div>

  
      <MainFormRedux onSubmit={this.getUserLine} />
    {!this.props.music?  <PreLoader />:  <MusicData music={this.props.music} />}

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
  <button ></button>
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
