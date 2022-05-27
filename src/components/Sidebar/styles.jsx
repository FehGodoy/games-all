import styled from "styled-components";


export const IconeMenu = styled.div`

    display: flex;
    left: 0;
    width: 100%;
    justify-content: space-between;
    padding: 8px 25px;
    background: #101418;
    top: 0;
    position: relative;
    z-index: 99 ;

    .logo{
        width: 50px;
        display: flex;
    }

    @media screen and (min-width:992px){
        display:none;
    }
    .mobileIcon{
        /* background: var(--activeColor); */
        padding: 8px 10px;
        border-radius: 5px;
        cursor: pointer ;
        
        span{
            color: var(--white);
            font-size: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`

export const Sidebar = styled.aside`
    @media screen and (min-width:992px){
        display:none ;
    }
    
    position: fixed ;
    z-index:999 ;
    width: 100% ;
    height: 100% ;
    background-color:var(--menu) ;
    display: grid;
    align-items:center;
    top:0 ;
    left:0;
    transition: .3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')} ;
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')} ;

    .icone{
        position:absolute;
        top:1.2rem;
        right: 1.5rem;
        background: transparent ;
        font-size:2rem;
        cursor:pointer;
        outline:none;
        span{
            color: var(--white) ;
        }
    }

    .sidebarWrapper{
        color: var(--white) ;

        .boxInsideNav{

            ul{

                li{
                    margin:15px 0px ;
                    a{
                        display: flex ;
                        align-items: center ;
                        justify-content: center ;
                        font-size: 1.5rem;
                        text-decoration: none ;
                        list-style:none ;
                        transition: .2s ease-in-out;
                        text-decoration: none ;
                        color: var(--white) ;
                        position:relative ;
                        

                        &:hover{
                            color: var(--activeColor) ;
                            transition: .2s ease-in-out;
                        }
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
                            position: absolute;
                            left: 25%;
                        }
                    }
                }
            }

            .userAvatar{
                position: absolute;
                bottom: 10px;
                padding: 10px;
                left: 0;
                right: 0;
            
            .imagem{

                img{
                    width: 20%;
                    height: 65px;
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