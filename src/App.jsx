import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import LocationPage from "./pages/LocationPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/location/:id" element={<LocationPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </main>


    </>
  )
}

export default App
