import React from 'react'
import './InfoBar.css'
import onlineIcon from '../../icons/icons8-online-30.png'
import closeIcon from '../../icons/close.png'

const InfoBar = ({room}) => {
  return (
    <div className='infoBar'>
        <div className='leftInnerContainer'>
            <img className='onlineIcon' src={onlineIcon} alt='online'/>
            <h3>{room}</h3>
        </div>
        <div className='rightInnerContainer'>
            <a href='/'><img src={closeIcon} alt='close'/></a>
        </div>
    </div>
  )
}

export default InfoBar