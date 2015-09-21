document.body.addEventListener('mousewheel', function(mouseEvent) {
	mouseEvent.stopPropagation();
}, true);

document.body.addEventListener('mousedown', function(mouseEvent) {
	mouseEvent.stopPropagation();
}, true);

document.body.addEventListener('mouseup', function(mouseEvent) {
	mouseEvent.stopPropagation();
}, true);
