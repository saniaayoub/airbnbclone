import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/header'
const App = () => {
  useEffect(() => {}, [])

  const getData = async () => {
    try {
      const res = await fetch('https://api.covid19api.com/')
      const Data = await fetch('https://api.covid19api.com/all')

      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <Header />
    </>
  )
}

export default App
