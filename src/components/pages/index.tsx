import React, { useState } from 'react'
import { Catchcopy } from '../molecules/catchcopy'
import { Header } from '../organisms/header'
import { GlobalNavigation } from '../organisms/global_navigation'
import { SigninModal } from '../organisms/signin_modal'
import { SignupModal } from '../organisms/signup_modal'

export const Home = () => {

  const [showSignup, setShowSignup] = useState<boolean>(true)

  return (
    <article id="home">
      <Header />
      <Catchcopy />
      <GlobalNavigation />
      {
        showSignup
          ?
          <SignupModal isOpen={true} onClickToSignin={() => setShowSignup(false)} />
          :
          <SigninModal isOpen={true} onClickToSignup={() => setShowSignup(true)} />
      }
    </article>
  )
}