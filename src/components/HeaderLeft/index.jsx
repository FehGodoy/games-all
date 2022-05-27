import React from 'react'
import * as Styled from './styles';
import {BiHomeAlt} from "react-icons/bi";
import { FaBook,FaPlaystation,FaXbox } from "react-icons/fa";
import Logo from '../../media/logo.png'
import Avatar from '../../media/avatar.jpg';
import { NavLink } from 'react-router-dom';
import { RiComputerFill } from "react-icons/ri";

export default function HeaderLeft() {

  

  return (
    <>
      <Styled.HeaderLeft>        
        <div className="menu">
          <div className="box">
            <div className="logo">
            <NavLink to="/">
              <img src={Logo} alt="Games All" />    
              </NavLink>    
            </div>
            <ul>
              <li>
                <NavLink to="/" className='main-nav' activeClassName="main-nav-active">
                  <BiHomeAlt/>
                </NavLink>                
              </li>
              <li>
                <NavLink to="/category/2" className='main-nav' activeClassName="main-nav-active">
                  <FaPlaystation/>
                </NavLink>                
              </li>
              <li>
                <NavLink to="/category/3" className='main-nav' activeClassName="main-nav-active">
                  <FaXbox/>
                </NavLink>                
              </li>
              <li>
                <NavLink to="/category/1" className='main-nav' activeClassName="main-nav-active">
                  <RiComputerFill/>
                </NavLink>                
              </li>
              <li>
                <NavLink to="/about" className='main-nav' activeClassName="main-nav-active">
                  <FaBook/>
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
      </Styled.HeaderLeft>
    </>
  )
}
