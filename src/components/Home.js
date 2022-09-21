import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
// Canvas
import Canvas from "../utils/Canvas"
import { matrixRain } from "../utils/Helpers"
// typist
import Typed from "react-typed"
export default function Home() {
  return (
    <Container maxWidth="md" id="#">
      <Box
        sx={{
          height: "90vh",
          py: 8,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Canvas
          draw={matrixRain}
          interval={80}
          style={{
            position: "absolute",
            inset: "0",
            height: "100%",
            width: "100%",
            zIndex: "-1",
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "700",
            fontFamily: "acumin-pro, sans-serif",
            fontSize: "108px",
            color: "#02b40d",
            textAlign: "center",
          }}
          style={{ filter: "brightness(2) contrast(2)" }}
        >
          <Typed
            strings={[`Hello! I am ${"<br />"} John Huang`]}
            typeSpeed={200}
            backDelay={1100}
            loop
          ></Typed>
        </Typography>
      </Box>
    </Container>
  )
}
