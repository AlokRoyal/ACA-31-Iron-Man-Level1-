# Iron Man — Level 1

A browser game prototype introducing the Iron Man character, a vertically scrolling background, gravity, and keyboard movement. This level lays the groundwork for the later platform and collectible mechanics in the series.

## Controls

- Up arrow: apply upward velocity (jump)
- Left and right arrows: move horizontally

The character is kept within horizontal screen bounds and above the lower edge. The background loops vertically to create a continuing-scene effect.

## Code and assets

sketch.js loads images/bg.jpg and images/iron.png, creates the scene and character, applies movement and gravity each frame, and draws the sprites. index.html loads the game scripts. The images/, lib/, and CSS/ directories provide artwork, libraries, and styling.

## Run locally

Open index.html in a browser with the repository folders intact. No package manager or build process is configured. Use a local static server if the browser restricts local scripts.

## Stack

HTML5, CSS3, JavaScript, p5.js, and p5.play. This prototype has no score persistence or server component.