// navbar.js
document.addEventListener('DOMContentLoaded', function () {
    var nameLink = document.getElementById('nameLink');

    nameLink.addEventListener('click', function(event) {
        if (window.location.href.endsWith('thoughts.html')) {
            window.location.href = 'thought.html';
        } else {
            window.location.href = 'index.html';
        }

        event.preventDefault();
    });
});
