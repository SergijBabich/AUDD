(this.webpackJsonpaudd=this.webpackJsonpaudd||[]).push([[0],{132:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAkklEQVRIie2VQQqAIBQFh+5QdKSuUsetRfs8SG2Mgur7UmvlgLjxvRERhcJLOsABqzF2lDUXlkAwWRBccEMNjF8JGmDymX3OJjjvfAbanIK7cimvCJ7KswiscglLkFxuCdTyqCN6s/MowcBxzxsrHCsA6IXyJIHKJV8llEn8LnB+Dj3Z1jPtMOjQ/oSnsfiOgs4GdhCGDgYn7KYAAAAASUVORK5CYII="},145:function(e,a,t){e.exports=t(279)},150:function(e,a,t){},151:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},277:function(e,a,t){},279:function(e,a,t){"use strict";t.r(a);var n,r,i=t(0),s=t.n(i),c=t(55),o=t.n(c),l=(t(150),t(32)),u=(t(151),t(44)),m=t.n(u),_=t(89),d=t(21),p=t(129),f=p.create({baseURL:"https://api.audd.io/"}),h=function(e){var a=new FormData;return a.append("lyrics",e),a.set("return","deezer"),f.get("findLyrics/?q=".concat(e,"&api_token=").concat("7f10ad1960fbdcf423729ff7cca1eba6")).then((function(e){return console.log(e),console.log(e.data),e.data}))},E=function(e){var a=new FormData;return a.append("file",e),a.set("api_token","7f10ad1960fbdcf423729ff7cca1eba6"),a.set("return","deezer"),console.log(e),f.post("",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return console.log(e),console.log(e.data),e.data}))},v={lyrics:null,music:null,file:null,musicFile:null},g=function(e){return{type:"SET-FILE-DATA",file:e}},b=function(e){return{type:"SET-MUSIC-LINE",lyrics:e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET-MUSIC-LINE":return{lyrics:a.lyrics};case"GET-MUSIC-DATA":return Object(_.a)({},e,{music:a.music});case"SET-MUSIC-FILE":return Object(_.a)({},e,{musicFile:a.musicFile});case"SET-FILE-DATA":return{file:a.file};default:return e}},N=t(25),y=t(26),A=t(30),D=t(27),S=t(29),O=t(281),M=t(280),j=t(45),C=t(59),k=t.n(C),F=function(e){e.input;var a=e.meta,t=(e.child,Object(j.a)(e,["input","meta","child"])),n=a.touched&&a.error;return s.a.createElement("div",{className:k.a.form_control+" "+(n?k.a.error:"")},s.a.createElement("div",null,t.children),s.a.createElement("div",null,n&&s.a.createElement("span",{className:k.a.error},a.error)))},T=function(e){var a=e.input,t=(e.meta,e.child,Object(j.a)(e,["input","meta","child"]));return s.a.createElement(F,e," ",s.a.createElement("input",Object.assign({},a,t))," ")},L=function(e){return s.a.createElement("div",null)},I=t(4),x=t.n(I),U=(t(111),t(131)),B=t.n(U),R=t(60),J=t.n(R),Y=function(e){return s.a.createElement("div",{className:J.a.container_errors},s.a.createElement("p",{className:J.a.error_notification},"Unfortunately, we did not find anything, this may be due to:"),s.a.createElement("ul",{className:J.a.error_variant},s.a.createElement("li",null,"Typing mistakes "),s.a.createElement("li",null,"A small number of words"),s.a.createElement("li",null,"Try downloading the file or try again;")))},z=t(132),W=t.n(z),G=t(84),K=function(e){function a(e){var t;return Object(N.a)(this,a),(t=Object(A.a)(this,Object(D.a)(a).call(this,e))).state={value:0},t.showOtherComponent=function(){void 0!==t.props.music&&(t.state.value<=3?t.setState({value:t.state.value+1,isBurning:0}):t.setState({value:0,isBurning:2}))},t.showWin=function(){t.setState({isBurning:1})},t.thisIs=0,t}return Object(S.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){var e="data not found",a=null,t=this.state.isBurning;return 1===t&&(a=s.a.createElement("div",{className:x.a.music_data_error},"Yes! I won,enjoy listening")),2===t&&(a=s.a.createElement("div",{className:x.a.music_data_error},"Congratulations, you won us!")),s.a.createElement(s.a.Fragment,null,a,0!==this.props.music.length&&this.props.music[this.state.value]?s.a.createElement("div",{className:x.a.music_data_container},s.a.createElement("div",{className:x.a.music_data_container_data},s.a.createElement("div",null,s.a.createElement("p",{className:x.a.music_data_container__p},"Title - ",this.props.music[this.state.value].title||e),s.a.createElement("p",{className:x.a.music_data_container__p},"Title with featured -",this.props.music[this.state.value].title_with_featured||e),s.a.createElement("p",{className:x.a.music_data_container__p},"Executor -",this.props.music[this.state.value].artist||e)),s.a.createElement("div",null,2===this.props.music[this.state.value].media.length?s.a.createElement("div",{className:x.a.show_link_error},"Sorry, but We didn't find ling at this soung"):s.a.createElement("div",{className:x.a.show_link},s.a.createElement("a",{className:x.a.music_data_container__p,href:JSON.parse(this.props.music[this.state.value].media)[0].url},"Listen to the other source ",s.a.createElement("i",{className:x.a.fas})),s.a.createElement("img",{src:W.a,alt:"Song link"})))),s.a.createElement("div",{className:x.a.music_data_container_preview},2===this.props.music[this.state.value].media.length||"youtube"!==JSON.parse(this.props.music[this.state.value].media)[0].provider?s.a.createElement("div",{className:x.a.find_error},"Sorry but We did't find links to the song, please go to another source, to listen"):s.a.createElement("div",{className:x.a.find_error},"  ",s.a.createElement(B.a,{url:2===this.props.music[this.state.value].media.length?"nothing":JSON.parse(this.props.music[this.state.value].media)[0].url,playing:!0})),s.a.createElement("div",{className:x.a.music_data_container_preview_button},s.a.createElement("button",{className:x.a.container__button,onClick:this.showWin},"that's her!"),s.a.createElement("button",{className:x.a.container__button,onClick:this.showOtherComponent},"Search more")))):s.a.createElement(Y,null))}}]),a}(s.a.Component),V=t(9),Q=t.n(V),H=t(61),P=t.n(H),X=function(e){return s.a.createElement("div",{className:P.a.container_errors},s.a.createElement("p",{className:P.a.error_notification},"Unfortunately, we did not find anything, this may be due to:"),s.a.createElement("ul",{className:P.a.error_variant},s.a.createElement("li",null,"The downloaded file must be in mp3 format; "),s.a.createElement("li",null,"Too big audio file. 10M or 25 seconds is maximum, we recommend to record no more than 20 seconds (usually it takes less than one megabyte). If you need to recognize really big audio files, our Enterprise endpoint supports files that up to 24h long. Contact us;"),s.a.createElement("li",null,"Try downloading a better file or try again;"),s.a.createElement("li",null,"You can lead a sentence from a song. ")))},q=function(e){function a(e){var t;if(Object(N.a)(this,a),(t=Object(A.a)(this,Object(D.a)(a).call(this,e))).state={value:0},t.showLose=function(){t.setState({isBurning:0})},t.showWin=function(){t.setState({isBurning:1})},t.props.musicData)t.props.musicData.deezer;return t}return Object(S.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){var e=null,a=this.state.isBurning;return 0===a&&(e=s.a.createElement("div",{className:Q.a.music_data_error},"Congratulations, you won us!")),1===a&&(e=s.a.createElement("div",{className:Q.a.music_data_error},"Yes! I won,enjoy listening")),s.a.createElement(s.a.Fragment,null," ",e,null==this.props.musicData?s.a.createElement(X,null):s.a.createElement("div",{className:Q.a.container_wrapper},s.a.createElement("div",{className:Q.a.container},s.a.createElement("div",{className:Q.a.media},s.a.createElement("div",{className:Q.a.media_img},s.a.createElement("img",{src:this.props.musicData.deezer.artist.picture_medium,alt:"Song image"})),s.a.createElement("div",{className:Q.a.media_container},s.a.createElement("div",{className:Q.a.media_item1},"1 Song, 3 Minutes"),s.a.createElement("div",{className:Q.a.media_item2},s.a.createElement("a",{href:"#"},"Preview ",s.a.createElement("i",{className:Q.a.fas}))))),s.a.createElement("div",{class:Q.a.content},s.a.createElement("h1",null,this.props.musicData.title," - Single"),s.a.createElement("h3",null,this.props.musicData.artist),s.a.createElement("small",null,this.props.musicData.album),s.a.createElement("br",null),s.a.createElement("a",{href:this.props.musicData.deezer.artist.link},"Listen on Apple Music",s.a.createElement("i",{className:Q.a.fas})),s.a.createElement("div",{class:Q.a.contant_song},s.a.createElement(G.a,{className:Q.a.play,src:this.props.musicData.deezer.preview,onPlay:function(e){return console.log("onPlay")}})),s.a.createElement("div",{class:Q.a.contant_release},s.a.createElement("span",null,s.a.createElement("b",null,"Released:"))," ",this.props.musicData.release_date,s.a.createElement("br",null),"\xa9 ",this.props.musicData.label,s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("span",{id:"span"},"Also Available in iTunes"),s.a.createElement("div",{className:Q.a.button_container},s.a.createElement("button",{className:Q.a.container__button,onClick:this.showWin},"Yes "),s.a.createElement("button",{className:Q.a.container__button,onClick:this.showLose},"No "))))))))}}]),a}(s.a.Component),Z=function(e){if(!e)return"Field is required"},$=function(e){function a(e){var t;return Object(N.a)(this,a),(t=Object(A.a)(this,Object(D.a)(a).call(this,e))).getUserLine=function(e){var a=e.someStr.replace(/ /g,"%20");t.props.getMusicFromLyrics(a)},t.uploadFile=function(e){e.preventDefault(),t.props.saveFile(t.inputRef.current.files[0])},t.state={redirect:0},t.setRedirectToFile=function(){t.setState({redirect:1})},t.setRedirectToLyrics=function(){t.setState({redirect:2})},t.inputRef=s.a.createRef(null),t}return Object(S.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:x.a.container},s.a.createElement("div",{className:x.a.container_wrapper},s.a.createElement("span",{class:x.a.login100_form_title},"Find your song"),s.a.createElement("div",{className:x.a.container_wrapper_button},s.a.createElement("button",{className:x.a.container__button,onClick:this.setRedirectToFile},"upload File"),s.a.createElement("button",{className:x.a.container__button,onClick:this.setRedirectToLyrics},"Send string"))),s.a.createElement("div",{className:x.a.content},s.a.createElement("div",{className:x.a.content_main},1==this.state.redirect?s.a.createElement("div",{className:x.a.login100_form_upload},s.a.createElement("h1",{className:x.a.login100_form_upload__h1},"Upload file:"),s.a.createElement("div",{className:x.a.login100_form_upload__form},s.a.createElement("input",{type:"file",className:x.a.input100,ref:this.inputRef}),s.a.createElement("button",{className:x.a.container__button,onClick:this.uploadFile},"send file"))):s.a.createElement(L,null),2==this.state.redirect?s.a.createElement(ae,{onSubmit:this.getUserLine}):s.a.createElement(L,null),this.props.music?s.a.createElement(K,{value:this.props.value,music:this.props.music}):s.a.createElement(L,null),this.props.file?s.a.createElement(q,{musicData:this.props.musicFile}):s.a.createElement(L,null))))}}]),a}(s.a.Component),ee=(n=100,function(e){if(e.length>n)return"Max length is ".concat(n," symbols")}),ae=(r=8,Object(M.a)({form:"postSound"})((function(e){return s.a.createElement("div",{className:x.a.string_container},s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(O.a,{component:T,className:x.a.string_container__input,validate:[Z,ee],name:"someStr",placeholder:"String from soung"})),s.a.createElement("label",null),s.a.createElement("div",null),s.a.createElement("div",null,s.a.createElement("button",{className:x.a.container__button},"Send"))))}))),te=$,ne=Object(d.b)((function(e){return{sound:e.sound.lyrics,music:e.sound.music,file:e.sound.file,musicFile:e.sound.musicFile,value:e.sound.value}}),{getMusicFromLyrics:function(e){return function(a){var t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(h(e));case 2:t=n.sent,a(b(e)),a({type:"GET-MUSIC-DATA",music:t.result});case 5:case"end":return n.stop()}}))}},saveFile:function(e){return function(a){var t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(E(e));case 2:t=n.sent,a(g(e)),a({type:"SET-MUSIC-FILE",musicFile:t.result});case 5:case"end":return n.stop()}}))}}})(te),re=t(56),ie=t(8),se=t(143),ce=t(282),oe=Object(ie.c)({sound:w,form:ce.a}),le=Object(ie.d)(oe,Object(ie.a)(se.a));window.store=le;var ue=le;t(277);var me=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(re.a,{basename:"/AUDD"},s.a.createElement(d.a,{store:ue},s.a.createElement(l.a,{from:"/",to:"/main"}),s.a.createElement(l.b,{path:"/main",render:function(){return s.a.createElement(s.a.Suspense,null,s.a.createElement("div",{class:"app_wrapper"},s.a.createElement("div",{class:"app_wrapper_main"},s.a.createElement(ne,null))))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,a,t){e.exports={"react-h5-audio-player":"main_react-h5-audio-player__31XGF",flex:"main_flex__1KmRU","toggle-play-wrapper":"main_toggle-play-wrapper__2IE9N","progress-bar-wrapper":"main_progress-bar-wrapper__3WyJm",container_wrapper:"main_container_wrapper__3PlM_",container_wrapper_button:"main_container_wrapper_button__1NL1I",container:"main_container__dka-G",container__button:"main_container__button__3tAAn",content_button:"main_content_button__2emau",login100_form_title:"main_login100_form_title__1O38B",input100:"main_input100__3Ulmz","focus-input100":"main_focus-input100__3c8eF",focus_input100:"main_focus_input100__2b1VO",login100_form_upload:"main_login100_form_upload__1fRyL",login100_form_upload__h1:"main_login100_form_upload__h1__C_iCH",login100_form_upload__form:"main_login100_form_upload__form__tKH6g",string_container:"main_string_container__2g4f8",string_container__input:"main_string_container__input__a1upn",music_data_container:"main_music_data_container__2t4h1",music_data_error:"main_music_data_error__3prex",music_data_container__p:"main_music_data_container__p__1VoP9",music_data_container_data:"main_music_data_container_data__3MHMC",music_data_container_preview:"main_music_data_container_preview__3Ds9E",find_error:"main_find_error__3rgT3",music_data_container_preview_button:"main_music_data_container_preview_button__ApBU2",show_link:"main_show_link__2FsVp",show_link_error:"main_show_link_error__2Xybb",sidebar:"main_sidebar__84rtW"}},59:function(e,a,t){e.exports={form_control:"formControl_form_control__2HAyQ",error:"formControl_error__1DcYS"}},60:function(e,a,t){e.exports={container_errors:"ErrorData_container_errors__1VNF5",error_notification:"ErrorData_error_notification__3ThSH"}},61:function(e,a,t){e.exports={container_errors:"Error_container_errors__3b0vv",error_notification:"Error_error_notification__368i3"}},9:function(e,a,t){e.exports={container:"MusicData_container__1lqJD",media:"MusicData_media__1skZT",media_img:"MusicData_media_img__3A_Bc",media_item1:"MusicData_media_item1__bMMDr",media_item2:"MusicData_media_item2__tk5pB",content:"MusicData_content__3haLf",contant_song:"MusicData_contant_song__2p0L7",play:"MusicData_play__3c43i",contant_release:"MusicData_contant_release__1Xvj5",span:"MusicData_span__19OcS",content_button:"MusicData_content_button__3Lu_Z",button_container:"MusicData_button_container___4Yr1",container_wrapper:"MusicData_container_wrapper__2Yjdn",music_data_error:"MusicData_music_data_error__3CmJR",find_error:"MusicData_find_error__3p8-f",container__button:"MusicData_container__button__1LgxX"}}},[[145,1,2]]]);
//# sourceMappingURL=main.1c6cc907.chunk.js.map