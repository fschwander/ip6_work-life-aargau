import React from 'react';

export const AboutPage:React.FC = () => {
  const jaussiLink = 'http://www.jaussi.com/';
  const fiezLink = 'https://www.youtube.com/watch?v=Plu0S-d3jDI&list=PLPBn2ZW8uriFux3rYdZSFm-lmIm6e8xNz&index=2&t=96s';
  const kroniLink = 'https://www.youtube.com/watch?v=sIo0sAVSjIs&list=PLPBn2ZW8uriFux3rYdZSFm-lmIm6e8xNz&index=8&t=0s';
  const swissdroneLink = 'https://www.youtube.com/watch?v=_FTL9_vCh6Q&t=31s';

  return (
    <div className={'AboutPage full-screen'}>
      <h4>Fachhochschule Nordwestschweiz FHNW</h4>
      <h2>Bachelor-Thesis</h2>

      <h3>Konzept, Code & Design</h3>
      <h1>Fabian Schwander</h1>
      <h1>Matej Zmitko</h1>

      <h3>Betreuung</h3>
      <h4>Prof. Dr. Doris Agotai</h4>
      <h4>Prof. Dr. Arzu Çöltekin</h4>

      <h3>Credits für Bilder</h3>
      <h4>Michel Jaussi <a href={jaussiLink}>link</a></h4>

      <h3>Credits für Videos</h3>
      <h4>Georg Fietz <a href={fiezLink}>link</a></h4>
      <h4>Nicolas Kröni <a href={kroniLink}>link</a></h4>
      <h4>Swissdrone <a href={swissdroneLink}>link</a></h4>
    </div>
  )
}
