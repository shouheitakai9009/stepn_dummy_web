import React from 'react'
import { Catchcopy } from '../molecules/catchcopy'
import { Header } from '../organisms/header'
import { GlobalNavigation } from '../organisms/global_navigation'

export const Home = () => {
  return (
    <article id="home">
      <Header />
      <Catchcopy />
      <GlobalNavigation />
    </article>
  )
}