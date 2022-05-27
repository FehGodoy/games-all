import React, { useState,useEffect } from 'react';
import * as Styled from './styles';
import { useParams } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaCalendarAlt,FaStar,FaRegMeh,FaRegLaugh,FaRegSadTear } from "react-icons/fa";
import psn from '../../media/psn-logo.png';
import epic from '../../media/epic.png';
import steam from '../../media/steam.png';
import xbox from '../../media/logo-xbox.png';
import xboxStore from '../../media/xbox-store.jpg';
import reddit from '../../media/reddit.png';


export default function SinglePage() {

  const {idUrl} = useParams();
  const [data,setData] = useState([]);  
  const [loja,setLoja] = useState([]);  
  const [photo,setPhoto] = useState([]);   
  const [photo2,setPhoto2] = useState([]);
  const [photo3,setPhoto3] = useState([]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${idUrl}?key=328c7603ac77465895cf471fdbba8270`)
    .then((res) => res.json())
    .then((data) => {
      setData(data);             
    })    
    .catch((err) => {
      console.log(err);
    });

    fetch(`https://api.rawg.io/api/games/${idUrl}/stores?key=328c7603ac77465895cf471fdbba8270`)
    .then((res) => res.json())
    .then((loja) => {
      setLoja(loja.results);             
    })    
    .catch((err) => {
      console.log(err);
    });

    fetch(`https://api.rawg.io/api/games?key=328c7603ac77465895cf471fdbba8270`)
    .then((res) => res.json())
    .then((photo) => {
      setPhoto(photo.results);      
    })    
    .catch((err) => {
      console.log(err);
    });

    fetch(`https://api.rawg.io/api/games?key=328c7603ac77465895cf471fdbba8270&page=2`)
    .then((res) => res.json())
    .then((photo2) => {
      setPhoto2(photo2.results);      
    })    
    .catch((err) => {
      console.log(err);
    });

    fetch(`https://api.rawg.io/api/games?key=328c7603ac77465895cf471fdbba8270&page=3`)
    .then((res) => res.json())
    .then((photo3) => {
      setPhoto3(photo3.results);      
    })    
    .catch((err) => {
      console.log(err);
    });

  }, [])

  const description = data.description_raw;

  const options = {
    margin: 0,
    responsiveClass: false,
    nav: false,
    dots: false,
    autoplay: true,    
    smartSpeed: 500,
    autoplayTimeout:2000,    
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1,
            autoplay: true,
        },
        400: {
            items: 1,
            autoplay: true,
        },
        600: {
            items: 2,
            autoplay: true,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 4,
            margin: 15

        }
    },
};
  
  
  return (
    <>
      <Styled.Container>
        <div className="boxGameSingle">                          
          <div className="wallpaper">
            <div className="bordaWall">
              <div className="imagemGame" style={{backgroundImage: `url(${data.background_image_additional})`}}>
                  <div className="boxContainer">
                    <div className="imagemGameDentro">
                      <img src={data.background_image} alt={data.name} />
                    </div>
                    <div className="containerContextGame">
                      <div className="boxContainerContextoGameTop">
                        <div className="titulo">
                          <h2>{data.name}</h2>                          
                        </div>
                        <div className="lancamento">
                          <FaCalendarAlt />
                          <span>{data.released}</span>
                        </div>
                      </div>
                      <div className="plataformas">                          
                        { data.parent_platforms?.map((plataforma,index)=> (                            
                            <div className={`boxKey ${plataforma.platform.slug}`} key={index}>                              
                              <span className={plataforma.platform.slug} >{plataforma.platform.name}</span>            
                            </div>                            
                            
                          ))}                                        
                      </div>
                      <div className="ratingMedium">
                        <ul>
                        { data.ratings?.map((ratingMed,index)=> {
                            if (ratingMed.title === "exceptional") {
                                return (     
                                  <li key={index}>
                                  <FaRegLaugh
                                  style={{
                                    color: 'var(--activeColor)'
                                  }}
                                  /> {ratingMed.count}
                                </li>
                              )}
                              if (ratingMed.title === "meh") {
                                return (     
                                  <li key={index}>
                                  <FaRegMeh 
                                    style={{
                                      color: '#ff0'
                                    }}
                                  /> {ratingMed.count}
                                </li>
                              )}
                              if (ratingMed.title === "skip") {
                                return (     
                                  <li key={index}>
                                  <FaRegSadTear
                                  style={{
                                    color: '#ff0000'
                                  }}
                                  /> {ratingMed.count}
                                </li>
                              )}
                            }
                          )}
                        </ul>
                      </div>
                      <div className="metaScore">
                        <div className="box">
                          <span
                            style={{
                              border: data.metacritic > 50 ? "1px solid var(--activeColor)" : "1px solid #ff0000",
                              color: data.metacritic > 50 ? "var(--activeColor)" : "#ff0000",
                            }}
                          >{data.metacritic}</span>
                        </div>
                      </div>
                      <div className="boxOther">
                        <div className="boxRating">
                          <div className="icone">
                            <FaStar />
                          </div>
                          <div className="boxTwoInfo">
                            <div className="titulo">
                              <h5>Rating</h5>
                            </div>
                            <div className="nota">
                              <span>{data.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="moreGame">
                        <div className="plataformasStore">
                        { loja?.map((plataformaStore,index)=> {
                            if (plataformaStore.store_id === 3) {
                                return (     
                                  <a href={plataformaStore.url} target="_blank" rel='noreferrer'>
                                    <div className="platStoreImg" key={index}>
                                      <img src={psn} alt="Plataforma Game" />
                                    </div>  
                                  </a>
                              )}
                              if (plataformaStore.store_id === 1) {
                                return (     
                                  <a href={plataformaStore.url} target="_blank" rel='noreferrer'>
                                    <div className="platStoreImg">
                                      <img src={steam} alt="Plataforma Game" />
                                    </div>  
                                  </a>
                              )}
                              if (plataformaStore.store_id === 7) {
                                return (     
                                  <a href={plataformaStore.url} target="_blank" rel='noreferrer'>
                                    <div className="platStoreImg">
                                      <img src={xbox} alt="Plataforma Game" />
                                    </div>  
                                  </a>
                              )}
                              if (plataformaStore.store_id === 2) {
                                return (     
                                  <a href={plataformaStore.url} target="_blank" rel='noreferrer'>
                                    <div className="platStoreImg">
                                      <img src={xboxStore} alt="Plataforma Game" />
                                    </div>  
                                  </a>
                              )}
                              if (plataformaStore.store_id === 11) {
                                return (     
                                  <a href={plataformaStore.url} target="_blank" rel='noreferrer'>
                                    <div className="platStoreImg">
                                      <img src={epic} alt="Plataforma Game" />
                                    </div>  
                                  </a>
                              )}
                            }
                          )}
                        </div>
                        <div className="botao">
                          <a href={data.website} target="_blank" rel="noreferrer">
                            READ MORE
                          </a>                          
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>  
          <div className="overviewGame">
            <div className="navOver">
              <ul>
                <li>
                  Overview
                </li>
              </ul>
            </div>
            <div className="boxFlex">
              <div className="boxDescricao">
                <div className="box">
                  <div className="boxHeader">
                    <div className="titulo">
                      <h6>Description</h6>
                    </div>
                  </div>
                  <div className="boxAll">
                    <div className="texto">                  
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
                <div className="reddit">
                <div className="box">
                  <div className="boxHeader">
                    <div className="titulo">
                      <h6>Reddit Information</h6>
                      <img src={reddit} alt={data.name} />                      
                    </div>
                  </div>
                  <div className="boxAll">
                    <div className="texto">
                      <p>{data.reddit_description}</p>
                    </div>
                    {data.reddit_description !== '' ? 
                    (
                      <div className="link">                  
                      <a href={`${data.reddit_url}`} target="_blank" rel='noreferrer'>
                        Access
                        </a>
                      </div>
                    ) : (
                      <></>
                    )
                    }

                  </div>
                </div>
                </div>
              </div>
              <div className="requerimentoPc">
                <div className="box">
                  <div className="boxHeader">
                    <div className="titulo">
                      <h6>Requirements for PC</h6>
                    </div>
                  </div>
                  <div className="boxAll">
                    <div className="texto">
                    { data.platforms?.map((plataformaStore,index) => (
                        Object.keys(plataformaStore.requirements).length !== 0 ? (                                      
                              <p  key={index}>
                                {plataformaStore.requirements.minimum}
                              </p>
                          ) : (
                          <></>                                 
                          )
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery">
          <OwlCarousel className='owl-theme' {...options}>
          { photo.map(({id,short_screenshots})=> (
              idUrl == id ? (
                short_screenshots.map((photosG)=> (
                  <img src={photosG.image} alt="" />
                ))
              ) : (
                <>
                </>
              )                
             )
          )} 
            { photo2.map(({id,short_screenshots})=> (
              idUrl == id ? (
                short_screenshots.map((photosG)=> (
                  <img src={photosG.image} alt="" />
                ))
              ) : (
                <>
                </>
              )                
             )
          )} 
            { photo3.map(({id,short_screenshots})=> (
              idUrl == id ? (
                short_screenshots.map((photosG)=> (
                  <img src={photosG.image} alt="" />
                ))
              ) : (
                <>
                </>
              )                
             )
          )}      
          </OwlCarousel>
          </div>
        </div>
      </Styled.Container>
    </>
  )
}
