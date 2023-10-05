import React from 'react'
import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
    <div className='header'>
        <img src={logo} alt="Logo" className='logo' />
        <h3 className='customer'>Customer Sign In</h3>
        <button className='vendor-button'>Vendor Sign In</button>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="63" viewBox="0 0 67 63" fill="none">
            <g filter="url(#filter0_d_1_815)">
                <ellipse cx="33.4705" cy="25.5" rx="11.4705" ry="11.5" fill="#38B000"/>
            </g>
            <path d="M35.4947 23.4706L31.4463 27.5295M31.4463 23.4706L35.4947 27.5295M40.2178 25.5001C40.2178 29.2361 37.1969 32.2648 33.4705 32.2648C29.744 32.2648 26.7231 29.2361 26.7231 25.5001C26.7231 21.764 29.744 18.7354 33.4705 18.7354C37.1969 18.7354 40.2178 21.764 40.2178 25.5001Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
                <filter id="filter0_d_1_815" x="0" y="-4" width="66.9409" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="11"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_815"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_815" result="shape"/>
                </filter>
            </defs>
            </svg>
    </div>
    </>
  )
}

export default Header