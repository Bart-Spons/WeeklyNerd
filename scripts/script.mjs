// In this document
// - Fetch the markdown files from the repository and display them on the website
// - Load in the markdown files from the repository for the specific nerd
// - Close the nerd screen
// - Scroll to the top of the page
// - Scroll to down the page
// - Scroll through the top gallery
// - Scroll through the bottom gallery
// - Scroll through the nerd screen
// - Auto scroll 1 time
// - Transition for the nerd screen
// - Reflectie bubbles
// - Best nerd podium fill

// Fetch the markdown files from the repository and display them on the website

import { unified } from 'https://esm.sh/unified@11?bundle';
import remarkParse from 'https://esm.sh/remark-parse@11?bundle';
import remarkRehype from 'https://esm.sh/remark-rehype@11?bundle';
import rehypeStringify from 'https://esm.sh/rehype-stringify@8?bundle';

async function main() {
    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify);

    const username = 'Bart-Spons';
    const repository = 'WeeklyNerd';

    function loadWeekMarkdown(weekNumber, elementId) {
        fetch(`https://raw.githubusercontent.com/${username}/${repository}/main/week${weekNumber}.md`)
            .then(response => response.text())
            .then(output => {
                const html = processor.processSync(output);
                const contentDiv = document.getElementById(elementId);
                contentDiv.innerHTML = String(html);

                const backButton = document.createElement('button');
                backButton.classList.add('back-button');
                backButton.textContent = "Terug naar de hoofdpagina";
                backButton.onclick = closeNerdScreen;
                contentDiv.appendChild(backButton);
            })
            .catch(error => console.error(error));
    }

    loadWeekMarkdown(1, 'weekly-nerd');
    loadWeekMarkdown(2, 'weekly-nerd-2');
    loadWeekMarkdown(3, 'weekly-nerd-3');
    loadWeekMarkdown(4, 'weekly-nerd-4');
    loadWeekMarkdown(5, 'weekly-nerd-5');
    loadWeekMarkdown(6, 'weekly-nerd-6');
    loadWeekMarkdown(7, 'weekly-nerd-7');
    loadWeekMarkdown(8, 'weekly-nerd-8');
    loadWeekMarkdown(9, 'weekly-nerd-9');
    loadWeekMarkdown(10, 'weekly-nerd-10');
    loadWeekMarkdown(11, 'weekly-nerd-11');
    loadWeekMarkdown(12, 'weekly-nerd-12');
}

// Check if it is live
main().then(() => console.log("live"));

// Load in the markdown files from the repository for the specific nerd

document.querySelectorAll(".gallery-item")[0].addEventListener("click", () => {
    document.startViewTransition(() => {
        document.getElementById("weekly-nerd").classList.add("active");
    });
});

document.querySelectorAll(".gallery-item")[1].addEventListener("click", () => {
    document.startViewTransition(() => {
        document.getElementById("weekly-nerd-2").classList.add("active");
    });
});

document.querySelectorAll(".gallery-item")[2].addEventListener("click", () => {
    document.startViewTransition(() => {
        document.getElementById("weekly-nerd-3").classList.add("active");
    });
});

document.querySelectorAll(".gallery-item")[3].addEventListener("click", () => {
    document.startViewTransition(() => {
        document.getElementById("weekly-nerd-4").classList.add("active");
    });
});

document.querySelectorAll(".gallery-item")[4].addEventListener("click", () => {
    document.startViewTransition(() => {
        document.getElementById("weekly-nerd-5").classList.add("active");
    });
});

document.querySelectorAll(".gallery-item")[5].addEventListener("click", () => {
    document.startViewTransition(() => {
        document.getElementById("weekly-nerd-6").classList.add("active");
    });
});

document.querySelectorAll(".gallery-item")[6].addEventListener("click", () => {
    document.startViewTransition(() => {
        document.getElementById("weekly-nerd-7").classList.add("active");
    });
});

document.querySelectorAll(".gallery-item")[7].addEventListener("click", () => {
    document.startViewTransition(() => {
        document.getElementById("weekly-nerd-8").classList.add("active");
    });
});

document.querySelectorAll(".gallery-item")[8].addEventListener("click", () => {
    document.startViewTransition(() => {
        document.getElementById("weekly-nerd-9").classList.add("active");
    });
});

document.querySelectorAll(".gallery-item")[9].addEventListener("click", () => {
    document.startViewTransition(() => {
        document.getElementById("weekly-nerd-10").classList.add("active");
    });
});

document.querySelectorAll(".gallery-item")[10].addEventListener("click", () => {
    document.startViewTransition(() => {
        document.getElementById("weekly-nerd-11").classList.add("active");
    });
});

document.querySelectorAll(".gallery-item")[11].addEventListener("click", () => {
    document.startViewTransition(() => {
        document.getElementById("weekly-nerd-12").classList.add("active");
    });
});



// Close the nerd screen

function closeNerdScreen() {
    document.getElementById("weekly-nerd").classList.remove("active");
    document.getElementById("weekly-nerd-2").classList.remove("active");
    document.getElementById("weekly-nerd-3").classList.remove("active");
    document.getElementById("weekly-nerd-4").classList.remove("active");
    document.getElementById("weekly-nerd-5").classList.remove("active");
    document.getElementById("weekly-nerd-6").classList.remove("active");
    document.getElementById("weekly-nerd-7").classList.remove("active");
    document.getElementById("weekly-nerd-8").classList.remove("active");
    document.getElementById("weekly-nerd-9").classList.remove("active");
    document.getElementById("weekly-nerd-10").classList.remove("active");
    document.getElementById("weekly-nerd-11").classList.remove("active");
    document.getElementById("weekly-nerd-12").classList.remove("active");


}

// Scroll to the top of the page

gsap.to(".title", {
    y: -200,
    opacity: 0,
    duration: 1,
    delay: 3,
});

// Scroll to down the page

gsap.to(".scroll-down", {
    y: -220,
    opacity: 0,
    duration: 1,
    delay: 5,
});

gsap.registerPlugin(ScrollTrigger);

// Scroll through the top gallery

gsap.to(".gallery .gallery-container", {
    x: () =>
        -(
            document.querySelector(".gallery .gallery-container")
                .scrollWidth - window.innerWidth
        ),
    ease: "none",
    scrollTrigger: {
        trigger: ".gallery",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
            const progress = Math.floor(self.progress * 13);
            document.getElementById(
                "progress-bar-1"
            ).style.height = `${self.progress * 100}%`;
            document.getElementById(
                "progress-label-1"
            ).textContent = `${progress} / 13`;
        },
    },
});

// Scroll through the bottom gallery

gsap.to(".gallery-bottom .gallery-container", {
    x: () =>
        -(
            window.innerWidth -
            document.querySelector(
                ".gallery-bottom .gallery-container"
            ).scrollWidth
        ),
    ease: "none",
    scrollTrigger: {
        trigger: ".gallery-bottom",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
            const progress = Math.floor(self.progress * 10);
            document.getElementById(
                "progress-bar-2"
            ).style.height = `${self.progress * 100}%`;
            document.getElementById(
                "progress-label-2"
            ).textContent = `${progress} / 10`;
        },
    },
});

gsap.to(".gallery-item", {
    rotation: 360,
    scrollTrigger: {
        trigger: ".vakken2",
        start: "top center",
        end: "bottom center",
        scrub: true,
    },
});

// Scroll through the nerd screen

function smoothScrollByY(targetY, duration) {
    const start = window.pageYOffset;
    const change = targetY - start;
    const startTime = performance.now();

    function animateScroll(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        window.scrollTo(0, start + change * progress);
        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
}

// Auto scroll 1 time

function autoScroll() {
    smoothScrollByY(window.pageYOffset + (2.4 * window.innerHeight), 6000);
}

setTimeout(autoScroll, 7000);

var checkbox = document.querySelector('input[name=mode]');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

// transition for the nerd screen

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000);
};

// Reflectie bubbles

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("vakkenReflectie");
    const bubbles = [
        { title: "WAFS", text: "Vrije opdracht. Altijd leuk om weer even in te komen als je een tijdje geen code geschreven hebt" },
        { title: "CSS", text: "Maak wat je wil, altijd leuk! Het niveau was wel hoog. Ook geen gebruik van van classes en ID's was leerzaam." },
        { title: "Browser Technologies", text: "Semantisch correcte code leren schrijven. " },
        { title: "Hackaton", text: "Leuk voor de teambuilding en de kans om naar cssday te gaan. CSS day was geweldig (meer tickets vrijmaken)" },
        { title: "UCD", text: "Werken met een echte doelgroep! Deze doelgroep word vaak vergeten en nu kunnen we iets voor hun doen." },
        { title: "API", text: "Je kunt zo veel meer uit een APi halen dan alleen data laten zien." },
        { title: "Meesterproef", text: "Knallend einde van een geweldige minor! Product voor een echte klant, heel leerzaam!" }
    ];
    const colors = ['#66d9ef', '#ae81ff', '#a6e22e', '#f92672', '#fd971f'];

    bubbles.forEach((bubbleContent, index) => {
        const bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.innerHTML = `<p><strong>${bubbleContent.title}</strong></p><p>${bubbleContent.text}</p>`;
        bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        bubble.style.animation = `move ${Math.random() * 5 + 3}s ease-in-out infinite`;
        container.appendChild(bubble);
    });
});


// Best nerd podium fill

window.addEventListener('scroll', function () {
    const section = document.querySelector('.nerd2');
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const places = section.querySelectorAll('.place');


    const scrollTop = window.scrollY;
    const scrollBottom = scrollTop + window.innerHeight;

    if (scrollBottom >= sectionTop && scrollTop <= sectionTop + sectionHeight) {
        const scrollPercent = (scrollBottom - sectionTop) / sectionHeight * 100;

        places.forEach(place => {
            const fill = place.querySelector('.fill');
            const placeHeight = place.clientHeight;
            const fillHeight = (scrollPercent / 100) * placeHeight;
            fill.style.height = `${fillHeight}px`;
        });
    } else {
        places.forEach(place => {
            const fill = place.querySelector('.fill');
            fill.style.height = `0px`;
        });
    }
});

// When darkmode is actived, change image
document.getElementById('switch').addEventListener('click', function () {
    const galleryItem = document.querySelector('.marieke');
    if (this.checked) {
        galleryItem.style.backgroundImage = 'url("../nerds/marieke3.png")';
    } else {
        galleryItem.style.backgroundImage = 'url("../nerds/marieke2.png")';
    }
});

