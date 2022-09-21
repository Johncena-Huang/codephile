import React from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
// Card
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
//portfilio
import IconButton from "@mui/material/IconButton"
import GitHubIcon from "@mui/icons-material/GitHub"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
// ImageWrapper
import ImageEffectWrapper from "../utils/ImageEffectWrapper"
// grapthql
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// const projects = [
//   {
//     name: "LangIsland-Reads",
//     subTitle: "MERN Application",
//     introduction:
//       "The MERN application where users can share their book reflections, import notes from notion and interact with other users via the comment system.",
//     img: langisland,
//     github: "https://github.com/Johncena-Huang/langisland-reads",
//     demo: "https://langisland-reads.herokuapp.com/",
//   },
//   {
//     name: "Explore-Taiwan",
//     subTitle: "Vanilla JavaScript",
//     introduction:
//       "The website for toursits to seek for touism info, such as scenic spots, local restaurants, special events...",
//     img: exploreTaiwan,
//     github: "https://github.com/Johncena-Huang/travel-website",
//     demo: "https://travel-around-taiwan.netlify.app/",
//   },
// ]
export default function Portfolio() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            demo
            github
            introduction
            name
            subTitle
            img {
              childImageSharp {
                gatsbyImageData(
                  height: 194
                  placeholder: BLURRED
                  layout: FIXED
                )
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Container maxWidth="md" style={{ position: "relative" }}>
      <span
        id="portfolio"
        style={{ position: "absolute", top: "-64px" }}
      ></span>
      <Box sx={{ minHeight: "90vh" }}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Portfolio
        </Typography>
        <Grid container spacing={4} sx={{ mt: 8 }}>
          {data.allMarkdownRemark.nodes.map(
            ({
              frontmatter: { demo, github, introduction, name, subTitle, img },
              id,
            }) => (
              <Grid item xs={12} md={6} key={id}>
                <Card style={{ height: "100%" }}>
                  <CardHeader
                    title={name}
                    subheader={subTitle}
                    sx={{ textAlign: "center" }}
                  />
                  <ImageEffectWrapper
                    text="Click The Link Down For Live Demo"
                    effect="fade"
                  >
                    <GatsbyImage
                      image={getImage(img)}
                      alt={name}
                      objectFit="contain"
                      style={{ margin: "0 auto" }}
                    />
                    {/* <CardMedia
                      component="img"
                      image={img}
                      alt={name + "-project"}
                      height="194"
                      sx={{ objectFit: "contain" }}
                    /> */}
                  </ImageEffectWrapper>
                  <CardContent style={{ height: "80px", overflow: "auto" }}>
                    <Typography
                      sx={{ textAlign: "left" }}
                      variant="subtitle2"
                      paragraph
                    >
                      {introduction}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <IconButton
                      aria-label="github-link"
                      href={github}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <GitHubIcon fontSize="large" />
                    </IconButton>
                    <IconButton
                      aria-label="Live-demo-link"
                      href={demo}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <OpenInNewIcon fontSize="large" />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </Container>
  )
}
