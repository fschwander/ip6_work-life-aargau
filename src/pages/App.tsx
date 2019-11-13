import React from 'react';
import './App.scss';
import {Navigation} from '../components/Navigation';
import {IntroductionPage} from './intro/IntroductionPage';
import {VideoPage} from './video/VideoPage';

const App: React.FC = () => {

  return (
    <div className="App">
      <Navigation/>
      <IntroductionPage/>
      <VideoPage/>
    </div>
  );
};

export default App;
