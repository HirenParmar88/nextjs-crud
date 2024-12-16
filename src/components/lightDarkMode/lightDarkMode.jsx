// src/components/lightDarkMode/lightDarkMode.jsx

'use client';

import { createContext, useContext, useState } from 'react';
import "/src/app/globals.css";

// Create the ThemeContext
const ThemeContext = createContext('light');

export default function MyApp() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app-container ${theme}`}>
        <header>
          <h1>Theme Switcher</h1>
          <label className="theme-toggle">
            <input
              type="checkbox"
              checked={theme === 'dark'}
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            />
            Use dark mode
          </label>
        </header>
        <main>
          <Form />
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = `panel panel-${theme}`;

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = `button button-${theme}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
