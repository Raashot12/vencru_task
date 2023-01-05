import React from "react"
import Sidebar from "../Sidebar"

function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="container-setting">
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}
export default MainLayout
