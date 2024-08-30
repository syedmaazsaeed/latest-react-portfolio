import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareUpwork } from "react-icons/fa6";




const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target="_blank"><GrLinkedin /> </a>
      <a href="https://gitub.com" target="_blank"><FaGithubSquare />  </a>
      <a href="https://instagram.com" target="_blank"><TbBrandFiverr /> </a>
      <a href="https://twitter.com" target="_blank"><FaSquareXTwitter /></a>
      <a href="https://twitter.com" target="_blank"><FaSquareUpwork /></a>
    </div>
  )
}

export default HeaderSocials
