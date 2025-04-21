---
title: Kitchen Sink!
layout: base.njk
---

# Typography & Elements

This page demonstrates all the ==typographic elements== and styling available on the site. The design combines the clean aesthetics of [Anthropic Claude](https://www.anthropic.com/claude) with the vibrant, functional approach of [Stripe Documentation](https://docs.stripe.com/).

## Headers & Text

Headers follow a logarithmic scale inspired by Stripe's documentation, with strong contrast and careful spacing.

### Formula 1 Sample Text

==DRS activation zone== approaching as Verstappen charges through Eau Rouge with incredible downforce. The McLaren papaya livery gleams under floodlights while Ferrari strategists debate hard compound tires. Slipstream effect maximized down the Kemmel straight, allowing for a late-braking overtake into Les Combes.

#### Technical Details

Hamilton sets purple sectors despite graining on his medium compounds, while Norris manages tire degradation through the high-speed corners of Silverstone. Porpoising issues plague the midfield teams as they navigate the Monaco hairpin with millimeter precision.

##### Race Strategy

The safety car deploys after carbon fiber debris scatters across the track following a racing incident at turn one. Pit wall engineers frantically calculate fuel delta while team principals argue with race control over track limits.

###### Final Laps

Undercut strategy proves effective as Leclerc emerges ahead after a sub-two-second pit stop, only to face pressure from cars with fresher tires in the closing laps of the Grand Prix.

## Text Formatting

This paragraph contains **bold text** for emphasis and *italicized text* for subtle emphasis. You can also use ==highlighted text== to draw attention to important information or key concepts.

Links like [this one to AWS](https://aws.amazon.com) should stand out visually while maintaining readability. The color scheme ensures proper contrast in both light and dark modes.

Here's an example of a ==highlighted [link to Formula 1](https://formula1.com) within highlighted text== to demonstrate how links inside highlights appear.

## Lists & Structure

### Unordered Lists

* Red Bull dominates with superior aerodynamics
* Mercedes struggles with porpoising issues
* Ferrari shows impressive straight-line speed
* McLaren makes steady progress with upgrades
* Aston Martin implements innovative sidepod design

### Ordered Lists

1. Qualify in pole position
2. Make a clean start off the line
3. Manage tire degradation through the race
4. Execute perfect pit stop strategy
5. Defend position in the closing laps

## Code Examples

Inline code like `const drsEnabled = gap < 1.0;` should be easily distinguishable from regular text.

```javascript
// DRS Detection System
function checkDrsAvailability(gap, zone) {
  const minGap = 1.0; // seconds
  
  if (gap < minGap && zone.isDrsZone) {
    return {
      available: true,
      timeRemaining: calculateTimeToActivation(zone)
    };
  }
  
  return { available: false };
}
```

## Blockquotes

> "The most important thing is to never give up, never give in to circumstances, believe in yourself, and to soldier on, no matter what's in your way."
> 
> — Lewis Hamilton, Seven-time Formula 1 World Champion

> ## Race Director Notes
> 
> 1. Track limits will be monitored at turns 4, 12, and 15
> 2. DRS zones are located on the main straight and between turns 2-3
> 
> All teams must comply with parc fermé conditions from the start of qualifying.

## Tables

| Driver          | Team          | Points | Wins |
|-----------------|---------------|--------|------|
| Max Verstappen  | Red Bull      | 410    | 12   |
| Lewis Hamilton  | Mercedes      | 342    | 8    |
| Lando Norris    | McLaren       | 312    | 4    |
| Charles Leclerc | Ferrari       | 298    | 3    |
| Carlos Sainz    | Ferrari       | 246    | 1    |

---

## Additional Elements

This horizontal rule separates content sections clearly while maintaining the overall design aesthetic.

![F1 Car Aerodynamics](https://get.svg.workers.dev/?s=320x180&f=gray "F1 Car Aerodynamics")

The image above demonstrates proper spacing and alignment within the content flow.
