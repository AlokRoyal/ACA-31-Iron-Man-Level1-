# Iron Man — Level 1

![JavaScript](https://img.shields.io/badge/JavaScript-p5.js-FB7D24?logo=p5dotjs&logoColor=white)
![Game](https://img.shields.io/badge/type-browser%20prototype-4C8EDA)

A browser game prototype introducing an Iron Man sprite, a looping vertical background, gravity, and keyboard movement. It lays the groundwork for the platform and collectible mechanics in later levels.

## Controls

- Up arrow applies upward velocity.
- Left and right arrows move horizontally.

The sketch clamps horizontal movement and limits the character at the bottom of the canvas. The background scrolls vertically and resets when it moves past the scene.

## How it works

preload() loads the background and character images. setup() creates the 1000 × 600 scene and sprites. draw() applies input, gravity, background movement, bounds, and rendering.

## Architecture

Keyboard input → character velocity/position → gravity and background update → sprite rendering

## Start locally

Open index.html in a browser with images/, lib/, and CSS/ preserved. No package install or build command is defined. Use a local static server if the browser blocks file-based scripts.

## Project layout

- index.html — browser entry point
- sketch.js — game loop, movement, gravity, and background wrap
- images/ — character and background assets
- lib/ — p5.js/p5.play libraries
- CSS/ — stylesheet

## Limitations

This level has no collectibles, score, or saved progress. The repository does not include a test workflow.