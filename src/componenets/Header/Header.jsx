import React, { useState } from 'react'
import "./Header.css"
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

export const Header = () => {
  const [menuOpened, setMenuOpened]= useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && "-100%"}
    }
  }

  // const [oldSticky, newSticky] = useState('flexCenter paddings innerWidth h-container');

  // window.onscroll =()=> {
  //   let temp;
  //   let top =window.scrollY;
  //   if(top> 100){
  //     temp = 'h-wrapper sticked';
  //   }
  //   else {
  //     temp ='h-wrapper';
  //   }
  //   return newSticky(temp);
  // }

  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container'>
            <img src="./logo.png" alt="logo" width={100} />
            <OutsideClickHandler onOutsideClick={()=>setMenuOpened(false)}>
            <div className='flexCenter h-menu'
            style = {getMenuStyles(menuOpened)}>
                <a href="">Residencies</a>
                <a href="">Our Value</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                <button className='button'><a href="">Contact</a></button>
                
            </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick={()=>setMenuOpened((prev) => !prev)}>
              <BiMenuAltRight size={30}/>
            </div>
        </div>
        
    </section>
  )
}
