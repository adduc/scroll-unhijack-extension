var event_listener = function(mouse_event) {
    mouse_event.stopPropagation();
};

document.body.addEventListener('mousewheel', event_listener, true);
document.body.addEventListener('mousedown', event_listener, true);
document.body.addEventListener('mouseup', event_listener, true);

delete event_listener;
