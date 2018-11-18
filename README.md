# React-useScrollSpy

## Installation

React-useScrollySpy requires React **0.17 or later.**

```js
npm install --save react-use-scrollspy
```

## Usage

| Parameter       | Default |       Type        | Description                               |
| :-------------- | :-----: | :---------------: | ----------------------------------------- |
| defaultValue    |   `0`   |       `int`       | Default value that is returned (optional) |
| offsetPx        |   `0`   |       `int`       | Set offset (optional)                     |
| sectionElements |  `[]`   | `[(DOM) Element]` | Array of DOM elements to observe          |

### with Refs

Use React `refs` for section elements like in the [provided example](/example).

```javascript
const App = () => {

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const activeSection = useScrollSpy({
    sectionElements: sectionRefs.map(ref => ref.current),
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

### with `Document.querySelectorAll()`

...Todo
