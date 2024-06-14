## Weekly Nerd: Miriam Suzanne

## Achtergrond
Miriam Suzanne was onze gastspreker en ze gaf een presentatie gebaseerd op de slides die te vinden zijn via deze [link](https://slides.oddbird.net/cq/pre-cssday/).

## Presentatie
Miriam's presentatie ging over de nieuwste ontwikkelingen in CSS en hoe deze gebruikt kunnen worden om complexere lay-outs en designs te maken met minder code en meer efficiëntie.

## Container Queries
Een belangrijk onderwerp dat Miriam besprak was Container Queries. Ze legde uit hoe deze queries werken en hoe ze kunnen worden gebruikt om responsieve ontwerpen te maken zonder afhankelijk te zijn van viewport-brede media queries.

```css
.container {
  container-type: inline-size;
}

@container (min-width: 500px) {
  .item {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
```

## Cascade Layers
Miriam introduceerde ook het concept van Cascade Layers, waarmee ontwikkelaars de specificiteit van hun CSS-stijlen beter kunnen beheren en conflicten kunnen voorkomen.

```css
@layer utilities {
  .text-center {
    text-align: center;
  }
}

@layer components {
  .button {
    padding: 10px 20px;
    background-color: blue;
    color: white;
  }
}
```

## Scope
Ze besprak ook de nieuwe `@scope` regel, waarmee stijlen beperkt kunnen worden tot een specifiek gedeelte van de DOM, waardoor onverwachte cascade-effecten worden voorkomen.

```css
@scope (.scope) {
  .example {
    color: red;
  }
}
```

## Voorbeelden en Demo's
Miriam toonde verschillende voorbeelden en demo's om de nieuwe CSS-functionaliteiten in actie te laten zien. Deze waren zeer nuttig om de praktische toepassingen van de theorie te begrijpen.

## Conclusie
Miriam's presentatie was zeer informatief en inspireerde ons om de nieuwste CSS-technieken te verkennen en te gebruiken in onze eigen projecten. Haar duidelijke uitleg en praktische voorbeelden maakten het gemakkelijk om de complexe concepten te begrijpen en toe te passen.

---

Bezoek de [slides](https://slides.oddbird.net/cq/pre-cssday/) voor meer details en voorbeelden van de besproken onderwerpen.
