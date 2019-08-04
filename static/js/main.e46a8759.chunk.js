(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(24)},21:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(11),o=a.n(r),l=(a(21),a(3)),c=a(4),s=a(6),m=a(5),u=a(7),d=(a(22),a(2)),p=a(12),h=a.n(p),f=a(15),T=a(1),v=a(13),b=Object(v.a)(function(e,t){return"SYNC_TIMER"===t.type?(e.timers.map(function(e){return e.id===t.payload.id&&(e.timerTime=t.payload.timerTime),e}),Object(T.a)({},e)):"NEW_STOPWATCH"===t.type?Object(T.a)({},e,{timers:[].concat(Object(f.a)(e.timers),[Object(T.a)({},t.payload)])}):"DELETE"===t.type?Object(T.a)({},e,{timers:e.timers.filter(function(e){return e.id!==t.payload.id})}):"TOGGLE_UPDATE"===t.type?Object(T.a)({},e,{timers:e.timers.map(function(e){return e.id===t.payload.id&&(e.timerTime=t.payload.timerTime,e.updateInfo=!e.updateInfo),e})}):"UPDATE_STOPWATCH"===t.type?Object(T.a)({},e,{timers:e.timers.map(function(e){return e.id===t.payload.id&&(e.title=t.payload.title,e.project=t.payload.project,e.updateInfo=!e.updateInfo),e})}):"CANCEL_UPDATE"===t.type?Object(T.a)({},e,{timers:e.timers.map(function(e){return e.id===t.payload.id&&(e.updateInfo=!e.updateInfo),e})}):e},{timers:[{id:0,title:"Primer cron\xf3metro",project:"Makeitreal",timerTime:475003,updateInfo:!1}]}),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onChangeT=function(e){a.setState({title:e.target.value})},a.onChangeP=function(e){a.setState({project:e.target.value})},a.createInfo=function(e){e.preventDefault(),b.dispatch({type:"NEW_STOPWATCH",payload:{id:a.nextUniqueId(),title:a.state.title,project:a.state.project,timerTime:0,updateInfo:!1}}),a.props.onToggleAddTimer(),a.setState({title:"",project:""})},a.state={title:"",project:""},h.a.enableUniqueIds(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("form",null,n.a.createElement("div",null,n.a.createElement("label",null,"Title"),n.a.createElement("input",{placeholder:"Title",value:this.state.title,onChange:this.onChangeT}),n.a.createElement("label",null,"Proyecto"),n.a.createElement("input",{placeholder:"Proyecto",value:this.state.project,onChange:this.onChangeP})),n.a.createElement("div",{className:"buttons"},n.a.createElement("div",{className:"button half blue",onClick:this.createInfo},"Create"),n.a.createElement("div",{className:"button half red",onClick:this.props.onToggleAddTimer},"Cancel")))}}]),t}(n.a.Component),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={timerOn:!1,timerStart:0,timerTime:e.timer.timerTime},a.startTimer=a.startTimer.bind(Object(d.a)(a)),a.stopTimer=a.stopTimer.bind(Object(d.a)(a)),a.deleteStopWatch=a.deleteStopWatch.bind(Object(d.a)(a)),a.updateStopWatch=a.updateStopWatch.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"timer"},this.millisecondsToHuman(this.state.timerTime)),n.a.createElement("div",{className:"options"},n.a.createElement("span",{className:"red",onClick:this.deleteStopWatch},"Delete"),n.a.createElement("span",{className:"yellow",onClick:this.updateStopWatch},"Update")),!1===this.state.timerOn?n.a.createElement("div",{className:"button green",onClick:this.startTimer},"Start"):n.a.createElement("div",{className:"button red",onClick:this.stopTimer},"Stop"))}},{key:"millisecondsToHuman",value:function(e){var t=Math.floor(e/1e3%60),a=Math.floor(e/1e3/60%60),i=Math.floor(e/1e3/60/60);return[this.pad(i.toString(),2),this.pad(a.toString(),2),this.pad(t.toString(),2)].join(":")}},{key:"pad",value:function(e,t){for(var a=e;a.length<t;)a="0".concat(a);return a}},{key:"startTimer",value:function(e){var t=this;e.preventDefault(),this.setState({timerOn:!0,timerTime:this.state.timerTime,timerStart:Date.now()-this.state.timerTime}),this.timer=setInterval(function(){t.setState({timerTime:Date.now()-t.state.timerStart})},1e3)}},{key:"stopTimer",value:function(e){e.preventDefault(),this.setState({timerOn:!1}),clearTimeout(this.timer),b.dispatch({type:"SYNC_TIMER",payload:Object(T.a)({},this.props.timer,{timerTime:this.state.timerTime})})}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"deleteStopWatch",value:function(){b.dispatch({type:"DELETE",payload:Object(T.a)({},this.props.timer)})}},{key:"updateStopWatch",value:function(){b.dispatch({type:"TOGGLE_UPDATE",payload:Object(T.a)({},this.props.timer,{timerTime:this.state.timerTime})})}}]),t}(n.a.Component),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onChangeT=function(e){a.setState({title:e.target.value})},a.onChangeP=function(e){a.setState({project:e.target.value})},a.updateInfo=function(e){e.preventDefault(),b.dispatch({type:"UPDATE_STOPWATCH",payload:{id:a.props.values.id,title:a.state.title,project:a.state.project}})},a.cancelUpdate=function(e){e.preventDefault(),b.dispatch({type:"CANCEL_UPDATE",payload:{id:a.props.values.id}})},a.state={title:e.values.title,project:e.values.project,updateInfo:e.values.updateInfo},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("form",null,n.a.createElement("div",null,n.a.createElement("label",null,"Title"),n.a.createElement("input",{placeholder:"Title",value:this.state.title,onChange:this.onChangeT}),n.a.createElement("label",null,"Proyecto"),n.a.createElement("input",{placeholder:"Proyecto",value:this.state.project,onChange:this.onChangeP})),n.a.createElement("div",{className:"buttons"},n.a.createElement("div",{className:"button half blue",onClick:this.updateInfo},"Update"),n.a.createElement("div",{className:"button half red",onClick:this.cancelUpdate},"Cancel")))}}]),t}(n.a.Component),O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).onToggleAddTimer=function(){e.setState(function(e){return{isAddTimerActive:!e.isAddTimerActive}})},e.state={timers:[{id:0,title:"Primer cron\xf3metro",project:"Makeitreal",timerTime:475003,updateInfo:!1}],isAddTimerActive:!1},b.subscribe(function(){e.setState({timers:b.getState().timers})}),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"header"},"Timers"),this.state.timers.map(function(e){return e.updateInfo?n.a.createElement("div",{className:"frame",key:e.id},n.a.createElement(y,{values:e})):n.a.createElement("div",{className:"frame",key:e.id},n.a.createElement("div",{className:"title"},e.title),n.a.createElement("span",{className:"subtitle"},e.project),n.a.createElement(j,{timer:e,key:e.id}))}),this.state.isAddTimerActive&&n.a.createElement("div",{className:"frame"},n.a.createElement(E,{onToggleAddTimer:this.onToggleAddTimer})),!this.state.isAddTimerActive&&n.a.createElement("div",{className:"add",onClick:this.onToggleAddTimer},"+"))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.e46a8759.chunk.js.map