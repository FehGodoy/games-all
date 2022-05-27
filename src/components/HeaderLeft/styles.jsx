import styled from "styled-components";


export const HeaderLeft = styled.div`
    display: flex;
    flex-direction: column ;
    background-color: var(--menu) ;         
    height: 100%;    
    width: 81px ;
    z-index: 999 ;
    /* grid-area: i2 ; */
    position: fixed ;
    padding-top: 10px ;
    
    @media screen and (max-width:991px){
        display: none ;
    }

    .menu{

        .box{

            .logo{
            
            border-bottom: 1px solid #46464673;
            height: 75px;
            display: flex;
            align-items: center;
            padding: 0px 20px;
            width: 80px ;
            justify-content: center ;

            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }

            span{
                color: var(--activeColor) ;
                font-size: 25px ;
            }
        }
        ul{
            margin-top: 10px;
            display: grid;
            justify-content: center;
            flex-direction: column;
            list-style: none ;
            li{


                a{
                    width: 48px;
                    height: 50px;
                    display: flex;
                    margin: 10px 0px ;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    background-color: #2F363E ;

                    &.active{
                    position: relative ;
                    background: var(--activeColor);                    
                    box-shadow: 7px 0 4px 2px #01620166;
                        
                            &::after{
                                content: '';
                                display: block;
                                height: 50px;
                                width: 3px;
                                background-color: var(--activeColor);
                                position: absolute;
                                right: -15px;
                                top: 0px;
                            }

                            svg{
                                color: var(--white);
                                font-size: 25px;
                            }
                    }

                    svg{
                        color: #979797;
                        font-size: 25px;
                    }

                }

            }
        }
        .userAvatar{
            position: absolute;
            bottom: 10px;
            padding: 10px;
            
            .imagem{

                img{
                    width: 80%;
                    height: 45px;
                    object-fit: cover;
                    border-radius: 8px;
                    display: flex;
                    margin: 0 auto;
                }
            }
        }
        }
    }
`;