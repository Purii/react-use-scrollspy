# react-use-scrollspy

[![Build Status](https://travis-ci.org/Purii/react-use-scrollspy.svg?branch=master)](https://travis-ci.org/Purii/react-use-scrollspy)
[![npm version](http://img.shields.io/npm/v/react-use-scrollspy.svg?style=flat)](https://www.npmjs.com/package/react-use-scrollspy)
[![npm](https://img.shields.io/npm/dm/react-use-scrollspy.svg)](https://www.npmjs.com/package/react-use-scrollspy)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Purii/react-use-scrollspy/master/LICENSE)
[![Donate](https://img.shields.io/badge/Donate-Patreon-green.svg)](https://www.patreon.com/purii)

![Example](example.gif)

## Installation

`react-use-scrollspy` is a React `Hook` which requires React **16.8.0 or later.**

```sh
// yarn
yarn add react-use-scrollspy
// or npm
npm i react-use-scrollspy --S
```

## Usage

```javascript
import useScrollSpy from 'react-use-scrollspy';
...
const activeSection = useScrollSpy({
  sectionElementRefs: [], // Array of References to DOM elements
});
```

| Parameter          | Default   |  Type   | Description                                                 |
| :----------------- | :--------:| :------:| ------------------------------------------------------------|
| defaultValue       |   `0`     |  `int`  | Default value that is returned (optional)                   |
| offsetPx           |   `0`     |  `int`  | Set offset (optional)                                       |
| sectionElementRefs |  `[]`     | `[Ref]` | Array of Refs to observe (e.g. via React `refs`)            |
| scrollingElement   |  `window` |  `Ref`  | Target of the scrolling (e.g. via React `refs`)) (optional) |

### with Refs

Use React `refs` for section elements like in the [provided example](/example).

```javascript
import React, { useRef } from 'react';
import useScrollSpy from 'react-use-scrollspy';

const App = () => {

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  });

  return (
    <nav className="App-navigation">
      <span className={activeSection === 0 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Section 1</span>
      <span className={activeSection === 1 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Section 2</span>
      <span className={activeSection === 2 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Section 3</span>
    </nav>

    <section className="App-section" ref={sectionRefs[0]}>
      <h1>Section 1</h1>
    </section>
    <section className="App-section" ref={sectionRefs[1]}>
      <h1>Section 2</h1>
    </section>
    <section className="App-section" ref={sectionRefs[2]}>
      <h1>Section 3</h1>
    </section>
  )
```
