import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareUpwork } from "react-icons/fa6";




const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/syed-maaz-saeed-908718204/" target="_blank"  rel="noreferrer"><GrLinkedin /> </a>
      <a href="https://github.com/syedmaazsaeed" target="_blank"  rel="noreferrer"><FaGithubSquare />  </a>
      <a href="https://www.fiverr.com/maaz878/buying?source=avatar_menu_profile" target="_blank"  rel="noreferrer"><TbBrandFiverr /> </a>
      <a href="https://x.com/SyedMaazSaeed" target="_blank"  rel="noreferrer"><FaSquareXTwitter /></a>
      <a href="https://www.upwork.com/freelancers/~01107293c0befdc9ae" target="_blank"  rel="noreferrer"><FaSquareUpwork /></a>
    </div>
  )
}

export default HeaderSocials
