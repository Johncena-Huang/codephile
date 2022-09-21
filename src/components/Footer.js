import React from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
export default function Footer() {
  return (
    <Box>
      <Container maxWidth="md">
        <Typography variant="h5" sx={{ textAlign: "center", my: 4 }} paragraph>
          &copy; 2022 Taipei Created by John Huang
        </Typography>
      </Container>
    </Box>
  )
}
