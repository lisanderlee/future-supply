import React from 'react'

export default function Footer() {
  return (
    <div className="lg:px-20  md:px-11 bg-black lg:pt-10  sm:px-5 p-5 pb-10">
    <div className="mx-auto px-2 sm:px-6  mt-10 flex  flex-col md:flex-row lg:flex-row	">
      <div className="flex flex-row lg:w-screen  justify-between ">
        <div className='flex'>
          <img src="images/images/logo-white.svg" alt="logo" />
        </div>
        <div className="flex flex-row mt-5">
          <img src="images/logos/social_icons/twitter_icon.svg" alt="logo" />
          <img className="ml-3" src="images/logos/social_icons/face_icon.svg" alt="logo" />
          <img className="ml-3" src="images/logos/social_icons/insta_icon.svg" alt="logo" />
          <img className="ml-3" src="images/logos/social_icons/git_icon.svg" alt="logo" />
        </div>
      </div>
    </div>
    <div className=" ">
      <div className="w-100 h-px bg-slate-400 mt-10"></div>
      <p className="font-midium text-slate-400 text-center mt-5 mb-5">
        © Copyright 2023 FutureSupply©. All rights reserved.
      </p>
    </div>
  </div>
  )
}
