import React from "react"
import BarIcon from "../../utilities/BarIcon"
import CheckedIcon from "../../utilities/CheckedIcon"
import ExitIcon from "../../utilities/ExitIcon"
import FlagIcon from "../../utilities/FlagIcon"
import HomeIcon from "../../utilities/HomeIcon"
import LayerIcon from "../../utilities/LayerIcon"

import SearchIcon from "../../utilities/SearchIcon"
import SettingIcon from "../../utilities/SettingIcon"
import SupportIcon from "../../utilities/SupportIcon"
import UserIcon from "../../utilities/UserIcon"
import LogoMobile from "../../utilities/LogoMobile"

function MenuBar({
  showMenuBar,
  menuBar,
}: {
  showMenuBar: () => void
  menuBar: boolean
}) {
  return (
    <div
      className={menuBar ? "menubar-background" : "menubar-backgroundactive"}
    >
      <div className="side-wrapper">
        <div className="flex items-center justify-between mt-4 mb-6">
          <div className="cursor-pointer flex items-center ml-6">
            <LogoMobile />
            <h1 className="text-lg font-semibold text-custom-text-color-one ml-2">
              VENCRU
            </h1>
          </div>
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={showMenuBar}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.24553 7.50002L0.554113 1.8086C0.371054 1.62555 0.371054 1.32875 0.554112 1.14569L0.645447 1.05436C0.828505 0.871298 1.1253 0.871298 1.30836 1.05436L6.99978 6.74578L12.6912 1.05436C12.8743 0.871298 13.1711 0.871298 13.3541 1.05436L13.4454 1.14569C13.6285 1.32875 13.6285 1.62555 13.4454 1.8086L7.75403 7.50002L13.4454 13.1914C13.6285 13.3745 13.6285 13.6713 13.4454 13.8544L13.3541 13.9457C13.1711 14.1288 12.8743 14.1288 12.6912 13.9457L6.99978 8.25427L1.30836 13.9457C1.1253 14.1288 0.828506 14.1288 0.645447 13.9457L0.554112 13.8544C0.371054 13.6713 0.371054 13.3745 0.554112 13.1914L6.24553 7.50002Z"
              fill="#051438"
              stroke="#051438"
              stroke-width="0.5"
            />
          </svg>
        </div>
        <div className="relative mb-8 pl-6">
          <div className="absolute top-3.5 left-9">
            <SearchIcon />
          </div>
          <input className="rounded-10 input w-full" placeholder="search" />
        </div>
        <section className="mb-10">
          <div className="cursor-pointer flex items-center mb-6 ml-6">
            <HomeIcon />
            <span className="text-base font-medium text-custom-text-color-nav-link ml-2">
              Home
            </span>
          </div>
          <div className="mb-6 flex items-center justify-between ml-6">
            <div className="cursor-pointer flex items-center">
              <BarIcon />
              <span className="text-base font-medium text-custom-text-color-nav-link ml-2">
                Dashboard
              </span>
            </div>
            <span className="mr-2 bagde">10</span>
          </div>
          <div className="cursor-pointer flex items-center mb-6 ml-6">
            <LayerIcon />
            <span className="text-base font-medium text-custom-text-color-nav-link ml-2">
              Projects
            </span>
          </div>
          <div className="cursor-pointer flex items-center mb-6 pl-6">
            <CheckedIcon />
            <span className="text-base font-medium text-custom-text-color-nav-link ml-2">
              Tasks
            </span>
          </div>
          <div className="cursor-pointer flex items-center mb-6 ml-6">
            <FlagIcon />
            <span className="text-base font-medium text-custom-text-color-nav-link ml-2">
              Reporting
            </span>
          </div>
          <div className="cursor-pointer flex items-center mb-6 ml-6">
            <UserIcon />
            <span className="text-base font-medium text-custom-text-color-nav-link ml-2">
              Users
            </span>
          </div>
        </section>
        <section className="mb-6">
          <div className="cursor-pointer flex items-center mb-6 ml-6">
            <SupportIcon />
            <span className="text-base font-medium text-custom-text-color-nav-link ml-2">
              Support
            </span>
          </div>
          <div className="active-link mb-6 ml-3">
            <div className="cursor-pointer flex items-center">
              <SettingIcon />
              <span className="text-base font-bold text-custom-text-color-nav-link ml-2">
                Settings
              </span>
            </div>
          </div>
        </section>
        <section className="bg-gray-50 pt-4 pl-4 pb-4 pr-4 rounded-md ml-3">
          <h5 className="text-custom-text-color-one text-sm font-medium">
            New features available!
          </h5>
          <p className="text-feature">
            Check out the new dashboard view. Pages now load faster.{" "}
          </p>
          <img
            src="https://res.cloudinary.com/rashot/image/upload/v1672765105/Image_3_uoo8yk.png"
            height="auto"
            alt="featured-image"
            className="my-4 rounded-md"
          />
          <section className="flex items-center">
            <p className="font-medium text-sm text-gray-20">Dismiss</p>
            <p className="ml-5 text-purple-600 font-medium text-sm">
              What's new ?
            </p>
          </section>
        </section>
        <hr className="divide-y-md mt-6 mb-5 ml-4"></hr>
        <section className="flex items-start justify-between">
          <section className="flex items-center gap-3 ml-6 mb-5">
            <img src="https://res.cloudinary.com/rashot/image/upload/v1672765830/Avatar_y0c9r5.png" />
            <section>
              <p>Olivia Rhye</p>
              <p className="font-medium text-sm text-gray-20">
                olivia@untitledui.com
              </p>
            </section>
          </section>
          <div className="cursor-pointer">
            <ExitIcon />
          </div>
        </section>
      </div>
    </div>
  )
}

export default MenuBar
