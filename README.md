# hyperrender

[![Build Status][0]][1]
[![Standard - JavaScript Style Guide][2]][3]

> Universal render helper for [hyperHTML][hyper] :sparkles:

## Usage

`hyperrender` is a drop in replacement for [`hyperHTML.wire(obj?)`][wire], capable of rendering
templates on both the client and server.

```js
const render = require('hyperrender')

// hyperHTML.wire(obj?) shorthand
render.html`<div>Hello world!</div>`
// render.html shorthand
render`<div>Hello world!</div>`
// hyperHTML.wire({ class: 'test' }) shorthand exposing wire interface
render.html({ class: 'test' })`<div>Hello world!</div>`

// hyperHTML.wire(obj?, 'svg') shorthand
render.svg`
  <svg width="120" height="120" viewBox="0 0 120 120"
       xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="100" height="100"/>
  </svg>
`
// hyperHTML.wire({ points: [1,2] }, 'svg') shorthand exposing wire interface
render.svg({ points: [1,2] })`
  <svg width="120" height="120" viewBox="0 0 120 120"
       xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="100" height="100"/>
  </svg>
`

```

## License

MIT

[0]: https://travis-ci.org/joshgillies/hyperrender.svg?branch=master
[1]: https://travis-ci.org/joshgillies/hyperrender
[2]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[3]: http://standardjs.com/
[wire]: https://github.com/WebReflection/hyperHTML#wait--there-is-a-wire--in-the-code
[hyper]: https://github.com/WebReflection/hyperHTML
