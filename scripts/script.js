document.getElementById('loadReadme').addEventListener('click', function (e) {
    e.preventDefault();
    fetch('https://raw.githubusercontent.com/Bart-Spons/WeeklyNerd/main/README.md')
        .then(response => response.text())
        .then(text => {
            document.getElementById('content').innerText = text;
        })
        .catch(err => console.error('Fout bij het laden van de README: ', err));
});