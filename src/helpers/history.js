const listeners = [];

function notifyListeners() {
    listeners.forEach(x => x(new URL(window.location.href)));
}

window.onpopstate = notifyListeners;

export function getCurrentLocation() {
    return new URL(window.location);
}

export function navigateTo(url) {
    console.debug('navigating to', url);
    window.history.pushState(null, null, url);
    notifyListeners();
}

export function listen(fn) {
    const index = listeners.length;
    listeners.push(fn);
    return () => listeners.splice(index, 1);
}

export function forward() {
    window.history.forward();
    notifyListeners();
}

export function back() {
    window.history.back();
    notifyListeners();
}