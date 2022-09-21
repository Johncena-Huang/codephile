import React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { SEO } from "../components/seo"
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})
const NotFoundPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <Box
          sx={{
            height: "78vh",
            py: 8,
          }}
        >
          <Typography variant="h2" align="center">
            NOT FOUND
          </Typography>
          <Typography variant="h4" align="center">
            There is no such route!
          </Typography>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}
export default NotFoundPage

export const Head = () => {
  return <SEO />
}
