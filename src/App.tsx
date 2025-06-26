import './App.css';
import React from 'react';
import { agenda, agendaTitle, agendaSubtitle } from './data/Agenda';
import AgendaList from './components/AgendaList';
import Authorship from './components/Authorship';
import SlideProjector from './components/SlideProjector';
import { slides } from './components/Slides';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Hello.
        </div>
        <SlideProjector children={[
          <div>
            <img
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
          </div>, ...slides.map(slide => slide())]} />
      </header>
    </div>
  );
}

export default App;
