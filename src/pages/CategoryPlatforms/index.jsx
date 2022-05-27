import React, { useState,useEffect } from 'react';
import * as Styled from './styles';
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { NavLink  } from 'react-router-dom';
import wallpaperPSN from '../../media/playstation-page.png';
import wallpaperXbox from '../../media/xbox-page.jpg';
import wallpaperPC from '../../media/pc-page.jpg';



export default function SinglePage() {

  const {idPlatform} = useParams();
  const [data,setData] = useState([]);
  const [data2,setData2] = useState([]);  
  const [data3,setData3] = useState([]);  
  const [data4,setData4] = useState([]);  
  


  useEffect(() => {
    const page1 = fetch('https://api.rawg.io/api/games?key=328c7603ac77465895cf471fdbba8270');
    const page2 = fetch('https://api.rawg.io/api/games?key=328c7603ac77465895cf471fdbba8270&page=2');
    const page3 = fetch('https://api.rawg.io/api/games?key=328c7603ac77465895cf471fdbba8270&page=3');
    const page4 = fetch('https://api.rawg.io/api/games?key=328c7603ac77465895cf471fdbba8270&page=4');

    Promise.all([page1,page2,page3,page4]).then(data =>{
      return Promise.all(data.map(res => res.json()));    
    }).then(([page1,page2,page3,page4]) =>{
      setData(page1.results);
      setData2(page2.results);
      setData3(page3.results);
      setData4(page4.results);
    }).catch((err) => {
          console.log(err);
        });
  }, []);

  
  
  
  return (
    <>
      <Styled.Container>
        <div className="boxGameSingle">                          
        {
            idPlatform == 2 ? 
            <div className="wallpaper">
            <div className="bordaWall">                
              <div className="fundo" style={{backgroundImage: `url(${wallpaperPSN})`}}>             
              </div>                
            </div>              
          </div>
          : null
          }
          {
            idPlatform == 3 ? 
            <div className="wallpaper">
            <div className="bordaWall">                
              <div className="fundo" style={{backgroundImage: `url(${wallpaperXbox})`}}>             
              </div>                
            </div>              
          </div>
          : null
          }
          {
            idPlatform ==  1 ? 
            <div className="wallpaper">
            <div className="bordaWall">                
              <div className="fundo" style={{backgroundImage: `url(${wallpaperPC})`}}>             
              </div>                
            </div>              
          </div>
          : null
          }
        <div className="melhores">

              { data.map(({parent_platforms,id,name,background_image,updated,rating}) => (
                <>
                  {
                    parent_platforms.map((plataforma)=>{
                      if (plataforma.platform.id == idPlatform) {
                        return (  
                          <>   
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
                          </>
                      )} 
                    })
                  }
                </>
              ))}
              { data2.map(({parent_platforms,id,name,background_image,updated,rating}) => (
                <>
                  {
                    parent_platforms.map((plataforma)=>{
                      if (plataforma.platform.id == idPlatform) {
                        return (  
                          <>   
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
                          </>
                      )} 
                    })
                  }
                </>
              ))}
              { data3.map(({parent_platforms,id,name,background_image,updated,rating}) => (
                <>
                  {
                    parent_platforms.map((plataforma)=>{
                      if (plataforma.platform.id == idPlatform) {
                        return (  
                          <>   
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
                          </>
                      )} 
                    })
                  }
                </>
              ))}
              { data4.map(({parent_platforms,id,name,background_image,updated,rating}) => (
                <>
                  {
                    parent_platforms.map((plataforma)=>{
                      if (plataforma.platform.id == idPlatform) {
                        return (  
                          <>   
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
                          </>
                      )}
                    })
                  }
                </>
              ))}
            </div>      
        </div>
      </Styled.Container>
    </>
  )
}
