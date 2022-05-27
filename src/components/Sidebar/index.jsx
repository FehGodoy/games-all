import React from 'react'
import * as Styled from './styles';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaBook,FaPlaystation,FaXbox } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import {BiHomeAlt} from "react-icons/bi";
import { RiComputerFill } from "react-icons/ri";
import Avatar from '../../media/avatar.jpg';
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '../../media/logo.png'

export default function Sidebar({toggle,isOpen}){

  return (
      <>
    <Styled.IconeMenu>
        <div className="logo">
            <NavLink to="/">
                <img src={Logo} alt="Games All" />
            </NavLink>
        </div>
        <div className="mobileIcon" onClick={toggle}>
            <span>
                <GiHamburgerMenu/>
            </span>
        </div>
    </Styled.IconeMenu>
    <Styled.Sidebar isOpen={isOpen} onClick={toggle}>
        <div className="icone" onClick={toggle}>
            <span>
                <AiOutlineCloseCircle />
            </span>            
        </div>
        <div className="sidebarWrapper">
            <div className="boxInsideNav">
                <ul>
                    <li>
                        <NavLink to="/" className='main-nav' activeClassName="main-nav-active">
                        <BiHomeAlt/> 
                        <span> Home </span>
                        </NavLink>                
                    </li>
                    <li>
                        <NavLink to="/category/2" className='main-nav' activeClassName="main-nav-active">
                        <FaPlaystation/> 
                        <span> Playstation </span>
                        </NavLink>                
                    </li>
                    <li>
                        <NavLink to="/category/3" className='main-nav' activeClassName="main-nav-active">
                        <FaXbox/> 
                        <span> Xbox </span>
                        </NavLink>                
                    </li>
                    <li>
                        <NavLink to="/category/1" className='main-nav' activeClassName="main-nav-active">
                        <RiComputerFill/> 
                        <span> PC </span>
                        </NavLink>                
                    </li>
                    <li>
                        <NavLink to="/about" className='main-nav' activeClassName="main-nav-active">
                        <FaBook/> 
                        <span> About us </span>
                        </NavLink>                
                    </li>
                </ul>
                <div className="userAvatar">
                    <div className="imagem">
                        <img src={Avatar} alt="Avatar" />
                    </div>
                </div>
            </div>
        </div>
    </Styled.Sidebar>
    </>
  )
}
