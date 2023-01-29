import { Button } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import React from 'react'
import Appbar from './Component'
import Banner from './Component/Banner'
import { UIProvider } from './Ui'
import './App.css'

import theme from './Styles/theme/Theme'
import { useState } from 'react'
import { BrushTwoTone } from '@mui/icons-material'
import Section from './Component/Section'
import InfoBoard from './Component/InfoBoard/InfoBorad'
import Article from './Component/Article/Article'
import Wall from './Component/Wall/Wall'
import Footer from './Component/Footer/Footer'
import NavBar from './Component/NavBar/NavBar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <UIProvider>
         <NavBar location='/' />
          <Banner />
          <Section />
          <InfoBoard />
          <Article />
          <Wall />
          <Footer />
        </UIProvider>
      </div>
    </ThemeProvider>
  )
}

export default App
