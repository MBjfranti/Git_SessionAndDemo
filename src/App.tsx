import React from 'react';
import './App.css';
import { agenda, agendaTitle, agendaSubtitle } from './data/Agenda';
import AgendaList from './components/AgendaList';
import Authorship from './components/Authorship';
import SlideProjector from './components/SlideProjector';
import { slides } from './components/Slides';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SlideProjector>
          <div>
            <img
              key="git-logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git logo"
              width={64}
              height={64}
              className="git-logo"
            />
            <h1 className="main-title">{agendaTitle}</h1>
            <h3 className="main-title">{agendaSubtitle}</h3>

            <AgendaList agenda={agenda} />
            <Authorship />
          </div>, 
          {slides.map(slide => slide())}
        </SlideProjector>
      </header>
    </div>
  );
}

export default App;

/*
To set up GitHub Actions for your repo, create a `.github/workflows` directory at the root of your project and add a workflow YAML file, for example `ci.yml`:

# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test

This will install dependencies, build, and test your React app on every push or pull request to the `main` branch.
*/


