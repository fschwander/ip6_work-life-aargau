import React from 'react';
import {useHistory} from 'react-router-dom';
import {SlideInContainer} from '../../components/containers/SlideInContainer';
import {ReactComponent as AuthorsSvg} from '../../res/graphics/authors.svg';
import bgImage from '../../res/imgs/AT_LAUFENBURG.jpg'
import {Constants} from '../../services/Constants';

export const AboutPage: React.FC = () => {
  const history = useHistory();

  const jaussiLink = 'http://www.jaussi.com/';
  const fiezLink = 'https://www.youtube.com/watch?v=Plu0S-d3jDI&list=PLPBn2ZW8uriFux3rYdZSFm-lmIm6e8xNz&index=2&t=96s';
  const kroniLink = 'https://www.youtube.com/watch?v=sIo0sAVSjIs&list=PLPBn2ZW8uriFux3rYdZSFm-lmIm6e8xNz&index=8&t=0s';
  const swissdroneLink = 'https://www.youtube.com/watch?v=_FTL9_vCh6Q&t=31s';
  const tourismLink = 'https://aargautourismus.ch/';
  const gitLink = 'https://gitlab.fhnw.ch/ipole-ip6/ip6';

  return (
    <div className={'AboutPage full-screen'} style={{backgroundImage: `url(${bgImage})`}}>
      <SlideInContainer slideInDirection={Constants.SLIDE_FROM_LEFT} onCloseButtonClicked={() => history.push('intro')}>
        <h4>Fachhochschule Nordwestschweiz</h4>
        <h2>Bachelor-Thesis</h2>

        <h3>Konzept, Code & Design</h3>
        <h1>Fabian Schwander <br/> Matej Zmitko</h1>

        <h3>Betreuung</h3>
        <h4>Prof. Dr. Doris Agotai</h4>
        <h4>Prof. Dr. Arzu Çöltekin</h4>

        <h3>Bilder</h3>
        <h4>Michel Jaussi <a href={jaussiLink} target={'_blank'}>></a></h4>
        <h4><span>Zur Verfügung gestellt von</span> Aargau Tourismus <a href={tourismLink}>></a></h4>

        <h3>Videos</h3>
        <h4>Georg Fietz <a href={fiezLink} target={'_blank'}>></a></h4>
        <h4>Nicolas Kröni <a href={kroniLink} target={'_blank'}>></a></h4>
        <h4>Swissdrone <a href={swissdroneLink} target={'_blank'}>></a></h4>

        <h3>Source Code</h3>
        <h4><span>Originalcode auf </span>Gitlab <a href={gitLink} target={'_blank'}>></a></h4>

      </SlideInContainer>

      <div className={'authors-container'}>
        <AuthorsSvg className={`authors-svg move-in`}/>
        <h4>"The collaboration was amazing!"</h4>
      </div>
    </div>
  )
}
