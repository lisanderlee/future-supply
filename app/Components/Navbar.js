import React from 'react'

export default function Navbar() {
  return (
    <div className="relative  m-3 mx-5 z-50  px-10 p-5 lg:px-280   h-16 ">
        <div className="flex items-center h-full justify-between ">
          <div>
            <p className="text-gray-50		">© 2023.</p>
          </div>
          <div>
            <img  src="images/images/logo.svg" alt="logo" width="200" />
          </div>
          <div>
            <img src="images/images/burger.svg" alt="logo" width="40" />
          </div>
        </div>
      </div>
  )
}
