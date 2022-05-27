import styled from "styled-components";


export const Container = styled.div`
height: 100% ;

.boxGameSingle{
    width: 100%;
    padding-left: 4.9rem;

    @media screen and (max-width:991px){
        padding-left:0 ;
    }

    .wallpaper{
        padding: 20px;
        min-height: 60vh;
        height: 70vh;

        @media screen and (max-width:991px){
            height: auto ;
            min-height: auto ;
        }

        .bordaWall{
            background-color: #0C1117;
            padding: 10px;
            border-radius: 5px;
            height: 100%;
            border: 1px solid #202020;

            .imagemGame{
                height: 100% ;
                background-size: cover ;
                background-position: center;
                border-radius: 5px ;                
                padding: 20px 30px ;
                background-repeat: no-repeat ;
                display: flex ;
                align-items: center;
                justify-content: flex-start;

                @media screen and (max-width:991px){
                    padding: 10px ;
                }
                

                .boxContainer{
                    width: 75% ;
                    display: flex ;
                    height: 80% ;
                    border-radius: 6px ;
                    background-color: #0C1117 ;

                    @media screen and (max-width:991px){
                        width:100% ;
                        display:block ;
                    }

                    .imagemGameDentro{
                        width: 30% ;

                        @media screen and (max-width:991px){
                        width:100% ;
                    }

                        img{
                            width: 100% ;
                            height: 100% ;
                            object-fit: cover ;
                            border-top-left-radius: 6px ;
                            border-bottom-left-radius: 6px ;
                            
                        }
                    }
                    .containerContextGame{
                        padding: 10px ;
                        width: 70% ;
                        position: relative;

                        @media screen and (max-width:991px){
                            width: 100%;
                            min-height: 480px;
                        }

                        .boxContainerContextoGameTop{
                            border-bottom: 1px solid #64646414;
                            padding-bottom: 10px ;
                            .titulo{
                                @media screen and (max-width: 767px){
                                    width: 70% ;
                                }
                                h2{
                                    color: var(--white) ;
                                    font-weight: 500 ;
                                }
                            }
                            .lancamento{
                                padding: 5px 0px;

                                svg{
                                    color: #2f363e;
                                }
                                span{
                                    margin-left: 6px;
                                    color:#2f363e ;
                                }
                            }
                        }

                        .plataformas{
                            display: flex;
                            flex-wrap: wrap;
                            padding-top: 10px;

                            .boxKey{
                                background: #18212c;
                                padding: 5px 20px;
                                margin: 5px;
                                border-radius: 20px;

                                span{
                                    color: var(--white);
                                    font-weight:600 ;
                                }

                                &.xbox{
                                    background: var(--activeColor) ;
                                }

                                &.playstation{
                                    background: var(--playstation) ;
                                }
                            }
                        }

                        .ratingMedium{

                            ul{
                                display: flex;
                                padding: 10px;
                                list-style: none;
                                li{
                                    margin: 0px 10px;
                                    color: #898989;
                                    display: flex;
                                    align-items: center;
                                    &:first-child{
                                        margin: 0;
                                    }

                                    svg{
                                        margin: 0px 6px 0px 0px;
                                    }
                                }
                            }
                        }
                        .metaScore{
                            position: absolute;                            
                            bottom: 120px;
                            right: 20px;

                            .box{
                                span{                                    
                                padding: 4px;
                                border-radius: 4px;
                                }
                            }
                        }

                        .boxOther{
                            padding: 15px 5px;
                            display: flex;
                            flex-wrap: wrap;
                            position: absolute;
                            right: 10px;
                            top: 0px;

                            /* @media screen and (max-width:470px){
                                top:65px ;
                            }

                            @media screen and (min-width:471px) and (max-width:991px){
                                top:30px ;
                            } */

                            .boxRating{
                                display: flex;
                                justify-content: center;
                                align-items: center;

                                .icone{
                                    margin: 0px 10px 0px 0px;
                                    font-size: 20px;
                                    svg{
                                        color: var(--activeColor) ;
                                    }
                                }

                                .boxTwoInfo{

                                    .titulo{
                                        color: #2f363e;
                                        text-transform: uppercase;
                                    }
                                    .nota{

                                        span{
                                            color: var(--white);
                                            font-weight: 600;
                                        }
                                    }
                                }
                            }
                        }
                        .moreGame{
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            text-align: right;
                            padding: 20px 20px;
                            background: #1a2127;
                            display: flex ;
                            align-items: center ;

                            @media screen and (max-width:991px){
                                flex-direction: column ;
                            }
                            .plataformasStore{
                                width: auto;
                                display: flex;
                                align-items: center;

                                a{
                                    @media screen and (max-width:991px){

                                        &:first-child{

                                            .platStoreImg{
                                            margin: 0 ;
                                            }
                                        }
                                        

                                    }
                                }
                                .platStoreImg {
                                        width: 100%;
                                        @media screen and (max-width:991px){
                                            
                                            margin: 0px 5px ;
                                        }                                        

                                        img{
                                            border-radius: 65px;
                                            height: 45px;
                                            object-fit: cover;
                                            width: 45px!important;
                                        }
                                    }
                            }
                            .botao{
                                display: flex;
                                position: absolute;
                                right: 10px;

                                @media screen and (max-width:991px){
                                    position:relative ;
                                    margin-top: 20px ;
                                }

                                a{
                                    background: #30373F;
                                    color: var(--white);
                                    padding: 10px 15px;
                                    border-radius: 8px;
                                    text-decoration: none;
                                    font-weight: 600;
                                }
                            }

                        }
                    }
                }
            }
        }
    }
    .overviewGame{
        padding: 0px 20px 20px 20px;

        .navOver{

            ul{
                list-style: none;
                border-bottom: 1px solid #3232325e;

                li{
                    color: var(--white);
                    position: relative;
                    width: 100px;
                    padding: 15px 0px;

                    &::after{
                        content: '';
                        display: block;
                        width: 100%;
                        height: 2px;
                        background: var(--activeColor);
                        margin-top: 15px;
                        position: absolute;
                        bottom: 0px;
                    }
                }
            }
        }

        .boxFlex{
            display: flex ;
            flex-wrap: wrap ;
            
            @media screen and (max-width:991px){
                display:block ;
            }

            .boxDescricao{
            padding: 20px 0px;
            width: 49% ;
            margin: 0px 10px 00px 0px ;

            @media screen and (max-width:991px){
                width:100% ;
            }

            .box{
                margin-bottom: 15px ;
                .boxHeader{
                    background: #1A2127;
                    padding: 15px 10px;                    
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;

                    .titulo{
                        h6{
                            color: var(--white);
                            text-transform: uppercase;
                            font-size: 25px;
                        }
                    }
                }
                .boxAll{
                    padding: 10px;                    
                    background: #0C1117;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;

                    .texto{

                        p{
                            color: var(--white);
                            line-height: 25px ;
                        }
                    }
                }
            }
            .reddit{
                position: relative;
                .box{

                    .boxHeader{

                        .titulo{
                            display: flex ;
                            img{
                                width: 40px ;
                                margin-left: 10px ;
                            }
                        }
                    }
                }

                .boxAll{
                    padding: 10px 10px 55px 10px ;
                    .link{
                        position:absolute ;
                        right: 20px ;
                        bottom: 20px ;
                        a{
                            background: #30373F;
                            color: var(--white);
                            padding: 10px 15px;
                            border-radius: 8px;
                            text-decoration: none;
                            font-weight: 600;
                        }
                        
                        img{
                            width: 50px ;
                        }
                    }
                }
            }
        }

        .requerimentoPc{
            padding: 20px 0px;
            width: 49% ;

            @media screen and (max-width:991px){
                width:100% ;
            }

            .box{

                .boxHeader{
                    background: #1A2127;
                    padding: 15px 10px;                    
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;

                    .titulo{
                        h6{
                            color: var(--white);
                            text-transform: uppercase;
                            font-size: 25px;
                        }
                    }
                }
                .boxAll{
                    padding: 10px;                    
                    background: #0C1117;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;

                    .texto{

                        p{
                            color: var(--white);
                            line-height: 25px ;
                        }
                    }
                }
            }
        }
        }
    }
    .gallery{
        padding: 0px 20px 20px 20px;

        img{
            height: 290px ;
            object-fit:cover ;
        }
    }
}
`;

