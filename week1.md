## Spreker

Kilian Valkhof (Polypane)

## In het kort

Kilian's belangrijkste onderwerp was hoe we steeds minder JavaScript en steeds meer HTML en CSS nodig hebben. Hij noemt “The rule of least power”. Ook sprak Kilian over Polypane, een browser voor webontwikkelaars die hij heeft gemaakt en onderhoudt.

## Regels van Kilian

Kilian had een aantal duidelijke regels:
“Give the least powerful language suitable for a given purpose”

- Eerst HTML, dan CSS en dan Javascript

  - Minst breekbaar naar meest breekbaar
  - Met Javascript worden vaak (te) grote bestanden ingeladen zonder dat we dit doorhebben

- “Browser makers are listening”

  - Makers van browsers maken een browser puur naar de gebruiker

- Code steeds opnieuw gebruiken is prima, maar...
  - Er zijn steeds betere manieren, een developer moet zich constant blijven ontwikkelen
  - "Je websites worden hier beter van!" ~ Kilian

## Technische info

### SelectList

```html
<selectlist>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</selectlist>
```

### has:

Het has: element is ook een voorbeeld waar Kilian ook over gesproken heeft. Hij verwacht dat dit heel veel gebruikt gaan worden in de toekomst. Het has: element is een experimentele functionaliteit die wordt gebruikt om elementen te selecteren op basis van de aanwezigheid van bepaalde subelementen. Dit is een onderdeel van de CSS Selectors en is nog niet wijdverspreid ondersteund door browsers op het moment van mijn laatste update. Hieronder een voorbeeld

HTML

```html
<section>
  <article>
    <h1>Titel</h1>
    <p>Testen hoe de has: werkt op een pagina</p>
  </article>
  <article>
    <h1>Titel</h1>
    <h2>Dit is een H2</h2>
    <p>Testen hoe de has: werkt op een pagina</p>
  </article>
</section>
```

CSS

```css
section {
  display: flex;
  align-items: start;
  justify-content: space-around;
}

article {
  display: inline-block;
  width: 40%;
}

h1,
h2 {
  font-size: 1.2em;
}

h2 {
  font-size: 1em;
  color: blue;
}

h1,
h2 {
  margin: 0 0 1rem 0;
}

h1:has(+ h2) {
  margin: 0 0 0.25rem 0;
}
```

### Hoe ziet het uit?

<img width="693" alt="image" src="https://github.com/Bart-Spons/WeeklyNerd/assets/62010539/64bd6cbe-5e85-4acd-b38a-48cb69abaeb5">

### Dialog

Dit element heeft (nog) een klein beetje JavaScript nodig. Dialog is een nieuw element in html om de gebruiker keuzes te laten maken (over liggend element) -> alert, prompt

- “Jij kan niks meer doen voordat de gebruiker een keuze heeft gemaakt”
- “Dialog heeft dat niet”
  - Vroeger stopte alles bij Alert, nu is ‘Dialog’ de vervanger
- DIALOG BOVEN ALLES
- Background blurren

### Carousel

Een carousel wordt heel veel gebruikt en hoeft nu niet meer via JavaScript

- In CSS kun je gebruik maken van: scroll-snap-align

## Laatste tips van Kilian

Genoeg opties om css te gebruiken ipv javascript

- Check of het in css al kan
  - Sneller voor de gebruiker
  - Makkelijker voor de browser

## Mijn conclusie

<p>Ik vond het verhaal van Kilian enorm sterk. Ik kan me heel goed vinden in het verhaal dat we zo veel mogelijk in CSS moeten doen in plaats van JavaScript. Ik vind het heel tof dat de developers bij CSS de programmeertaal steeds blijven verbeteren.In heel veel web development bedrijven is page speed een belangrijk onderwerp. Ik heb afgelopen jaar stage gelopen bij een web development bedrijf en de page speed was een van de belangrijkste onderwerpen die verbeterd moest worden. Ook tijdens mijn mbo stage hadden medewerkers binnen het bedrijf het hierover. Het is heel tof om allerlei frameworks te gebruiken maar niet iedere computer/mobiel kan alles snel en gemakkelijk inladen. Ik kreeg nog als tip van Kilian om de website <a href="https:/www.web.dev">web.dev</a> in de gaten gehouden voor alle nieuwe technische ontwikkeling die aan het gebeuren zijn vandaag de dag. Dan nog even over Polypane. Het is mogelijk voor studenten om via Github Education een gratis toegang te krijgen tot Polypane en hier heb ik gebruik van gemaakt. Op de afbeelding is te zien dat ik mijn eigen website voor Web App From Scratch bekeken heb.</p>

![polypane](https://github.com/Bart-Spons/WeeklyNerd/assets/62010539/b281b2d5-7c02-403d-9077-b34d83dc3f51)
