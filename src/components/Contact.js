import React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
// Icons
import IconButton from "@mui/material/IconButton"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import EmailIcon from "@mui/icons-material/Email"
// Squeeze image
import { StaticImage } from "gatsby-plugin-image"
const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}))
const socialMedia = [
  {
    label: "linkedIn",
    Icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/johnc-huang/",
  },
  {
    label: "github",
    Icon: GitHubIcon,
    url: "https://github.com/Johncena-Huang",
  },
  { label: "email", Icon: EmailIcon, url: "mailto: uo14231@gmail.com" },
]
export default function Contact() {
  return (
    <Container maxWidth="md" id="#contact" style={{ position: "relative" }}>
      <span id="contact" style={{ position: "absolute", top: "-64px" }}></span>
      <Box
        sx={{
          minHeight: "90vh",
          py: 8,
        }}
      >
        <Stack>
          <Item>
            <Typography
              variant="h3"
              sx={{ color: theme => theme.palette.text.primary }}
            >
              I am John Huang
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: "medium", height: "37.6px" }}
            >
              Web Developer
            </Typography>
          </Item>
          <Item>
            <StaticImage
              alt="profile-photo"
              loading="eager"
              placeholder="blurred"
              width={300}
              height={300}
              src="../images/profile.jpg"
              imgStyle={{ borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" }}
            />
            {/* <Box
              component="img"
              alt="profile photo"
              src={profile}
              sx={{ width: "300px", height: "300px" }}
              style={{
                borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
                objectFit: "cover",
              }}
            /> */}
          </Item>
          <Item>
            {socialMedia.map(({ label, Icon, url }, index) => (
              <IconButton
                key={index}
                sx={{ mx: 2 }}
                aria-label={label}
                target="_blank"
                href={url}
                rel="noreferrer noopener"
              >
                <Icon
                  fontSize="large"
                  sx={{ color: theme => theme.palette.text.secondary }}
                />
              </IconButton>
            ))}
          </Item>
        </Stack>
      </Box>
    </Container>
  )
}
