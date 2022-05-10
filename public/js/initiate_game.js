document.getElementById('name_form').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;

    if (localStorage.getItem(name)) {

    } else {
        localStorage.setItem('current_player', `${name}-0`);
    }

    window.location.href = "http://localhost:3000/startgame";

});
