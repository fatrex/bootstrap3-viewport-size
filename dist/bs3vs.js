!function(){"use strict";function e(){for(var e=["xs","sm","md","lg"],t=e.length-1;t>=0;t--){var n=document.createElement("div");n.className=i+" visible-"+e[t],document.body.appendChild(n)}}function t(e){var t=document.getElementsByClassName(i+" visible-"+e);return void 0!==t&&t.length>0&&t[0].offsetWidth>0?!0:!1}var i="bs3-viewport-size";e(),window.viewportIs=t}();