# BUZZKILL

> Find the strain that will cause you pain, and damage your brain!

## Table of Contents

* [General info](#general-info)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)
* [License](#license)

## General Info

Have you ever had a bad time while under the influence of marijuana?
Have you ever WANTED to have a bad time while under the influence of marijuana?
If your answer to both of these questions was "yes" or "absolutely, say no more", then welcome yourself to the first and only website which let you discover strains of marijuana oriented toward having a bad time!
Whether it is dizziness, dry eyes, anxiety, dry mouth, paranoia or a righteous combination of these five, Buzzkill has you covered, and even lets you specify by constituent strain.
After making your selection, you can either navigate back to the list or return to the homepage to modify the symptoms you would like to experience.

## Video Demonstration

[BuzzKill on YouTube](https://www.youtube.com/watch?v=z-5YC19Vcu0)

## Technologies

* HTML
* CSS
* Ruby
* JavaScript

## Code Examples

Here is a portion of our code which fetches the strains by effect and displays the additional negative effects:

```
fetch(strainURL)
  .then(response => response.json())
  .then(strain => {
    console.log(strain)
    fetch(`http://strainapi.evanbusse.com/TEkvrIZ/strains/data/effects/${strain[0].id}`)
      .then(response => response.json())
      .then(effects => {
        const h2 = document.createElement('h2')
        h2.innerText = 'Other Negative Effects:'
        strainElement.append(h2)
        effects.negative.forEach(effect => {
          if (effectName != effect) {
            const h2 = document.createElement('h2')
            h2.innerText = effect
            strainElement.append(h2)
          }
        })

      })
  })
```

## Features

* Utterly psychotic visual design
* Avant-garde soundtrack complementing all three pages which automatically starts
* Anxiety inducing .gif files
* Pulls from comprehensive API of marijuana strains
* Filters among strains and displays matching results for negative side effects
* Lists other negative effects for optimization of bad time

## To-Do List

* Add Google API to find closest dispensary which stocks given strain
* Create a converse page oriented toward positive side effects

## Inspiration

The biggest inspiration behind this page was the internet before it was monopolized and before every webpage seemed to look exactly the same. There is a quality to webpages that aren't easy on the eyes that both harken an era where the web seemed to be gleeming with excitement and potential, and this idea fit very comfortably into the idea of a panic-inducing page.

## Credits

Created by Nathan Fedzen and Luke Thinnes.
