import React from 'react';
import * as Styled from './styles';
import wallpaper from '../../media/wallpaper-about.png'

export default function About() {

  return (
    <>
      <Styled.Container>
        <div className="boxAbout">
            <div className="boxContent">
              <div className="tituloPage">
                <h5>About</h5>
              </div>
              <div className="tituloContent">
                <h1>
                  RAWG + REACT JS
                </h1>
              </div>
              <div className="texto">
                <p>This site i made is used with React JS, getting a lot of information through the RAWG API, RAWG is the biggest video game database and game discovery service.</p>
              </div>
              <div className="button">
                <a href="https://rawg.io/" target="_blank" rel="noopener noreferrer">
                  About API                  
                </a>
              </div>
            </div>
            <div className="wallpaperPage">
              <div className="imagem">
                <img src={wallpaper} alt="Games All" />
              </div>
            </div>
        </div>
      </Styled.Container>
    </>
  )
}
