(this["webpackJsonpuriyyo-personal-page"]=this["webpackJsonpuriyyo-personal-page"]||[]).push([[0],{10:function(e,a,t){e.exports=t(20)},15:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),c=t.n(l),m=t(1),o=t(2),i=t(4),s=t(3),u=(t(15),t(9)),E=(t(6),t(8)),d=t.n(E);function h(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"TerminalBodyUser"},"uriyyo@ubuntu:"),r.a.createElement("span",{className:"TerminalLocation"},"~"),r.a.createElement("span",{className:"TerminalDollar"},"$"))}function y(e){return r.a.createElement("div",{className:"TerminalBodyText"},e.children)}function b(e){return r.a.createElement("span",{className:"TerminalCommand"},e.command)}function p(){return r.a.createElement("span",{className:"TerminalPromptCursor"})}function f(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"TerminalPrompt"},r.a.createElement(h,null),r.a.createElement(b,{command:e.command})),r.a.createElement("div",null,e.children))}function v(e){return r.a.createElement("div",{className:"TerminalPrompt"},r.a.createElement(h,null),r.a.createElement(b,{command:e.text}),r.a.createElement(p,null))}function N(e){return r.a.createElement("div",{className:"TerminalBodyText"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.href},e.text))}function g(e){return r.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)}var T=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={text:null,records:[r.a.createElement(f,{command:"whoami"},r.a.createElement(y,null,"Yurii Karabas"),r.a.createElement(y,null,r.a.createElement(g,{symbol:"\ud83d\udcab"}),"TOP-500 at @codewars",r.a.createElement(g,{symbol:"\ud83d\udcab"}))),r.a.createElement(f,{command:"echo $PRIMARY_SKILLS"},r.a.createElement(y,null,r.a.createElement(g,{symbol:"\ud83d\udc0d"})," Python"),r.a.createElement(y,null,r.a.createElement(g,{symbol:"\u2615"}),"\ufe0f Java")),r.a.createElement(f,{command:"echo $SECONDARY_SKILLS"},r.a.createElement(y,null,r.a.createElement(g,{symbol:"\ud83d\udee0"})," C/C++"),r.a.createElement(y,null,r.a.createElement(g,{symbol:"\ud83d\ude48"})," JavaScript"),r.a.createElement(y,null,r.a.createElement(g,{symbol:"\ud83c\udf31"})," Kotlin")),r.a.createElement(f,{command:"echo $EDUCATION"},r.a.createElement(y,null,"2015 - 2019 Lviv Polytechnic National University"),r.a.createElement(y,null,"            Bachelor's degree, Computer Engineering"),r.a.createElement(y,null,"2019 - 2020 Lviv Polytechnic National University"),r.a.createElement(y,null,"            Master's degree, System Programming")),r.a.createElement(f,{command:"echo $EXPERIENCE"},r.a.createElement(y,null,"2017 Jan - 2020 Mar GlobalLogic"),r.a.createElement(y,null,"                    Python/Java Software Engineer"),r.a.createElement(y,null,"2020 Apr - present Newfire Partners"),r.a.createElement(y,null,"                   Python Software Engineer")),r.a.createElement(f,{command:"ls contacts"},r.a.createElement(N,{href:"https://github.com/uriyyo",text:"@github"}),r.a.createElement(N,{href:"https://www.linkedin.com/in/yurii-karabas-b35653140/",text:"@linkedin"}),r.a.createElement(N,{href:"https://t.me/yurii_karabas",text:"@telegram"}),r.a.createElement(N,{href:"https://www.codewars.com/users/yurii_karabas",text:"@codewars"}),r.a.createElement(N,{href:"mailto:1998uriyyo@gmail.com",text:"@email"}))]},n}return Object(o.a)(t,[{key:"handleKey",value:function(e,a){var t=this.state.text,n=Object(u.a)(this.state.records);"backspace"===e?t=t.slice(0,t.length-1):"enter"===e?(""!==(t=t.trim())&&("clear"===t?n=[]:n.push(r.a.createElement(f,{command:t},r.a.createElement(y,null,'Unknown command "',t,'"')))),t=""):t=(t||"")+a.key,this.setState({text:t,records:n}),console.log(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"TerminalBody"},r.a.createElement(d.a,{handleKeys:["alphanumeric","enter","backspace","space"],onKeyEvent:function(a,t){return e.handleKey(a,t)}}),this.state.records,r.a.createElement(v,{text:this.state.text||""}))}}]),t}(r.a.Component),k=(t(19),function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"TerminalHeader"},r.a.createElement("button",{className:"TerminalButton TerminalButtonExit"},"\u2715"),r.a.createElement("button",{className:"TerminalButton"},"\u2500"),r.a.createElement("button",{className:"TerminalButton"},"\u25fb"),r.a.createElement("p",{className:"TerminalHeaderUser"},"uriyyo@ubuntu:~"))}}]),t}(r.a.Component)),w=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"Terminal"},r.a.createElement(k,null),r.a.createElement(T,null)))}}]),t}(r.a.Component);c.a.render(r.a.createElement(w,null),document.getElementById("root"))},6:function(e,a,t){}},[[10,1,2]]]);
//# sourceMappingURL=main.677cef75.chunk.js.map