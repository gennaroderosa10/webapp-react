import { useState } from 'react'
import Header from '../components/Header'

function App() {
  const nomeApp = "Movie App";

  return (
    <>
      <Header nomeApp={nomeApp} />
      <h1>HELLO WORLD</h1>
    </>
  )
}

export default App
