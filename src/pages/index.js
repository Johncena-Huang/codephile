import React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Header from "../components/Header"
import Home from "../components/Home"
import About from "../components/About"
import Contact from "../components/Contact"
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"
import { SEO } from "../components/seo"
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

export default function indexPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Home />
      <Contact />
      <About />
      <Portfolio />
      <Footer />
    </ThemeProvider>
  )
}

export const Head = () => {
  return <SEO />
}
