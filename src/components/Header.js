import React from "react"
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import Avatar from "@mui/material/Avatar"
import Link from "@mui/material/Link"
const navigationLinks = [
  { tag: "Home", url: "/#" },
  { tag: "Contact", url: "/#contact" },
  { tag: "About", url: "/#about" },
  { tag: "Portfolio", url: "/#portfolio" },
]
export default function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Link href="/#">
            <Avatar>J</Avatar>
          </Link>
          <div style={{ marginLeft: "auto" }}>
            {navigationLinks.map(({ tag, url }, index) => (
              <Link
                aria-label={tag + "_Section"}
                key={index}
                underline="none"
                color="inherit"
                href={url}
                sx={{ mx: 2, color: theme => theme.palette.text.secondary }}
              >
                {tag}
              </Link>
            ))}
            <Link
              aria-label="resume"
              underline="none"
              href="/resume.pdf"
              color="secondary"
              sx={{ mx: 2 }}
            >
              RESUME
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
