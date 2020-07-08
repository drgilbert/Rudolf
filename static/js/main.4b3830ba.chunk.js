(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{73:function(e,t,n){e.exports=n(88)},75:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);n(74),n(75);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=n(53),u=n(21),s=n(14),l=n(113),f=n(114),d=n(115),m=n(56),p=n(57),h=n(66),v=n(65),b=n(45),w=n(58),E=function(e){var t=e.formulas,n=void 0===t?[]:t,a=e.forest;return{nodeType:"formulas",formulas:n,forest:void 0===a?[]:a,id:e.id}},g=function e(t,n){"contradiction"!==t.nodeType&&("finished"!==t.nodeType?0===t.forest.length?t.forest=n(t.id):t.forest.forEach((function(t){return e(t,n)})):console.warn("shouldn't try to append to finished branch"))},y=function(e){return E({formulas:e.map((function(e,t){return k(e,t+1)})),forest:[],id:""})},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return{value:e,resolved:!1,row:t}},j=function(e){return null!=e&&"formulas"===e.nodeType&&0===e.forest.length},O=function(e){return S(e)+e.formulas.length},S=function(e){return e.formulas[0].row},C=function(e,t){for(var n=[];e-- >0;)n.push(k("",t++));return n},x=function(e,t){var n,a=function(e){return e.split("").map((function(t){if("0"===t||"1"===t)return Number(t);throw new Error("invalid character in node id: ".concat(t," in ").concat(e))}))}(t),r=e,o=Object(w.a)(a);try{for(o.s();!(n=o.n()).done;){var c=n.value;if("formulas"!==r.nodeType)throw new Error("Failed to get node path");r=r.forest[c]}}catch(i){o.e(i)}finally{o.f()}return r},R=function(e){return"formulas"===e.nodeType},N=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"updateFormula",value:function(e,t,n){x(this.draftState.tree,e).formulas[t].value=n}},{key:"updateJustification",value:function(e,t){Object.assign(this.draftState.justifications[e],t)}},{key:"updateContradiction",value:function(e,t){Object.assign(x(this.draftState.tree,e),{contradictoryRows:t})}},{key:"updateFeedback",value:function(e){this.draftState.feedback=e}},{key:"toggleResolved",value:function(e,t){var n=x(this.draftState.tree,e);n.formulas[t].resolved=!n.formulas[t].resolved}},{key:"createTree",value:function(e){this.draftState.tree=y(e),this.draftState.nextRow=e.length+1,this.draftState.justifications={1:{rule:"",parentRow:""}}}},{key:"continueBranch",value:function(e,t){var n=this,a=x(this.draftState.tree,e);g(a,(function(e){return[E({id:"".concat(e,"0"),formulas:C(t,n.draftState.nextRow)})]})),this.draftState.justifications[this.draftState.nextRow]={rule:"",parentRow:""},this.draftState.nextRow+=t}},{key:"splitBranch",value:function(e,t){var n=this,a=x(this.draftState.tree,e);g(a,(function(e){var a=C(t,n.draftState.nextRow);return[E({id:"".concat(e,"0"),formulas:a}),E({id:"".concat(e,"1"),formulas:a})]})),this.draftState.justifications[this.draftState.nextRow]={rule:"",parentRow:""},this.draftState.nextRow+=t}},{key:"markContradiction",value:function(e){var t,n=x(this.draftState.tree,e);n.forest=[(t=n.id,{nodeType:"contradiction",formulas:[],contradictoryRows:"",id:"".concat(t,"0")})]}},{key:"markFinished",value:function(e){var t;x(this.draftState.tree,e).forest=[(t=e,{nodeType:"finished",formulas:[],id:"".concat(t,"0")})]}},{key:"reopenBranch",value:function(e){x(this.draftState.tree,e).forest=[]}}]),n}(b.ImmerReducer),T="P->Q,P,~Q".split(","),P={tree:y(T),nextRow:T.length+1,justifications:{1:{rule:"AS",parentRow:""}},feedback:{errorMessage:"Nothing yet."}},B=Object(b.createReducerFunction)(N),A=Object(b.createActionCreators)(N),M=A.continueBranch,F=A.createTree,I=A.markContradiction,D=A.markFinished,z=A.reopenBranch,Q=A.splitBranch,J=A.toggleResolved,L=A.updateContradiction,W=A.updateFeedback,q=A.updateFormula,U=A.updateJustification,G=n(50),H=n(108),X=n(64),$=Object(X.a)({Bounder:{minWidth:"100%",position:"fixed",bottom:0,display:"flex",flexDirection:"column",zIndex:10},TextArea:{overflow:"hidden scroll",fontSize:"16px"},Toggle:{backgroundColor:"black",color:"white",fontSize:"13px",alignSelf:"flex-end","&:hover":{cursor:"pointer"},padding:"2px 10px"}}),K=n(44),V=n(35),Y=n.n(V),Z=n(52),_=function e(t,n){var a=t.formulas,r=t.forest,o=t.id,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=c.concat(a);if(0===r.length)return{label:re(i),rule:"",forest:[],id:o};var l=Object(s.a)(r,1),f=l[0];if("formulas"===f.nodeType){var d=n[S(f)],m=d.rule,p=Number(d.parentRow);if(!oe(p))throw new Error('Cited row must be a positive integer. Got "'.concat(p,'"'));if(p>=S(f))throw new Error("Row cited (".concat(p,") must be less than current row (").concat(S(f),")."));return{label:re(i),rule:"St",forest:[{label:ae(i,p),rule:m,id:o,forest:r.map((function(t){return e(t,n,i.filter((function(e){return!(e.row===p)})))}))}]}}if("contradiction"===f.nodeType){var h=f.contradictoryRows.split(",").map(Number),v=Object(s.a)(h,2),b=v[0],w=v[1];if(![b,w].every(oe))throw new Error('Contradiction must cite 2 rows, separated by a comma. Got "'.concat(f.contradictoryRows,'"'));var E=i.filter((function(e){return[b,w].includes(e.row)})).sort((function(e,t){return t.value.length-e.value.length})),g=Object(s.a)(E,2),y=g[0],k=g[1];if(!y||!k)throw new Error("Contradiction cites non-existent row");var j=re([y].concat(Object(u.a)(i.filter((function(e){return![b,w].includes(e.row)}))),[k]));return{label:re(i),rule:"St",id:o,forest:[{label:j,rule:"Ax",id:f.id,forest:[{label:"",rule:"",forest:[]}]}]}}if("finished"===f.nodeType)return{label:re(i),rule:"St",id:o,forest:[{label:re(i),rule:"Lit",id:f.id,forest:[{label:"",rule:"",forest:[]}]}]};throw new Error("this was supposed to be exhaustive")},ee=function(e,t){var n={};if(e.forest.length){!function e(t,a,r){if("string"===typeof t.id){if("Ax"===t.rule||"Lit"===t.rule)return void(n[t.id]=ce(a));n[t.id]=r,t.forest.forEach((function(t,n){e(t,a.forest[n],ce(a))}))}else t.forest.forEach((function(t,n){e(t,a.forest[n],r)}))}(e,t,{class:"correct",info:"Assumptions"})}return n},te=function(){var e=Object(Z.a)(Y.a.mark((function e(t){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){try{Carnap.checkIchikawaJenkinsSLTableau(t,(function(t){e(t)}))}catch(a){n(a)}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(Z.a)(Y.a.mark((function e(t,n){var a,r;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=_(t,n),e.next=3,te(a);case 3:return r=e.sent,e.abrupt("return",{sequent:a,feedback:ee(a,r)});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ae=function(e,t){var n=e.findIndex((function(e){return e.row===t})),a=e[n],r=e.slice(0,n).concat(e.slice(n+1)),o=[].concat(Object(u.a)(r),[a]);return re(o)},re=function(e){return e.map((function(e){return e.value})).join(",").concat(":|-:")},oe=function(e){return e>0},ce=function(e){e.forest;return Object(K.a)(e,["forest"])},ie=function(e){var t=e.tree,n=e.justifications,o=e.feedback,c=e.dispatch;Object(a.useEffect)((function(){window.Carnap&&ne(t,n).then((function(e){var t=e.sequent,n=e.feedback;return c(W({feedback:n,sequent:t}))})).catch((function(e){var t=e.message;return c(W({errorMessage:t}))}))}),[c,n,t]);var i=$(),u=Object(a.useState)(!1),l=Object(s.a)(u,2),f=l[0],d=l[1];return r.a.createElement("div",{className:i.Bounder},r.a.createElement("div",{className:i.Toggle,onClick:function(){d(!f)}},f?"close":"open"),r.a.createElement(H.a,{className:i.TextArea,value:JSON.stringify({tree:t,justifications:n,feedback:o}),style:{maxHeight:f?"50vh":"0vh"}}))},ue=n(117),se=n(23),le=n.n(se),fe=n(40),de=n(112),me=n(116),pe=n(119),he=function(e){var t=e.open,n=e.dispatch,a=e.index,o=e.anchorEl,c=e.onClose,i=e.node,u=i.formulas[a];return r.a.createElement(me.a,{open:t,anchorEl:o,onClose:c},r.a.createElement(pe.a,{onClick:function(){n(M(i.id,1)),c()}},"Continue Branch w/ 1 formula"),r.a.createElement(pe.a,{onClick:function(){n(Q(i.id,1)),c()}},"Split Branch w/ 1 formula"),r.a.createElement(pe.a,{onClick:function(){n(M(i.id,2)),c()}},"Continue Branch w/ 2 formulas"),r.a.createElement(pe.a,{onClick:function(){n(Q(i.id,2)),c()}},"Split Branch w/ 2 formulas"),r.a.createElement(pe.a,{onClick:function(){n(J(i.id,a)),c()}},"Mark as ",u.resolved?"Un":"","Resolved"),j(i)&&r.a.createElement(pe.a,{onClick:function(){n(I(i.id)),c()}},"Close Branch With Contradiction"),j(i)&&r.a.createElement(pe.a,{onClick:function(){n(D(i.id)),c()}},"Mark Branch Finished"),"contradiction"===i.nodeType&&r.a.createElement(pe.a,{onClick:function(){n(z(i.id)),c()}},"Reopen Branch"))},ve=function(e){var t=e.index,n=e.row,o=e.dispatch,c=e.node,i=c.formulas[t],u=i.value,l=i.resolved,f=Object(a.useState)(!1),d=Object(s.a)(f,2),m=d[0],p=d[1],h=Object(a.useRef)(null);return r.a.createElement("div",{className:"formula",ref:h,onContextMenu:function(e){e.preventDefault(),p(!0)}},r.a.createElement("span",null,n),r.a.createElement(le.a,{className:"label",onChange:function(e){return o(q(c.id,t,e.currentTarget.value))},value:u,placeholder:"formula"}),r.a.createElement(he,{open:m,onClose:function(){return p(!1)},dispatch:o,anchorEl:h.current,index:t,node:c}),l?r.a.createElement(de.a,null):"")},be=function(e){for(var t=e.diff,n=[],a=t;n.length<a;)n.push(r.a.createElement("div",{className:"spacer",key:a}));return(r.a.createElement("div",{className:"spacers-".concat(t)},n))},we=function e(t){var n,o,c=t.node,i=t.dispatch,u=t.justifications,s=t.feedbackMap,l=Object(K.a)(t,["node","dispatch","justifications","feedbackMap"]);if(s){var f,d=null!==(f=s[c.id])&&void 0!==f?f:"";n=d.info,o="correct"===d.class?"correct":"incorrect"}else n="",o="";if(R(c)){var m,p=c.id,h=c.formulas,v=c.forest,b="formulas"===(null===(m=v[0])||void 0===m?void 0:m.nodeType)?r.a.createElement(be,{diff:S(v[0])-O(c)}):void 0,w=u[S(c)],E=w.rule,g=w.parentRow;return r.a.createElement("div",{className:"node-container "},r.a.createElement(ue.a,{title:n,PopperProps:{style:{fontSize:16}}},r.a.createElement(fe.ArcherElement,{id:p,relations:v.map((function(e){return{targetId:e.id,targetAnchor:"top",sourceAnchor:"bottom"}}))},r.a.createElement("div",Object.assign({className:"node node-id=".concat(p," ").concat(o)},l),h.map((function(e,t){return r.a.createElement(ve,Object.assign({key:"".concat(e,"-").concat(t),node:c,index:t,dispatch:i},e))})),""!==c.id?r.a.createElement("div",{className:"justification"},r.a.createElement(le.a,{className:"rule",onChange:function(e){var t=e.currentTarget.value;return i(U(S(c),{rule:t}))},value:E,placeholder:"rule"}),r.a.createElement(le.a,{className:"row",onChange:function(e){var t=e.currentTarget.value;return i(U(S(c),{parentRow:t}))},value:g,placeholder:"row"})):"AS"))),r.a.createElement("div",{className:"children ".concat(v.length>1?"split":"stack")},v.map((function(t){return r.a.createElement(a.Fragment,{key:t.id},b,r.a.createElement(e,{node:t,dispatch:i,justifications:u,feedbackMap:s}))}))))}if("contradiction"===c.nodeType)return r.a.createElement(ue.a,{title:n,PopperProps:{style:{fontSize:16}}},r.a.createElement("div",Object.assign({className:"closed-branch-marker node ".concat(o)},l),"X",r.a.createElement(le.a,{className:"rule",onChange:function(e){var t=e.currentTarget.value;return i(L(c.id,t))},value:c.contradictoryRows,placeholder:"rows"})));if("finished"===c.nodeType)return r.a.createElement(ue.a,{title:n,PopperProps:{style:{fontSize:16}}},r.a.createElement("div",Object.assign({className:"finished-branch-marker ".concat(o)},l),"O"," "));throw new Error("Invariant violation: Invalid nodeType on node: ".concat(JSON.stringify(c)))},Ee=function(e){var t=e.onSubmit,n=e.premises,a=e.setPremises;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(n)}},r.a.createElement(le.a,{type:"text",name:"premises","aria-label":"Enter Premises",value:n,onChange:function(e){return a(e.target.value)}}),r.a.createElement("button",{className:"submit-premises",type:"submit"},"Declare Premises"))},ge=[["P->Q,P,~Q","Modus Ponens"],["~(~(P\\/Q)<->(~P/\\~Q))","De Morgen's Law"]],ye=function(e){var t=e.onChange;return r.a.createElement("select",{onChange:function(e){var n=e.currentTarget.value;t(n)}},ge.map((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return(r.a.createElement("option",{value:n,key:n},a))})))},ke=function(){var e,t=Object(a.useState)("P->Q,P,~Q"),n=Object(s.a)(t,2),o=n[0],c=n[1],m=a.useReducer.apply(void 0,Object(u.a)((e=B,[function(t,n){var a=Object(s.a)(t,3),r=a[0],o=a[1],c=a[2];switch(n.type){case"UNDO":var i=Object(G.a)(r),l=i[0];return[i.slice(1),l,[o].concat(Object(u.a)(c))];case"REDO":var f=Object(G.a)(c),d=f[0],m=f.slice(1);return[[o].concat(Object(u.a)(r)),d,m];default:return[[o].concat(Object(u.a)(r)),e(o,n),[]]}},[[],P,[]]]))),p=Object(s.a)(m,2),h=Object(s.a)(p[0],3),v=h[0],b=h[1],w=h[2],E=p[1],g=function(e){c(e);var t=e.split(",");E(F(t))};return r.a.createElement("main",{className:"App"},r.a.createElement(ye,{onChange:g}),r.a.createElement(Ee,{premises:o,onSubmit:g,setPremises:c}),r.a.createElement("span",{className:"tree-buttons"},r.a.createElement(l.a,{className:"undo-button",onClick:function(){E({type:"UNDO"})},disabled:!v.length},r.a.createElement(f.a,null)),r.a.createElement(l.a,{className:"redo-button",onClick:function(){E({type:"REDO"})},disabled:!w.length},r.a.createElement(d.a,null))),r.a.createElement(fe.ArcherContainer,{arrowLength:0,style:{zIndex:1},svgContainerStyle:{zIndex:-1},strokeColor:"black",noCurves:!1},r.a.createElement(we,{node:b.tree,dispatch:E,justifications:b.justifications,feedbackMap:b.feedback.feedback})),r.a.createElement(ie,Object(i.a)(Object(i.a)({},b),{},{dispatch:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[73,1,2]]]);
//# sourceMappingURL=main.4b3830ba.chunk.js.map