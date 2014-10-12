function elem(elem) {
    return document.getElementById(elem);
}

elem("autosave").addEventListener('change', function(e) {
    localStorage.autosave = elem("autosave").checked;
}, false);

localStorage.autosave = false;
elem("autosave").checked = false;