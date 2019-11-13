import React from 'react';
import './App.scss';
import {Navigation} from '../components/Navigation';
import {IntroductionPage} from './intro/IntroductionPage';

const App: React.FC = () => {

  return (
    <div className="App">
      <Navigation/>
      <IntroductionPage/>
    </div>
  );
};

export default App;
