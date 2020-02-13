import React from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Navigation} from './components/widgets/Navigation';
import App from './pages/App';
import {IntroductionPage} from './pages/intro/IntroductionPage';
import {MenuPage} from './pages/menu/MenuPage';
import {VideoPage} from './pages/video/VideoPage';
import {videoSlideData} from './pages/video/videoSlideData';

export const AppRouter: React.FC = () => {

  const pages = [
    {
      name: 'Intro',
      component: <IntroductionPage/>,
      link: '/intro'
    },
    {
      name: 'Menu',
      component: <MenuPage/>,
      link: '/menu'
    },
    {
      name: 'Video',
      component: <VideoPage videoSlideData={videoSlideData}/>,
      link: '/video'
    }
  ];

  const routeElements = pages.map((item, index) => {
      return <Route path={item.link} component={() => item.component}  key={index}/>
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
      <App>{pageContent}</App>
      <Navigation navItems={pages}/>
    </HashRouter>
  )
}
