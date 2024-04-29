## Spreker

Fenna de Wilde (Bakken & Bæck)

## In het kort

Fenna is een oud CMD student die zich is gaan specialiseren in toegankelijkheid van websites. Fenna werkt nu bij Bakken & Bæck. Een internationale design studio. Ook heeft Fenna heeft meegewerkt bij het maken van de Phantom Wallet website en is daar zelfde de lead developer. De Phantom wallet is een wallet voor het bewaren en beheren van crypto. Met een simpele app of browserextensie kan iedereen zich bezig gaan houden met digitale valuta en alles wat daarbij komt kijken.

## Ervaringen van Fenna

In het bedrijfsleven interesseert heel weinig mensen toegankelijkheid. Dit tot grote verbazing en soms ergernis bij Fenna zelf. Als ze bij haar werk van een designer een design krijgt voor een website ontbreekt vaak het deel over toegankelijkheid. Fenna zal niet aan een opdracht beginnen als het stukje toegankelijkheid er niet perfect instaat.

## Wat probeert Fenna altijd toe te passen?

- Focus state voor keyboard gebruikers
- Aria attributes
- Toegankelijke carousels
- Focus guards en esc key configuratie voor modals en overlays
- Goede kleurcontrasten, lettergroottes en lijnlengtes
- Alt-text voor afbeeldingen
- Correcte semantiek

## Aria attributes

- aria-label
  - Label een beschrijvende tekst geven voor elementen die geen zichtbaar label hebben.
  - Vooral handig voor ui-elementen zoals buttons met icons of waar de tekst niet voldoende context geeft
- aria-controls
  - Dit wordt gebruikt om een bedieningselementen te koppelen aan het elementen dat het controleert
  - Makkelijker en beter voor de screenreader
  - Toepassen om elementen die dienen als bediening (button, link of tab)
- aria-expanded
  - Status van een element dat kan worden uitgeklapt en ingeklapt.
  - Schakelen tussen "true" en "false"

## Tips van Fenna

- List items vermijden
  - Verborgen list items worden niet meegenomen.
- Maak gebruik van de dialog
  - Er kan heel veel met dialog en op het gebied van toegankelijkheid zit er al heel veel in
- Kan dialog niet kan?
  - NPM package manager
  - React-focus-lock, heeft bijna alles. Als er nog iets mist kan dit ingeladen worden.

## Carousel

Fenna heeft ook nog gepraat voer de welbekende carousel. De carousel is heel moeilijk om toegankelijk te maken. Fenna heeft een voorbeeld laten zien van een carousel die heel toegankelijk is. Deze heb ik hieronder verwerkt.

```html
<div
  role="region"
  aria-roledescription="carousel"
  aria-label="Tips & Techniques"
>
  <div role="group" aria-label="Slide controls">
    <button aria-label="Stop auto-rotation">
      <!-- SVG icon -->
    </button>
    <button aria-disabled="true">
      <span class="hide-element">Show slide 1 of 3: Hiding Accessibly</span>
      <!-- SVG icon -->
    </button>
    <button aria-disabled="false">
      <span class="hide-element">Show slide 2 von 3: Accessible Contrasts</span>
      <!-- SVG icon -->
    </button>
    <button aria-disabled="false">
      <span class="hide-element"
        >Show slide 3 von 3: Semantics, WAI-ARIA and Assistive
        Technologies</span
      >
      <!-- SVG icon -->
    </button>
    <button aria-label="Previous slide">
      <!-- SVG icon -->
    </button>
    <button aria-label="Next slide">
      <!-- SVG icon -->
    </button>
  </div>
  <div
    role="group"
    aria-roledescription="Slide"
    aria-labelledby="carousel-item-1__heading"
    id="carousel-item-1"
  >
    <h2 id="carousel-item-1__heading">Hiding accessibly</h2>
    <!-- Further slide contents -->
  </div>
  <div
    hidden
    role="group"
    aria-roledescription="Slide"
    aria-labelledby="carousel-item-2__heading"
    id="carousel-item-2"
  >
    <h2 id="carousel-item-2__heading">Accessible Contrasts</h2>
    <!-- Further slide contents -->
  </div>
  <div
    hidden
    role="group"
    aria-roledescription="Slide"
    aria-labelledby="carousel-item-3__heading"
    id="carousel-item-3"
  >
    <h2 id="carousel-item-3__heading">
      Semantics, WAI-ARIA and Assistive Technologies
    </h2>
    <!-- Further slide contents -->
  </div>
</div>
```

### Standaard regels

- Tekst moet volgens Web Content Accessibility Guidelines (WCAG) een contrastverhouding hebben van 4,5:1 hebben.
- Grote tekst 24px of 18px vetgedrukt en belangrijke icons moeten een contrastverhouding van 3:1 hebben. Behalve logo's en decoratieve elementen.
- Voor optimale leesbaarheid is een regellengte van 50 tot 75 tekens inclusief spaties.
  - Lezers moeten niet afhaken
  - Tekst aanpassen op verschillende schermgroottes (op groot scherm de regels minder breed)

## Mijn conclusie

Ik vond het verhaal van Fenna interessant. Tijdens CMD zijn we met toegankelijkheid bijna bij ieder vak wel bezig. Wat mij het meeste opviel van het verhaal van Fenna is dat veel bedrijven hier geen aandacht aan geven. Wat ik me dan afvraag is of dit onderwerp bij andere studies niet zoveel aan de orde komt als CMD. Ik kan me goed voorstellen dat bij software engineering hier minder aandacht wordt besteed dan bij CMD. Geen aandacht lijkt me niet, maar ik kan hier zelf geen uitspraak over doen want ik ben niet bekend bij deze andere opleidingen. Even terug naar Fenna. Ik vond het heel sterk dat ze zich in een bedrijf hier voor inzet. Ook vond ik het interessant dan veel programmeertalen zich hierin aan verbeteren zijn. Bij HTML bijvoorbeeld is bij de dialog hier heel veel rekening mee gehouden. Ik ben benieuwd welke elementen in de toekomst dit als standaard erin hebben zitten in de HTML.
