'use client'

import React from 'react'
import Header from '../components/Header'
import TemplateCards from '../components/TemplateCards'
import Footer from '../components/Footer'
import ChooseTemplate from '../components/ChooseTemplate'


const Home = ({ isLogged, setIsLogged, user, sites, setSiteId }) => {

  const [open, setOpen] = React.useState(false)
  return (
    <div>
      <Header isLogged={isLogged} setIsLogged={setIsLogged} user={user} openModal={open} setOpenModal={setOpen}/>
      {
        open && <ChooseTemplate open={open} setOpen={setOpen} />
      }
      <TemplateCards isLogged={isLogged} sites={sites} setSiteId={setSiteId}/>
      <Footer />
    </div>
  )
}

export default Home;
