import React, {useEffect, useState} from 'react';
import * as Styled from './styles';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaStar,FaInfoCircle } from "react-icons/fa";
import wallpaper from '../../media/wallpaper.png';
import warzoneSection from '../../media/wallpaper-section.png';
import warzoneVic from '../../media/warzone.png';
import { NavLink  } from 'react-router-dom';
// import Carregando from '../../components/Carregando';



export default function Home() {

  const [data, setData] = useState([]); 
  const [data2, setData2] = useState([]); 
  const [data3, setData3] = useState([]); 
  // const [carregando, setCarregando] = useState(false)
  

  

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=328c7603ac77465895cf471fdbba8270')
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);  
        // setCarregando(true);                  
      })
      .catch((err) => {
        console.log(err);
      });

      fetch('https://api.rawg.io/api/games?key=328c7603ac77465895cf471fdbba8270&page=2')
      .then((res) => res.json())
      .then((data2) => {
        setData2(data2.results);                  
      })
      .catch((err) => {
        console.log(err);
      });

      fetch('https://api.rawg.io/api/games?key=328c7603ac77465895cf471fdbba8270&page=3')
      .then((res) => res.json())
      .then((data3) => {
        setData3(data3.results);                  
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
            items: 6,

        }
    },
};
  
  return (
    
    <>
      <Styled.Container>                     
          <div className="boxSite">
            <div className="wallpaper">
              <div className="bordaWall">
                <div className="fundo" style={{backgroundImage: `url(${wallpaper})`}}>
                  <div className="boxContainer">
                    <div className="titulo">
                      <h1>LEAGUE OF LEGENDS <br />
                        10V10 TOURNAMENT
                      </h1>
                    </div>   
                    <div className="texto">
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero magni quam voluptas possimus nemo aspernatur eveniet excepturi maxime?</p>  
                    </div> 
                    <div className="botao">
                      <a href="https://lolesports.com/" target="_blank">
                          ABOUT MORE
                      </a>
                    </div>
                  </div>              
                </div>
              </div>              
            </div>
            <div className="boxBrowse">
              <div className="tituloSection">
                <h5>Recommended for you</h5>
              </div>
              <div className="boxAll">                
                <OwlCarousel className='owl-theme' {...options}>                
                  { data.map(({id, background_image, name, rating})=> (                    
                    <div className="produto" key={id}>
                      <div className="imagemGame" style={{backgroundImage: `url(${background_image})`}}>
                        <div className="information">                          
                          <NavLink to={{                            
                            pathname:`/single-game/${id}`, 
                            nameGame:name                           
                            }}>                          
                            <span>
                            <FaInfoCircle/>                            
                          </span>                          
                          </NavLink>                                                                      
                        </div>
                          <div className="classificacao">
                            <span> Avaliação <b> {rating} </b></span>
                            <span> <FaStar /></span>
                          </div>
                      </div>
                    </div>                              
                  ))}                                    
                </OwlCarousel>
              </div>
            </div>
            <div className="melhores">
              <div className="tituloSection">
                <h5>Popular games</h5>
              </div>
              <div className="boxAll">                
                  { data2.map(({id,background_image,name,parent_platforms,updated,rating})=> (
                    <NavLink to={{                            
                      pathname:`/single-game/${id}`, 
                      nameGame:name                           
                      }}> 
                    <div className="produto" key={id}>
                      <div className="imagemGame" style={{backgroundImage: `url(${background_image})`}}>
                        <div className="plataformas">
                          {
                            parent_platforms.map((plataforma)=>(
                              <span className={plataforma.platform.slug}>{plataforma.platform.name}</span>
                            ))
                          }
                        </div>
                      </div>
                      <div className="boxProduto">
                          <div className="titulo">
                            <span> {name} </span>
                          </div>
                          <div className="atualizacao">
                            <span>Última atualização: {updated} </span>
                          </div>
                          <div className="avaliacao">
                              <span>
                              {rating}
                              </span>
                              <span> <FaStar /></span>
                          </div>
                      </div>
                    </div>
                    </NavLink>
                  ))}                
              </div>
            </div>
          </div>        
          <div className="wallpaperSection" style={{backgroundImage: `url(${warzoneSection})`}}>
              <div className="boxImagemWar">
                <img src={warzoneVic} alt="Vitória" />
              </div>
              <div className="textoSection">
                <div className="box">
                  <div className="titulo">
                    <h1>Lorem Ipsum Dolor sit amet</h1>
                  </div>
                  <div className="texto">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis perferendis illum ipsa obcaecati cupiditate libero quas, deleniti ipsam beatae odio quidem aliquam inventore officia recusandae accusantium.</p>
                  </div>
                  <div className="botao">
                    <NavLink to="/">
                      Lorem Ipsum
                    </NavLink> 
                  </div>
                </div>
              </div>
          </div>
          <div className="browseVersion">
            <div className="boxBrowse">
                <div className="tituloSection">
                  <h5>Others games</h5>
                </div>
                <div className="boxAll">                         
                    { data3.map((games)=> (
                      <div className="produto" key={games.id}>
                      <NavLink to={{                            
                      pathname:`/single-game/${games.id}`, 
                      nameGame:games.name                           
                      }}> 
                        <div className="imagemGame" style={{backgroundImage: `url(${games.background_image})`}}>
                            <div className="avaliacao">
                              <span> Avaliação <b> {games.rating} </b> </span><span> <FaStar /></span>
                            </div>
                        </div>
                        </NavLink>
                      </div>
                    ))}
                </div>
              </div>
          </div>
        </Styled.Container>
        
    </>
  )
}
