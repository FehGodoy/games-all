import styled from "styled-components";


export const Container = styled.div`
height: 100% ;

/* display: grid; 
grid-template-columns: 75px 95%; 
grid-template-rows: 70px 100%; 
gap: 0px 0px; 
grid-template-areas: 
    "i1 i1"
    "i2 i3"; */

    .boxSite{
    width: 100% ;
    /* grid-area: i3 ; */
    padding-left: 4.9rem ;
    

    .wallpaper{
        padding: 20px;
        min-height: 60vh;
        height: 70vh;

        .bordaWall{
            background-color: #0C1117;
            padding: 10px;
            border-radius: 5px;
            height: 100%;
            border: 1px solid #202020;

            .fundo{
                height: 100% ;
                background-size: cover ;
                background-position: top;
                border-radius: 5px ;                
                padding: 40px 30px ;
                background-repeat: no-repeat ;
                display: flex ;
                align-items: flex-start ;
                justify-content:flex-start ;

                .boxContainer{                   
                    max-width: 35%;
                    .titulo{
                        
                        h1{
                            color: var(--white) ;
                            font-weight: 700 ;
                            font-size: 45px ;
                        }
                    }
                    .texto{
                        p{
                            color: #adadad ;
                        }
                    }
                    .botao{
                        margin-top: 30px ;

                        a{
                            text-decoration: none ;
                            color: var(--white) ;
                            border: 2px solid #9600d3 ;
                            padding: 5px 20px ;
                            border-radius: 5px ;
                        }
                    }
                }                
            }
        }
    }

    @media screen and (max-width:991px){
        padding: 20px!important;

        .wallpaper{
            height: auto !important;
            padding:0 !important;
            min-height: auto !important;
            .fundo{    
                width: 100%!important;
                background-size: cover!important;
                height: 300px!important;

                .boxContainer{
                    max-width: 100%!important;

                    .titulo{

                        h1{
                            font-size: 20px!important;
                        }
                    }
                    .texto{
                        p{
                            font-size:14px !important;
                        }
                    }
                }
            }
        }
    }

    .boxBrowse{
        padding: 20px ;

        .tituloSection{
            padding-left: 12px ;
            margin-bottom: 30px ;
            h5{
                color: var(--white) ;
                font-size: 20px;
                text-transform: uppercase ;
            }
        }

        .boxAll{
            

            .produto{
                /* width: 200px; */
                height: 300px;
                margin: 5px 12px;
                background: #0C1117;
                padding: 6px;
                border-radius: 8px;
                border: 1px solid #202020;
                position: relative;

                .imagemGame{
                    background-size: cover;
                    height: 100%;
                    border-radius: 8px;
                    background-position: center;
                    display: flex ;
                    justify-content: center ;
                    align-items:flex-end ;

                    .information{
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        cursor: pointer;

                        a{
                            font-size: 22px ;

                            span{
                            color: #1c1c1c;
                            }
                        }                        
                    }

                    .classificacao{
                        margin-bottom: 20px ;
                        background-color: #0C1117 ;
                        padding: 8px 20px ;
                        border-radius: 50px ;
                        span{
                            color: var(--white) ;
                            font-weight: 600;
                            font-size:15px;

                            b{
                                color: #e5cb10;
                            }

                            &:last-child{
                                color: #e5cb10 ;
                            }
                        }
                    }
                }
            }
        }
        @media screen and (max-width:991px){
            padding:0px ;

            .tituloSection{
                margin: 20px 0px 10px 0px;
            }
        }
    }
    

    .melhores{
        padding: 15px ;
        @media screen and (max-width:991px){
            padding:10px ;
        }
        .tituloSection{
            padding-left: 12px ;
            margin-bottom: 30px ;
            @media screen and (max-width:991px){
                margin: 0px 0px 15px 0px ;
            }   
            h5{
                color: var(--white) ;
                font-size: 20px;
                text-transform: uppercase ;
            }
        }
        
        .boxAll{
            display: flex ;
            flex-wrap: wrap ;
            
            @media screen and (max-width:991px){
                display: block ;
                width:100% ;

                .produto{
                    width: 100%!important ;
                }
            }

            .produto{
                width: 330px;
                height: 450px;
                margin: 5px 5px;
                background: #0C1117;
                padding: 6px;
                border-radius: 8px;
                border: 1px solid #202020;

                .imagemGame{
                    background-size: cover;
                    height: 75%;
                    border-radius: 8px;
                    background-position: center;
                    display: flex ;
                    justify-content: flex-start ;
                    align-items:flex-start ;

                    .plataformas{                        
                        padding: 3px 5px ;
                        display: flex ;
                        flex-wrap: wrap ;
                        span{
                            color: var(--white) ;
                            font-weight: 600;
                            font-size:15px;
                            background-color: #0C1117 ;
                            padding: 8px 20px ;
                            border-radius: 50px ;
                            margin: 3px 5px ;

                            &.playstation{
                                background-color: var(--playstation) ;
                            }

                            &.xbox{
                                background-color: var(--xbox) ;
                            }


                        }
                    }

                }
                .boxProduto{
                        padding: 10px ;

                        .titulo{

                            span{
                                color: var(--white) ;
                                font-weight: 600;
                                font-size:17px;
                            }
                        }
                        .atualizacao{
                            span{
                                color: var(--activeColor) ;
                                font-weight: 300;
                                font-size:15px;
                            }
                        }
                        .avaliacao{
                            span{
                                color: var(--white) ;
                                font-weight: 600 ;

                                &:last-child{
                                    color: #e5cb10 ;
                                }

                            }
                        }
                }
            }
        }
    }
}

.browseVersion{
    padding-left: 4.9rem ;

    @media screen and (max-width:991px){
            padding:20px ;
            padding-left:0px ;
        }
    .boxBrowse{       
        padding: 10px ;
        @media screen and (max-width:991px){
            padding:10px ;
        }
        .tituloSection{
            padding-left: 12px ;
            margin-bottom: 30px ;
            @media screen and (max-width:991px){
                margin: 0px 0px 15px 0px ;
            }   
            h5{
                color: var(--white) ;
                font-size: 20px;
                text-transform: uppercase ;
            }
        }

        .boxAll{
            display: flex ;
            flex-wrap: wrap ;

            @media screen and (max-width:991px){
                display: block;
                width: 100%;
                padding: 0;
            }

            .produto{
                width: 315px;
                height: 300px;
                margin: 5px 12px;
                background: #0C1117;
                padding: 6px;
                border-radius: 8px;
                border: 1px solid #202020;

                @media screen and (max-width:991px){
                    width:100% ;
                    margin: 12px ;
                }

                .imagemGame{
                    background-size: cover;
                    height: 100%;
                    border-radius: 8px;
                    background-position: center;
                    display: flex ;
                    justify-content: center ;
                    align-items:flex-end ;

                    .avaliacao{
                        margin-bottom: 20px ;
                        background-color: #0C1117 ;
                        padding: 8px 20px ;
                        border-radius: 50px ;
                            span{
                                color: var(--white) ;
                                font-weight: 600 ;

                                &:last-child{
                                    color: #e5cb10 ;
                                }

                            }
                        }
                }
            }
        }
    }
    
}

.wallpaperSection{
    height: 520px ;
    background-size: cover ;
    display: flex ;
    width: 100% ;
    padding-left: 5rem ;

    @media screen and (max-width:991px){
            padding: 20px ;
            background-position: center ;
        }

    .boxImagemWar{
        position: relative;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        width: 50%;
        @media screen and (max-width:991px){
            display: none ;
        }
        img{
            width: auto;
            height: 500px;            
            object-fit: cover;            
        }
    }
    .textoSection{
        width: 50% ;
        display: flex ;
        align-items: center ;
        justify-content: center ;

        @media screen and (max-width:991px){
            width: 100% ;

            .box{
                max-width:100%!important ;
            }
        }
        .box{
            max-width: 70% ;

            .titulo{
                h1{
                    color: var(--white) ;
                    font-size: 45px;
                    font-weight: 700 ;
                }
            }
            .texto{

                p{
                    color: #979797 ;
                    font-weight: 400 ;
                }
            }

            .botao{
                margin-top: 30px ;
                a{
                    background-color: var(--activeColor) ;
                    color: var(--white) ;
                    text-decoration: none ;
                    font-weight: 600 ;
                    font-size: 20px ;
                    padding: 8px 20px ;
                    border-radius: 7px ;
                }
            }
        }
    }

}
`;

