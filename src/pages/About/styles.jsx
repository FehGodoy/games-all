import styled from "styled-components";


export const Container = styled.div`
    height: 100% ;
    .boxAbout{
        padding-left: 5.9rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        height: 100%;

        @media screen and (max-width:991px){
            display: block ;
            padding-left:0 ;
        }

        .boxContent{
            width: 50%;
            padding-left: 40px ;
            .tituloPage{

                h5{
                    color: var(--white);
                    font-size: 25px;
                    font-weight: 500;
                    text-transform: uppercase;
                    position: relative;
                    margin-left: 5px;

                    &::before{
                        content: '';
                        display: block;
                        width: 3px;
                        height: 35px;
                        background-color: var(--activeColor);
                        position: absolute;
                        left: -7px;
                    }
                }
            }
            .tituloContent{

                h1{
                    color: var(--white);
                    font-size: 35px;
                    font-weight: 600;
                    margin-bottom: 20px;
                }
            }
            .texto{

                p{
                    color: var(--white);
                    font-size: 19px;
                    line-height: 25px;
                }
            }
            .button{
                margin-top:40px ;
                a{
                    text-transform: uppercase;
                    color: var(--activeColor);
                    border: 1px solid var(--activeColor);
                    padding: 6px 40px;
                    transition: ease-in .5s ;

                    &:hover{
                        background-color: var(--activeColor) ;
                        color: var(--white) ;
                    }
                }
            }

            @media screen and (max-width:991px){
                width:100% ;
                padding:20px ;                
            }
        }
        .wallpaperPage{
            width: 50% ;      
            
            @media screen and (max-width:991px){
            width:100%;
        }

            .imagem{
                width: 100% ;
                padding: 30px ;
                img{
                    height: 400px;
                    object-fit: cover;
                    object-position: left;
                    border-radius: 8px ;
                }

                @media screen and (max-width:991px){
                        padding: 20px ;
                    }
            }
        }
    }
`;

