import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainLayout from "../components/DashboardLayout/layout"
import Settings from "../components/Settings"

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Settings />
    </MainLayout>
  )
}

export default Home
