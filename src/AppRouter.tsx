import React from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Navigation} from './components/Navigation';
import App from './pages/App';
import {IntroductionPage} from './pages/intro/IntroductionPage';
import {VideoPage} from './pages/video/VideoPage';

export const AppRouter: React.FC = () => {

  const pages = [
    {
      name: 'Intro',
      component: IntroductionPage,
      link: '/intro'
    },
    {
      name: 'Video',
      component: VideoPage,
      link: '/video'
    }
  ];

  const routeElements = pages.map((item, index) => {
      return <Route path={item.link} component={item.component} key={index}/>
    }
  );

  const pageContent = (
    <Switch>
      {routeElements}

      <Redirect from='/' to='/intro'/>
    </Switch>
  );

  return (
    <HashRouter>
      <Navigation navItems={pages}/>
      <App>{pageContent}</App>
    </HashRouter>
  )
}
