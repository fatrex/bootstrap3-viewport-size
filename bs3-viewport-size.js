(function(){
	'use strict';

	var globalClass = "bs3-viewport-size";

	function init() {
		var sizes = ['xs', 'sm', 'md', 'lg'];
		for (var i = sizes.length - 1; i >= 0; i--) {
			var div = document.createElement('div');
			div.className = globalClass + " visible-" + sizes[i];
			document.body.appendChild(div);
		};
	}

	function viewportIs(size) {
		var el = document.getElementsByClassName(globalClass + " visible-" + size);
		if (el !== undefined && el.length > 0) {
			if (el[0].offsetWidth > 0) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	init();
	window.viewportIs = viewportIs;

})()