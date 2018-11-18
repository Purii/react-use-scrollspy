import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';

import useScrollSpy from 'react-use-scrollspy';

const App = () => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  const activeSection = useScrollSpy({
    sectionElements: sectionRefs.map(ref => ref.current),
    offsetPx: -80,
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <nav className="App-navigation">
        <span
          className={
            activeSection === 0
              ? 'App-navigation-item App-navigation-item--active'
              : 'App-navigation-item'
          }
        >
          Section 1
        </span>
        <span
          className={
            activeSection === 1
              ? 'App-navigation-item App-navigation-item--active'
              : 'App-navigation-item'
          }
        >
          Section 2
        </span>
        <span
          className={
            activeSection === 2
              ? 'App-navigation-item App-navigation-item--active'
              : 'App-navigation-item'
          }
        >
          Section 3
        </span>
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
    </div>
  );
};

export default App;
