import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target="_blank"><GrLinkedin /> </a>
      <a href="https://gitub.com" target="_blank"><FaGithubSquare />  </a>
      <a href="https://instagram.com" target="_blank"><FaInstagramSquare /> </a>
      <a href="https://twitter.com" target="_blank"><FaSquareXTwitter /></a>
    </div>
  )
}

export default HeaderSocials
