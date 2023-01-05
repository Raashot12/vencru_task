import React from "react"
import SearchIcon from "../../utilities/SearchIcon"
import EmailIcon from "../../utilities/EmailIcon"
import Logo from "../../utilities/Logo"
import LogoMobile from "../../utilities/LogoMobile"
import Hamburger from "../../utilities/Hamburger"
import IconVisa from "../../utilities/IconVisa"
import IconCheckBox from "../../utilities/IconCheckBox"
import UnChecked from "../../utilities/UnChecked"
import MastCardIcon from "../../utilities/MastCardIcon"
import IconPlus from "../../utilities/IconPlus"
import TableComponent from "./TableComponent"

const settingTags = [
  "My details",
  "Profile",
  "Password",
  "Team",
  "Plan",
  "Billing",
  "Notifications",
  "API",
]
const Settings = () => {
  return (
    <div>
      <div className="header">
        <div className="cursor-pointer flex items-center  ml-4">
          <LogoMobile />
          <h1 className="text-md font-semibold text-custom-text-color-one ml-2">
            VENCRU
          </h1>
        </div>
        <div onClick={() => alert("Coming soon")}>
          <Hamburger />
        </div>
      </div>
      <section className="mx-5 lg:ml-6">
        <span className="font-medium text-2xl lg:text-3xl ">Settings</span>
        <p className="font-normal text-base text-gray-20">
          Manage your team and preferences here.
        </p>
      </section>
      <div className="rounded-md border lg:ml-6 border-custom-border-line-300 bg-white lg:w-fit mt-5 mb-8 flex flex-shrink-0 flex-nowrap md:w-auto overflow-x-scroll lg:overflow-x-hidden">
        {settingTags.map((value: string) => {
          return (
            <div
              key={value}
              className="border-r-2 py-2 px-5 cursor-pointer last-of-type:border-r-neutral-50 whitespace-nowrap"
            >
              {value}
            </div>
          )
        })}
      </div>
      <div className="mb-5 mx-5 lg:ml-6">
        <span className="font-medium text-lg">Payment method</span>
        <p className="font-normal text-sm text-gray-20">
          Update your billing details and address.
        </p>
      </div>
      <hr className="divide-y-md mt-6  mb-5 w-10/12 lg:w-11/12 flex items-center justify-center mx-auto"></hr>
      <div className="flex items-start md:gap-20 lg:gap-40 gap-4 flex-wrap md:flex-nowrap mx-5 lg:ml-6">
        <div className="contact-title">
          <span className="font-medium text-sm">Contact email</span>
          <p className="font-normal text-sm text-gray-20">
            Where should invoices be sent?
          </p>
        </div>
        <section className="flex-1">
          <div>
            <div className="flex items-center gap-2">
              <input type="radio" className="accent-pink-500" />
              <div>
                <span className="font-medium text-sm">Payment method</span>
              </div>
            </div>
            <span className="font-normal text-sm text-gray-20 ml-5">
              olivia@untitledui.com
            </span>
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-2">
              <input type="radio" className="accent-pink-500" />
              <span className="font-medium text-sm">
                Send to an alternative email
              </span>
            </div>
            <div className="relative  pl-6">
              <div className="absolute top-5 left-9">
                <EmailIcon />
              </div>
              <input
                className="rounded-10 input inuo mt-2 w-full xl:w-6/12"
                placeholder="Email"
              />
            </div>
          </div>
        </section>
      </div>
      <hr className="divide-y-md mt-5 mb-5 ml-4"></hr>
      <div className="flex items-start md:gap-20 lg:gap-40 gap-4 flex-wrap md:flex-nowrap mx-5 lg:ml-6 mb-8">
        <div className="contact-title">
          <span className="font-medium text-sm">Contact email</span>
          <p className="font-normal text-sm text-gray-20">
            Where should invoices be sent?
          </p>
        </div>
        <section className="flex-1">
          <div className="w-full bg-custom px-4 py-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-2">
                <IconVisa />
                <div>
                  <div className="font-medium text-sm text-purple-1">
                    Visa ending in 1234
                  </div>
                  <div className="font-sm text-sm text-purple-2 mb-2">
                    Expiry 06/2024
                  </div>
                  <span className="font-sm text-sm text-purple-2 mr-3 cursor-pointer">
                    Set as default
                  </span>
                  <span className="cursor-pointer font-medium text-sm text-purple-2">
                    Edit
                  </span>
                </div>
              </div>
              <IconCheckBox />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-custom-two px-4 py-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-2">
                  <MastCardIcon />
                  <div>
                    <div className="font-medium text-sm text-custom-text-color-nav-link">
                      Mastercard ending in 1234
                    </div>
                    <div className="font-sm text-sm text-gray-20 mb-2">
                      Expiry 06/2024
                    </div>
                    <span className="font-sm text-sm text-gray-20 mr-3 cursor-pointer">
                      Set as default
                    </span>
                    <span className="cursor-pointer font-medium text-sm text-purple-2">
                      Edit
                    </span>
                  </div>
                </div>
                <UnChecked />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer mt-4">
            <IconPlus />
            <p className="font-sm text-sm text-gray-20">
              Add new payment method
            </p>
          </div>
        </section>
      </div>
      <TableComponent />
    </div>
  )
}

export default Settings
