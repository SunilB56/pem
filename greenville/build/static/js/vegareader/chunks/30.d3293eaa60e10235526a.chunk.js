(window.webpackJsonpvegareader=window.webpackJsonpvegareader||[]).push([[30],{1507:function(t,o,e){"use strict";e.r(o);var a=e(15),i=e(9),n=e(10),u=e(27),d=e(26),l=e(0),s=e.n(l),r=e(13),c=e.n(r),p=e(171),f=e(293),h=function(t){var o=t.analyticsEventData,e=t.beta,a=t.isMinimized,i=t.onAudioPlay,n=t.playlistContent,u=t.playAudio,d=t.scrollToAudio,l=t.theme,r=t.locale;return s.a.createElement(p.AudioPlaylist,{analyticsEventData:{book_id:o.bookId,course_section_id:o.courseId?o.courseId:null,chapter_id:o.currentChapterId},beta:e,childrenField:"children",data:n,isMinimized:a,masterTheme:l.masterTheme,onAudioPlay:i,playAudio:u,titleField:"title",scrollToAudio:d,theme:l.activeColor,locale:r})};h.defaultProps={analyticsEventData:{},beta:!1,isMinimized:!1,playlistContent:{},playAudio:{},scrollToAudio:{},theme:{}};var y=Object(f.a)(h),v=e(1),A=function(t){Object(u.a)(e,t);var o=Object(d.a)(e);function e(t){var n;Object(i.a)(this,e),(n=o.call(this,t)).initialize=function(){n.audioBookOpenSubscription=c.a.on(v.e,(function(){n.setState({showPlayer:!0}),n.audioBookCloseSubscription=c.a.on(v.d,(function(){n.handleAudioBookClick()}))})),n.playerOpenSubscription=c.a.on(p.PlaylistEvents.Open,(function(t){n.isPlaying=t.isPlaying,n.props.userLastLocations.setAudioData(t)})),n.playerCloseSubscription=c.a.on(p.PlaylistEvents.Close,(function(){n.setState({showPlayer:!1})})),n.audioContentList()},n.updateAudioLastLocation=function(){var t=n.props.userLastLocations;if(n.audioElementRef){var o=Math.floor(n.audioElementRef.currentTime);Number.isNaN(parseFloat(n.audioLocation&&n.audioLocation.duration))?n.audioElementRef.onloadeddata=function(){var e=Math.floor(n.audioElementRef.duration);n.audioLocation.duration=e,t.updateUserLastLocation(Object(a.a)(Object(a.a)({},n.audioLocation),{},{offset:o}))}:t.updateUserLastLocation(Object(a.a)(Object(a.a)({},n.audioLocation),{},{offset:o}))}},n.handleAudioPlay=function(t,o){var e,a,i=n.props.onPageChange,u=t.id,d=t.title,l=t.audioIndex,s=t.playedByUser;u&&s&&i({id:u,title:d},!1,!1),n.props.onPlayStatusEvent(!0),n.audioLocation.id=u,n.audioLocation.audioIndex=l,n.audioLocation.displayTitle=d,n.audioLocation.offset=Math.floor(null!==(e=null==o?void 0:o.currentTime)&&void 0!==e?e:0),n.audioLocation.duration=Math.floor(null!==(a=null==o?void 0:o.duration)&&void 0!==a?a:0),n.audioElementRef=o,n.updateLocationTimer=setInterval(n.updateAudioLastLocation,6e4*v.l),n.audioElementRef.onpause=n.handleAudioPause,n.audioElementRef.onEnd=n.handleAudioEnd,n.updateAudioLastLocation()},n.handleAudioPause=function(){n.props.onPlayStatusEvent(!1),n.updateLocationTimer&&clearInterval(n.updateLocationTimer),n.updateAudioLastLocation()},n.handleAudioEnd=function(){n.props.onPlayStatusEvent(!1)},n.getLastPlayedAudio=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o={},e=n.props.tocAndAudioContents.audioContents,i=e.length?e[0]:null;if(t&&t.length&&t.forEach((function(t){t.key!==v.f&&t.key!==v.g&&t.key!==v.i&&t.key!==v.k&&t.key!==v.m||(o[t.key]=t.value)})),Object.keys(o).length){var u=e.find((function(t){return t.id===o.audioUrn})),d=u?Object(a.a)({},u):null;if(d)return d.startTime=o.audioOffset,d}return i},n.handleAudioBookClickAway=function(){n.isPlaying?n.setState((function(t){return{expanded:!1,showPlayer:t.showPlayer}})):(n.setState({showPlayer:!1}),window.sessionStorage.getItem(v.j)&&window.sessionStorage.removeItem(v.j))},n.handleExpand=function(t){n.setState({expanded:t})},n.audioContentList=function(){var t=n.state.tocContent,o=[],e=t.list;e.forEach((function(t){if(t.audio&&t.audio.src){var e=t.audio.src[0];!function t(e,a){e.forEach((function(e){var i=a;e.audio&&e.audio.src&&(i=e.audio.src[0]).toLowerCase()===a.toLowerCase()&&o.push(e.chapterId),e.children.length&&t(e.children,i)}))}(t.children,e)}})),n.setAudioEmpty(o)},n.setAudioEmpty=function(t){var o=n.state.tocContent,e=o.list;e.forEach((function(o){t.forEach((function(t){if(o.id===t)o.audio=null;else{var e=o.children;e.length&&function t(o,e){o.forEach((function(o){if(o.id===e)o.audio=null;else{var a=o.children;a.length&&t(a,e)}}))}(e,t)}}))})),n.setState({tocContent:o})};var u=t.tocAndAudioContents.tableOfContents;return n.state={expanded:!0,showPlayer:!1,tocContent:u},n.isAudioBook=!0,n.isPlaying=!1,n.updateLocationTimer=null,n.audioElementRef=null,n.audioLocation={activity:v.a,type:"audioUrn",id:"",offset:0,duration:0,audioIndex:0},n.initialize(),n}return Object(n.a)(e,[{key:"componentWillUnmount",value:function(){this.audioBookOpenSubscription&&this.audioBookOpenSubscription(),this.audioBookCloseSubscription&&this.audioBookCloseSubscription(),this.playerOpenSubscription&&this.playerOpenSubscription(),this.playerCloseSubscription&&this.playerCloseSubscription()}},{key:"render",value:function(){var t=this.state,o=t.expanded,e=t.showPlayer,i=t.tocContent,n=this.props,u=n.beta,d=n.currentPageId,l=n.locale,r=n.isMinimized,c=n.isVisible,p=n.tocAndAudioContents.audioContents,f=n.userLastLocations,h=n.analyticsEventData,A=f.getLocationByActivity(v.a),m=A&&A.offset&&A.offset?+A.offset:0,L=A&&A?Object(a.a)(Object(a.a)({},A),{},{offset:m,lastActivity:f.lastActivity}):{};return p&&p.length&&f.isFetched?s.a.createElement(s.a.Fragment,null,s.a.createElement(y,{analyticsEventData:h,beta:u,expanded:o,handleExpand:this.handleExpand,onAudioPlay:this.handleAudioPlay,playAudio:L,locale:l,onClickAway:this.handleAudioBookClickAway,playlistContent:i,showPlayer:e,isMinimized:r,scrollToAudio:{audioId:d,updateScroll:c}})):null}}]),e}(l.PureComponent);A.defaultProps={analyticsEventData:{},audioContents:[],beta:!1,isMinimized:!1,locale:v.K,onPageChange:function(){},onPlayStatusEvent:function(){},tocAndAudioContents:{},userLastLocations:{}};o.default=A}}]);