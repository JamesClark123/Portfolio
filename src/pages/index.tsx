import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import FullPage from "../components/full-page"
import SEO from "../components/seo"
import Avatar from "../components/avatar"
import ExperienceTable from "../components/experience-table"
import ProjectsGrid from "../components/projects-grid"
import Button from "../components/button"

import experience from "../assets/experience"
import projects from "../assets/projects"

import "../styles/index.scss"

function IndexPage() {
  function MakeIntroduction() {
    return (
      <div className="introduction-text">
        <h1 className="introduction-header">Hi! I'm James.</h1>
        <p>
          I am a software engineer living in the San Francisco Bay Area. I enjoy
          fullstack and frontend development and am knowledgable in React and
          Typescript.
        </p>
      </div>
    )
  }

  function scrollTo(id: string) {
    return () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Layout
      navOptions={
        <div className="flx-row">
          <Button onClick={scrollTo("home")} text="Home" />
          <Button onClick={scrollTo("experience")} text="Experience" />
          <Button onClick={scrollTo("projects")} text="Projects" />
          <Button onClick={scrollTo("contact")} text="Contact" />
          <Button border>
            <a href={require("../assets/James_Clark_Resume.pdf")} download>
              Resume
            </a>
          </Button>
        </div>
      }
    >
      <SEO title="Home" />
      <FullPage id="home" className="introduction flx-row jc-se ai-c pt-l">
        <MakeIntroduction />
        <Avatar fileName="James_Clark_square.png" className="headshot" />
      </FullPage>
      <FullPage id="experience" className="flx-col jc-se ai-c">
        <h1>EXPERIENCE</h1>
        <ExperienceTable experience={experience} />
      </FullPage>
      <FullPage id="projects" className="flx-col jc-c ai-c">
        <h1 className="featured-title">FEATURED PROJECTS</h1>
        <ProjectsGrid projects={projects} />
      </FullPage>
      <FullPage id="contact" className="flx-col jc-c ai-c contact-page">
        <h1 className="contact">HIRE ME</h1>
        <p className="contact-p">
          I'm currently on the job hunt and you're always welcome to reach out
          to me! Shoot me an email and I'll do my best to get back to you.
        </p>
        <Button border className="contact-b">
          <a href="mailto:jamesloganclark@gmail.com">Contact</a>
        </Button>
      </FullPage>
    </Layout>
  )
}

export default IndexPage
