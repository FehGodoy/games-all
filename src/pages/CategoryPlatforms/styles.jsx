import styled from "styled-components";


export const Container = styled.div`
height: 100% ;

    .boxGameSingle{
        padding-left: 4.9rem ;

        
        @media screen and (max-width:991px){
            padding-left:0 ;
        }
        .wallpaper{        
        min-height: 60vh;
        height: 70vh;
        padding: 20px ;


        .bordaWall{
            background-color: #0C1117;
            padding: 10px;
            border-radius: 5px;
            height: 100%;
            border: 1px solid #202020;

            .fundo{
                height: 100% ;
                background-size: cover ;
                background-position: center;
                border-radius: 5px ;                
                padding: 40px 30px ;
                background-repeat: no-repeat ;
                display: flex ;
                align-items: flex-start ;
                justify-content:flex-start ;               
            }
        }
    }
        .melhores{
            padding: 0px 20px 20px 20px ;
            display: flex ;
            flex-wrap: wrap ;

            @media screen and (max-width:650px){
            display: block ;
            width: 100% ;

            .produto{
                width: 100%!important ;
            }
        }

        @media screen and (min-width:651px) and (max-width:991px){
            display: flex ;
            width: 100% ;

            .produto{
                max-width: 330px;
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
`;

