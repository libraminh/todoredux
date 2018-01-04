# ReactProject DOCS - Using ReactJS with Redux

## Installation

1. Clone or download project from Homepage Repository
2. `npm install`. Building the project requires [node.js](http://nodejs.org/download/). We recommend you update to the latest version of npm.
3. In `.build` folder, rename file `index.html.dev` to `index.html`. If you just want to build the project, you should change `index.html.example` to `index.html`

Taa daaa! Now, you can RUN or BUILD project with commands line below here:

* `npm start` for dev
* `npm run build` for build project and minifies

## Notice

In file `index.html`, If hosting run this project in the sub-folder domain, we need to change link on *base* tag and `wp.dev.js`(for developer) or `wp.pro.js`(for build) follow it.

Ex: 

Domain: `https://frontends.studioboconganh.com`

Sub-folder: `/hello5/.build`

*base* Tag: ```<base href="https://frontends.studioboconganh.com/hello5/.build/" target="_blank">```

wp.[dev/pro].js: ```BASENAME: JSON.stringify("/hello5/.build")```

