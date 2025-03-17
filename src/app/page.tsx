import React from 'react'
import "@/styles/home.scss"
import Sidebar from '@/components/Sidebar'

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <main className='flex-1'>
        <h1 className='main-heading'>NEH</h1>
        <span className='italic text-white'>Pronunciation: /neɪ/</span>
        <p className="main-paragraph mt-4">
          My name's Neh, and I'm a software engineer.
        </p>
      </main>
    </div>
  )
}

export default Home