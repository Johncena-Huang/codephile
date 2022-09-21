import React from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
// Squeeze image
import { StaticImage } from "gatsby-plugin-image"
const information = [
  { label: "Name", content: "Wei-Ren, Huang" },
  { label: "Gender", content: "Male" },
  { label: "Birthyear", content: "1993" },
  { label: "Location", content: "Taipei, Taiwan" },
  { label: "Email", content: "uo14231@gmail.com" },
]
export default function About() {
  return (
    <Container maxWidth="md" style={{ position: "relative" }}>
      <span id="about" style={{ position: "absolute", top: "-64px" }}></span>
      <Box sx={{ minHeight: "90vh" }}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          About Me
        </Typography>
        <Grid container spacing={2} sx={{ mt: 8 }}>
          <Grid
            item
            xs={12}
            md={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <StaticImage
              alt="selfie"
              loading="eager"
              placeholder="blurred"
              width={300}
              height={300}
              src="../images/selfie.jpg"
            />
            {/* <Box
              component="img"
              alt="selfie"
              src={selfie}
              sx={{ width: "300px", height: "300px" }}
              style={{
                objectFit: "cover",
              }}
            /> */}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Box sx={{ textAlign: { xs: "center", md: "left" }, mt: 2 }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "20px",
                  width: "40ch",
                  color: theme => theme.palette.text.secondary,
                  fontWeight: "regular",
                }}
              >
                My name is John—a self-taught developer, based in Taipei,
                Taiwan. My journey into web development began in the first half
                of 2022.
              </Typography>
              <List style={{ display: "inline-block" }}>
                {information.map(({ label, content }, index) => (
                  <ListItem
                    key={index}
                    sx={{ fontWeight: "bold", px: 0, mx: 0 }}
                  >
                    {label + ":"}
                    <Box
                      component="span"
                      sx={{
                        fontWeight: "normal",
                        ml: 1,
                        color: theme => theme.palette.text.secondary,
                      }}
                    >
                      {content}
                    </Box>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
