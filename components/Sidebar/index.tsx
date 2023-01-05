import BarIcon from "../../utilities/BarIcon"
import CheckedIcon from "../../utilities/CheckedIcon"
import ExitIcon from "../../utilities/ExitIcon"
import FlagIcon from "../../utilities/FlagIcon"
import HomeIcon from "../../utilities/HomeIcon"
import LayerIcon from "../../utilities/LayerIcon"
import Logo from "../../utilities/Logo"
import SearchIcon from "../../utilities/SearchIcon"
import SettingIcon from "../../utilities/SettingIcon"
import SupportIcon from "../../utilities/SupportIcon"
import UserIcon from "../../utilities/UserIcon"

function Sidebar() {
  return (
    <>
      <div
        className="bg-custom-green max-h-screen border border-custom-border-line-300 pr-6"
        id="sidebar"
      >
        <div className="side-wrapper">
          <div className="cursor-pointer flex items-center mb-6 ml-6">
            <Logo />
            <h1 className="text-lg font-semibold text-custom-text-color-one ml-2">
              VENCRU
            </h1>
          </div>
          <div className="relative mb-8 pl-6">
            <div className="absolute top-3.5 left-9">
              <SearchIcon />
            </div>
            <input className="rounded-10 input" placeholder="search" />
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
    </>
  )
}

export default Sidebar
