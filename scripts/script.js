document.getElementById('loadReadme').addEventListener('click', function (e) {
    e.preventDefault();
    loadMarkdown('https://raw.githubusercontent.com/Bart-Spons/WeeklyNerd/main/README.md');
});

document.getElementById('loadWeek1').addEventListener('click', function (e) {
    e.preventDefault();
    loadMarkdown('https://raw.githubusercontent.com/Bart-Spons/WeeklyNerd/main/week1.md');
});

function loadMarkdown(url) {
    fetch(url)
        .then(response => response.text())
        .then(text => {
            document.getElementById('content').innerText = text;
        })
        .catch(err => console.error('Fout bij het laden van de bestand: ', err));
}