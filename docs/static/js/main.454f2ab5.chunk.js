(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{26:function(e,t,r){},75:function(e,t,r){e.exports=r(87)},80:function(e,t,r){},84:function(e,t,r){},85:function(e,t,r){},86:function(e,t,r){},87:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(27),o=r.n(s),i=(r(80),r(2)),p=r(3),c=r(5),l=r(4),b=(r(81),r(13)),u=r(8),d=r.n(u),h=r(7),m=r.n(h);function f(e){if(e<0)throw"Ordinal got negative number";var t,r=["th","st","nd","rd","th","th","th","th","th","th"];return t=e%100===11||e%100===12||e%100===13?r[0]:r[e%10],"".concat(e).concat(t)}var g={1:"ckbsxgcv10cgs1jq63cjudtph",2:"ckbsxgd7k0cfr1irzhk3qknhf",3:"ckbsxgcxk0aq71imh5cjs1bdm",4:"ckbsxgd900chl1jla6l7ad614",5:"ckbsxgdll0ch51io45er7jmc2",6:"ckbsxgdde0cfx1hmikgk2vj2g",7:"ckbsxgds80ceq1ilfgkmvnnli",8:"ckbsxgdci0cgh1ip7y8rxhzk1",9:"ckbsxgd330cfy1imx2vgfw41x",10:"ckbsxgdkb0cg11imx8zh8dsjw",11:"ckbsxgdjl0cht1hmq5pzgqe15",13:"ckbsxgbkm0ce61ipn6wkpsr2r",14:"ckbsxgdbh0chq1hmqqobj6k3o",15:"ckbsxgddt0cen1ilf2ysj0mk3",16:"ckbsxgdnk0bop1ipwvgq29hzn",17:"ckbsxgddp0chk1ipb7yktxj5q",18:"ckbsxgdp40chm1ipb43hlr9oc",19:"ckbsxgbto0chx1ipj0za1kq2w",20:"ckbsxgdkz0chl1ipbk9avbvej",95:"ckbsxfkm80cha1ipj2ggmxrqz",96:"ckbsxfklp0ch91ipjhw8v3kir",97:"ckbsxfkt30cfx1jq6t9hetjco",98:"ckbsxfknn0ce71ipd7vfzim9p",99:"ckbsxfki50cf71imx4jiwed5o",100:"ckbsxfkmz0cf61hmiprnu9140",generic:"ckbu2kkj1030b1io3jfo1ykiq"};function v(e){return 1789+2*(e-1)}var R=225/-444027,y=225-203*R;function x(e){return e*R+y}console.assert(225===x(203)),console.assert(0===x(444230));for(var k=["+",["*",["get","turnout"],R],y],j=r(1),w=(r(84),[]),E=0;E<5;++E){var z=88805.4*(E+1);w.push(z)}var N=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"componentDidMount",value:function(){console.assert(this.legendContainer);var e=j.h().domain([j.g(w),j.f(w)]).range([0,this.props.width]);j.j(this.legendContainer).append("svg").attr("width",this.props.width).attr("height",20).append("g").call(j.a(e))}},{key:"render",value:function(){var e=this,t=w.map((function(e){return"hsl(".concat(x(e),", 100%, 50%)")})),r={background:"linear-gradient(to right, ".concat(m.a.join(t,", "),")"),border:"1px solid black",width:"".concat(this.props.width,"px"),height:"10px"};return a.a.createElement("div",null,a.a.createElement("div",{className:"heat-key",style:r}),a.a.createElement("div",{className:"heat-key-legend",ref:function(t){return e.legendContainer=t}}))}}]),r}(n.Component);r(26);d.a.accessToken="pk.eyJ1IjoiZHNoZWFyZXIiLCJhIjoiY2syam1qaThuMTEzazNsbnZxNHhidnZqcyJ9.Q0wOV0EePfEaRyw1oEK3UA";var O={id:"district-boundary",type:"line",metadata:{"mapbox:group":"1444934295202.7542"},source:"districts","source-layer":"districts",filter:["all",["match",["get","group"],["boundary"],!0,!1]],layout:{"line-join":"round","line-cap":"round"},paint:{"line-dasharray":["step",["zoom"],["literal",[2,0]],7,["literal",[2,2,6,2]]],"line-width":["interpolate",["linear"],["zoom"],7,.75,12,1.5],"line-opacity":["step",["zoom"],0,5,1],"line-color":["interpolate",["linear"],["zoom"],3,"hsl(0, 0%, 80%)",7,"hsl(0, 0%, 70%)"]}},q={id:"admin-1-boundary",type:"line",metadata:{"mapbox:group":"1444934295202.7542"},source:"states","source-layer":"states",filter:["all",["match",["get","group"],["boundary"],!0,!1]],layout:{"line-join":"round","line-cap":"round"},paint:{"line-dasharray":["step",["zoom"],["literal",[2,0]],7,["literal",[2,2,6,2]]],"line-width":2,"line-opacity":["interpolate",["linear"],["zoom"],2,0,3,1],"line-color":["interpolate",["linear"],["zoom"],3,"hsl(0, 0%, 80%)",7,"hsl(0, 0%, 70%)"]}},C={id:"admin-1-boundary-bg",type:"line",metadata:{"mapbox:group":"1444934295202.7542"},source:"states","source-layer":"states",filter:["all",["match",["get","group"],["boundary"],!0,!1]],layout:{"line-join":"bevel"},paint:{"line-blur":["interpolate",["linear"],["zoom"],3,0,8,3],"line-width":["interpolate",["linear"],["zoom"],7,3.75,12,5.5],"line-opacity":["interpolate",["linear"],["zoom"],7,0,8,.75],"line-dasharray":[1,0],"line-translate":[0,0],"line-color":"hsl(0, 0%, 84%)"}},I={id:"state-label",type:"symbol",source:"states","source-layer":"states",minzoom:3,maxzoom:5,filter:["all",["match",["get","group"],["label"],!0,!1]],layout:{"text-size":["interpolate",["cubic-bezier",.85,.7,.65,1],["zoom"],4,["step",["get","symbolrank"],10,6,9.5,7,9],9,["step",["get","symbolrank"],24,6,18,7,14]],"text-transform":"uppercase","text-font":["DIN Offc Pro Bold","Arial Unicode MS Bold"],"text-field":["get","titleShort"],"text-letter-spacing":.15,"text-max-width":6},paint:{"text-halo-width":1,"text-halo-color":"hsl(0, 0%, 100%)","text-color":"hsl(0, 0%, 66%)"}};var Z=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"componentDidMount",value:function(){var e=this;d.a.clearStorage();var t={container:this.mapContainer,maxPitch:0,touchPitch:!1,dragRotate:!1};void 0!==this.props.center&&(t.center=this.props.center),void 0!==this.props.zoom&&(t.zoom=this.props.zoom),this.map=new d.a.Map(t),this.map.setStyle("mapbox://styles/dshearer/ckbu2kkj1030b1io3jfo1ykiq"),this.map.on("style.load",(function(){var t="mapbox://dshearer.states-".concat(e.props.congress),r="mapbox://dshearer.districts-".concat(e.props.congress);console.log(t),console.log(r),e.map.addSource("states",{type:"vector",url:t}),e.map.addSource("districts",{type:"vector",url:r}),e.map.addLayer(I),e.map.addLayer(C),e.map.addLayer(q),e.map.addLayer(O),e.map.addLayer(function(e){var t={id:"highlight-state",type:"fill",source:"districts","source-layer":"districts",filter:["all",["match",["get","group"],["boundary"],!0,!1],["has","turnout"]],paint:{"fill-color":["concat","hsl(",["to-string",k],", 100%, 50%)"],"fill-opacity":.2,"fill-antialias":!1}};return e&&t.filter.push(["match",["get","state"],[e],!0,!1]),t}()),e.map.addLayer(function(e){var t={id:"nbr-voters",type:"symbol",metadata:{"mapbox:group":"1444934295202.7542"},source:"districts","source-layer":"districts",minzoom:5,maxzoom:9,filter:["all",["match",["get","group"],["label"],!0,!1],["has","turnout"]],layout:{"text-size":["interpolate",["cubic-bezier",.85,.7,.65,1],["zoom"],5,10,9,["step",["get","symbolrank"],24,3,14,6,18]],"text-transform":"none","text-font":["DIN Offc Pro Regular","Arial Unicode MS Regular"],"text-field":["step",["zoom"],"",5,["get","turnoutStr"]],"text-letter-spacing":.15,"text-max-width":10,"text-allow-overlap":!0,"text-offset":[0,.75]},paint:{"text-halo-width":1,"text-halo-color":"hsl(0, 0%, 100%)","text-color":"hsl(0, 0%, 29%)"}};return e&&t.filter.push(["match",["get","state"],[e],!0,!1]),t}()),e.highlightedState=e.props.highlightState}))}},{key:"componentWillUnmount",value:function(){this.map&&(this.map.remove(),this.map=void 0)}},{key:"render",value:function(){var e=this;return a.a.createElement("figure",{className:"map"},a.a.createElement("div",{ref:function(t){return e.mapContainer=t},style:{margin:"0"}}),a.a.createElement(N,{width:550}),a.a.createElement("figcaption",null,"Number of voters in districts of the ",f(this.props.congress)," Congress.",a.a.createElement("br",null),"(Zoom in to see the numbers.)"))}}]),r}(n.Component);d.a.accessToken="pk.eyJ1IjoiZHNoZWFyZXIiLCJhIjoiY2syam1qaThuMTEzazNsbnZxNHhidnZqcyJ9.Q0wOV0EePfEaRyw1oEK3UA";n.Component;var L={1:{nbrReps:44,voters:1471},10:{nbrReps:125,voters:4353},100:{nbrReps:435,voters:142912},101:{nbrReps:435,voters:199674},102:{nbrReps:435,voters:151459},103:{nbrReps:435,voters:232838.5},104:{nbrReps:435,voters:169280},105:{nbrReps:435,voters:215136},106:{nbrReps:435,voters:161627},107:{nbrReps:435,voters:229761},108:{nbrReps:435,voters:174454.5},109:{nbrReps:435,voters:272049},11:{nbrReps:129,voters:4711},110:{nbrReps:435,voters:192380},111:{nbrReps:435},112:{nbrReps:435},113:{nbrReps:435},114:{nbrReps:435},115:{nbrReps:435},12:{nbrReps:122,voters:4787.5},13:{nbrReps:174,voters:3705},14:{nbrReps:171,voters:6009.5},15:{nbrReps:166,voters:5332},16:{nbrReps:170,voters:6963.5},17:{nbrReps:173,voters:4239.5},18:{nbrReps:193,voters:4399},19:{nbrReps:198,voters:3406},2:{nbrReps:58,voters:2018.5},20:{nbrReps:197},21:{nbrReps:194},22:{nbrReps:191},23:{nbrReps:222},24:{nbrReps:217},25:{nbrReps:230},26:{nbrReps:229},27:{nbrReps:230},28:{nbrReps:214},29:{nbrReps:224},3:{nbrReps:77,voters:2265},30:{nbrReps:236},31:{nbrReps:241},32:{},33:{nbrReps:239},34:{nbrReps:236},35:{nbrReps:242},36:{nbrReps:241},37:{},38:{nbrReps:187},39:{nbrReps:202},4:{voters:2071},40:{nbrReps:234},41:{nbrReps:259},42:{nbrReps:256},43:{nbrReps:291},44:{nbrReps:307},45:{nbrReps:305},46:{nbrReps:303},47:{},48:{nbrReps:331},49:{nbrReps:334},5:{nbrReps:94,voters:2069},50:{nbrReps:331},51:{nbrReps:354},52:{nbrReps:346},53:{nbrReps:368},54:{nbrReps:364},55:{nbrReps:363},56:{nbrReps:371},57:{nbrReps:365},58:{},59:{},6:{nbrReps:96,voters:3400.5},60:{nbrReps:396},61:{nbrReps:435},62:{nbrReps:435},63:{nbrReps:435},64:{nbrReps:435},65:{nbrReps:435},66:{nbrReps:435},67:{nbrReps:435},68:{nbrReps:435},69:{nbrReps:435},7:{nbrReps:92,voters:3613},70:{nbrReps:435},71:{nbrReps:435},72:{nbrReps:435},73:{nbrReps:435},74:{nbrReps:435},75:{nbrReps:435},76:{nbrReps:435},77:{nbrReps:435},78:{nbrReps:435},79:{nbrReps:435},8:{voters:4288},80:{nbrReps:435},81:{nbrReps:435},82:{nbrReps:435},83:{nbrReps:435},84:{nbrReps:435},85:{nbrReps:435},86:{nbrReps:435},87:{nbrReps:435},88:{nbrReps:435},89:{nbrReps:435},9:{nbrReps:120,voters:3374},90:{nbrReps:435},91:{nbrReps:435},92:{nbrReps:435},93:{nbrReps:435},94:{nbrReps:435},95:{nbrReps:435,voters:176194},96:{nbrReps:435,voters:131910},97:{nbrReps:435,voters:179622},98:{nbrReps:435,voters:155316.5},99:{nbrReps:435,voters:203857}},M=(r(85),r(7));var S=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"componentDidMount",value:function(){var e=10,t=50,r=40,n=70,a=this.props.width-n-t,s=this.props.height-e-r,o=this.props.minCongress;void 0===o&&(o=1);var i=this.props.maxCongress;void 0===i&&(i=1e3);var p=M.keys(L).filter((function(e){return parseInt(e)>=o})).filter((function(e){return parseInt(e)<=i})).map((function(e){var t=L[e],r=v(parseInt(e));return t.year=j.k("%Y")(r),t.isPresElect=function(e){return(e-1789)%4==0}(r),t})),c=j.i().domain(j.d(p,(function(e){return e.year}))).range([0,a]),l=j.h().domain([0,j.f(p,(function(e){return e.voters}))]).nice().range([s,0]),b=j.h().domain([0,j.f(p,(function(e){return e.nbrReps}))]).nice().range([s,0]),u=j.e().defined((function(e){return void 0!==e.voters})).x((function(e){return c(e.year)})).y((function(e){return l(e.voters)})),d=j.e().defined((function(e){return void 0!==e.nbrReps})).x((function(e){return c(e.year)})).y((function(e){return b(e.nbrReps)})),h=j.j(this.container).append("svg").attr("width",a+n+t).attr("height",s+e+r).append("g").attr("transform","translate("+n+","+e+")");h.append("g").attr("transform","translate(0,"+s+")").call(j.a(c)),h.append("g").attr("class","axisVoters").call(j.b(l)),h.append("g").attr("class","axisNbrReps").attr("transform","translate("+a+", 0)").call(j.c(b)),h.append("text").attr("class","axisVotersLabel").attr("transform","rotate(-90)").attr("y",0-n).attr("x",0-s/2).attr("dy","1em").style("text-anchor","middle").text("# of voters per rep"),h.append("text").attr("class","axixNbrRepsLabel").attr("transform","rotate(90)").attr("y",-a-35).attr("x",s/2).style("text-anchor","middle").text("# of reps"),h.append("path").datum(p.filter(u.defined())).attr("class","lineMissing").attr("fill","none").attr("d",u),h.append("path").datum(p).attr("class","lineVoters").attr("fill","none").attr("d",u),h.append("path").datum(p.filter(d.defined())).attr("class","lineMissing").attr("fill","none").attr("d",d),h.append("path").datum(p).attr("class","lineNbrReps").attr("fill","none").attr("d",d)}},{key:"render",value:function(){var e=this,t={width:this.props.width};return a.a.createElement("div",{className:"graph",style:t,ref:function(t){return e.container=t}})}}]),r}(n.Component);r(86);var H=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){v(this.props.congress);return a.a.createElement("div",{className:"story-part"},a.a.createElement("div",null,a.a.createElement(Z,{congress:this.props.congress,center:[-96.429,38.3],zoom:2.5})))}}]),r}(n.Component),J=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("section",{className:"intro"},a.a.createElement("p",{className:"fact"},"You are represented in the House of Representatives by ",a.a.createElement("strong",null,"one")," person."),a.a.createElement("p",{className:"fact"},"You share this person with about ",a.a.createElement("strong",null,"300,000"),"\xa0active voters."),a.a.createElement("p",{className:"fact"},"Is your voice ",a.a.createElement("em",null,"really")," heard?")),a.a.createElement("section",{className:"how-did-it-get-this-way"},a.a.createElement("h2",null,"How Did It Get This Way?"),a.a.createElement("p",{className:"fact"},"From the beginning, the House of Representatives expanded along with population."),a.a.createElement(S,{width:500,height:250,maxCongress:20}),a.a.createElement("div",{className:"story"},a.a.createElement(H,{congress:"5"}),a.a.createElement(H,{congress:"15"})),a.a.createElement("p",{className:"fact"},"But in ",a.a.createElement("strong",null,"1922"),", Congress froze the House at ",a.a.createElement("strong",null,"435"),"\xa0congresspeople. That\u2019s where it is ",a.a.createElement("strong",null,"today"),"."),a.a.createElement(S,{width:500,height:250,minCongress:95}),a.a.createElement("div",{className:"story"},a.a.createElement(H,{congress:"95"}),a.a.createElement(H,{congress:"109"}))))}}]),r}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[75,1,2]]]);
//# sourceMappingURL=main.454f2ab5.chunk.js.map