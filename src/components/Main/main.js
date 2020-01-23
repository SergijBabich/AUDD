import React, {useRef} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from   'react-redux';
import {Input} from '../../Utils/formControl.js';
import {File} from '../../Utils/formControl.js';
import MusicData from './MusicData.js';
import PreLoader from '../preloader/preloader.js';
import { Redirect } from 'react-router-dom';
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

uploadFile = (e) => {
  console.log(this.props);
  e.preventDefault();
  console.log(this.inputRef.current.files[0]);
this.props.saveFile(this.inputRef.current.files[0]);
}
  state = {
    redirect:0
  }
  setRedirectToFile = () => {

    this.setState({
     redirect: 1
   })
  }
  setRedirectToLyrics = () => {
    this.setState({
     redirect: 2
   })
  }
  /*
  setRedirectToFile = () => {
    this.setState({
     redirect: true
   })
  }
  renderRedirect = () => {
      if(this.state.redirect == true) {
        console.log('eeteryhgfhfg');
        return <Redirect to='/uploadFile' />
      }
    }
*/


render() {
  return (
    <div className={main.container}>
      <button className={main.container__button} onClick={this.setRedirectToFile} >uploadFile</button>
      <button className={main.container__button} onClick={this.setRedirectToLyrics} >find for line</button>
          {this.state.redirect ==1? <div> Upload file:
                                  <input type={"file"}  ref={this.inputRef} />
                                    <button className={main.container__button} onClick={this.uploadFile} ></button>
                                    </div>:  <PreLoader />}
          {this.state.redirect ==2?   <MainFormRedux onSubmit={this.getUserLine} />:<PreLoader /> }

          {!this.props.music? <PreLoader />  :  <MusicData value={this.props.value} music={this.props.music} /> }
          {!this.props.file? <PreLoader />  :  <MusicDataFile musicData = {this.props.musicFile} />}

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

export default Main;
