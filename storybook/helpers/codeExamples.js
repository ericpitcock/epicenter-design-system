export const codeExamples = {
  javascript: `import React from 'react'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(preState => {
      return {
        count: preState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    )
  }
}`,
  html: `<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>MDN Web Docs Example: Toggling full-screen mode</title>
    <link rel="stylesheet" href="styles.css">
    <style class="editable">
        video::backdrop {
          background-color: #448;
        }
    </style>

    <!-- import the webpage's javascript file -->
    <script src="script.js" defer></script>
  </head>
  <body>
    <section class="preview">
      <video controls
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
        width="620">

        Sorry, your browser doesn't support embedded videos.  Time to upgrade!

      </video>
    </section>

    <textarea class="playable playable-css" style="height: 100px;">
      video::backdrop {
        background-color: #448;
      }
    </textarea>

    <textarea class="playable playable-html" style="height: 200px;">
      <video controls
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
        width="620">
        Sorry, your browser doesn't support embedded videos.  Time to upgrade!
      </video>
    </textarea>

    <div class="playable-buttons">
      <input id="reset" type="button" value="Reset" />
    </div>
    </body>
    <script src="playable.js"></script>
  </body>
</html>`,
  css:
    `html {
	margin: 0;
	background: black;
	height: 100%;
}

body {
	margin: 0;
	width: 100%;
	height: inherit;
}

/* the three main rows going down the page */

body > div {
  height: 25%;
}

.thumb {
	float: left;
	width: 25%;
	height: 100%;
	object-fit: cover;
}

.main {
  display: none;
}

.blowup {
  display: block;
  position: absolute;
  object-fit: contain;
  object-position: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
}

.darken {
  opacity: 0.4;
}`,
  json: `{
  "name": "John",
  "age": 25,
  "cars": [
    { 
      "name": "Ford",
      "models": ["Fiesta", "Focus", "Mustang"]
    },
    {
      "name": "BMW",
      "models": ["320", "X3", "X5"]
    },
    {
      "name": "Fiat",
      "models": ["500", "Panda"]
    }
  ]
}`,
}