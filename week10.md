## Weekly Nerd: Bramus van Damme (Google)

## Achtergrond
Bramus van Damme heeft een achtergrond als leraar en gaf aan dat hij jaloers is dat wij tegenwoordig gastsprekers hebben, iets wat hij vroeger niet had. 

## Presentatie
Bramus gaf een boeiende presentatie over de View Transition API. Zijn presentatie kan worden gevonden via deze [link](https://www.bram.us/2024/05/23/mpa-view-transitions-are-here-jsheroes/).

## View Transitions
De View Transition API biedt de mogelijkheid om naadloze visuele overgangen tussen verschillende weergaven op je website te creëren. Bramus demonstreerde dit met een voorbeeldwebsite: [Live Transitions](https://live-transitions.pages.dev/).

```javascript
document.addEventListener('click', e => { 
  if(!document.startViewTransition) { 
    nextSentence(); 
    return; 
  } 

  document.startViewTransition(() => {  
    nextSentence(); 
  }); 
});
```

```css
:root { 
  view-transition-name: root; 
}
```

## Snapshot (Opzoeken!!)
Bramus besprak het concept van een snapshot, maar raadde aan om hier meer onderzoek naar te doen om het volledig te begrijpen.

## Trigger View Transition
Een belangrijk onderdeel van Bramus' presentatie was hoe je een View Transition kunt triggeren. Hij verwees naar meerdere voorbeelden en demo's die online beschikbaar zijn:
- [View Transitions SPA Pagination](https://view-transitions.netlify.app/pagination/spa/)
- [View Transitions Netlify](https://view-transitions.netlify.app/)

## Render Blocking
Bramus benadrukte ook het belang van render blocking en hoe dit invloed kan hebben op de prestaties van je website. Hij gaf het volgende voorbeeld:

```html
<link rel="expect" blocking="render" href="#important_thing">
```

## Conclusie
Bramus' presentatie was zowel informatief als inspirerend. Hij gaf ons waardevolle inzichten in de nieuwste webtechnologieën en moedigde ons aan om nieuwsgierig te blijven en voortdurend te leren. Zijn praktische voorbeelden en duidelijke uitleg maakten complexe concepten begrijpelijk en toepasbaar.
