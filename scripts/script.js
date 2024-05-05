import { unified } from 'https://esm.sh/unified@11?bundle';
import remarkParse from 'https://esm.sh/remark-parse@11?bundle';
import remarkRehype from 'https://esm.sh/remark-rehype@11?bundle';
import rehypeStringify from 'https://esm.sh/rehype-stringify@8?bundle';

async function main() {
    // Create a processor that uses remark and rehype
    // to parse markdown to HTML
    // and stringify HTML to a string
    // The processor is used to process the content of the process
    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify);

    // The username and repository name
    const username = 'Bart-Spons';
    const repository = 'WeeklyNerd'; // Repository name

    // Fetch the README.md from the GitHub repository
    fetch(`https://raw.githubusercontent.com/${username}/${repository}/main/README.md`)
        .then(response => response.text())
        .then(output => {
            const html = processor.processSync(output);
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = String(html);
        })
        .catch(error => console.error(error));

    // Function to load Markdown content from a specific week
    function loadWeekMarkdown(weekNumber) {
        fetch(`https://raw.githubusercontent.com/${username}/${repository}/main/week${weekNumber}.md`)
            .then(response => response.text())
            .then(output => {
                const html = processor.processSync(output);
                const contentDiv = document.getElementById('content');
                contentDiv.innerHTML = String(html);
            })
            .catch(error => console.error(error));
    }

    // Event listeners for loading Markdown content from specific weeks
    document.getElementById('loadReadme').addEventListener('click', function (e) {
        e.preventDefault();
        main();
    });

    document.getElementById('loadWeek1').addEventListener('click', function (e) {
        e.preventDefault();
        loadWeekMarkdown(1);
    });

    // Add event listeners for other weeks as needed
    document.getElementById('loadWeek2').addEventListener('click', function (e) {
        e.preventDefault();
        loadWeekMarkdown(2);
    });

    document.getElementById('loadWeek3').addEventListener('click', function (e) {
        e.preventDefault();
        loadWeekMarkdown(3);
    });

    document.getElementById('loadWeek4').addEventListener('click', function (e) {
        e.preventDefault();
        loadWeekMarkdown(4);
    });

    document.getElementById('loadWeek5').addEventListener('click', function (e) {
        e.preventDefault();
        loadWeekMarkdown(5);
    });

    document.getElementById('loadWeek6').addEventListener('click', function (e) {
        e.preventDefault();
        loadWeekMarkdown(6);
    });

    document.getElementById('loadWeek7').addEventListener('click', function (e) {
        e.preventDefault();
        loadWeekMarkdown(7);
    });

    
}

main().then(() => console.log("live"));

// hamburger
document.querySelector('.hamburger').addEventListener('click', function() {
    var nav = document.querySelector('nav');
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  });
  