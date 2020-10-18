import React from 'react'

import Layout from '../components/Layout'
import Title from '../components/Title'
import Text from '../components/Text'
import Subtitle from '../components/Subtitle'
import SectionTitle from '../components/SectionTitle'
import Navigation from '../components/Navigation'

const IndexPage = () => {
  return (
    <Layout>
      <Navigation />
      <div className="sectioBreak">
        <Title>About me</Title>
        <Text>
          I'm a self-taught developer that came from a chemical engineering
          background in my previous. I worked in Germany the last 4 years and of
          the engineering career before decide to change. During this time, I
          had the opportunity to deal not only with the professional challenges
          but also with a new culture and a new language.
          <p>
            The interest on frontend develpment came in 2016. At first, it
            started as a hobby but soon became more than that, and the interest
            for the tech industry grew exponentially. I learned css, html,
            javascript, jquery and node js on treehouse platform.
          </p>
          <p>
            In 2017 I found the perfect timing to pursue my passion and I
            started to do some client projects using WordPress and Shopify.
          </p>
          <p>
            In January 2018, I joined the new Digital School program that is
            tailored to and driven by each student's professional goals and
            personal needs. It was a good place to work on personal and client
            projects, with the support and guidance of industry experts, a
            network of mentors and a team of facilitators. I learned design
            skills that complement me as a frontend developer, especially on the
            problem-solving approach and having a better understanding of the
            collaborative work between designers and developers.
          </p>
        </Text>
      </div>

      <div className="sectionWrapper">
        <Title>Education</Title>
        <Subtitle>
          TNDS UX Design / Frontend Development January - December 2018
        </Subtitle>
        <Text>
          TNDS,the new digital school is tailored to and driven by each
          student’s professional goals and personal needs. it’s a place to work
          on both personal and client projects, with the support and guidance of
          industry experts, a network of mentors, a team of facilitators and
          your fellow students.
        </Text>
      </div>

      <div className="sectionWrapper">
        <Title>Work experience</Title>
        <div>
          <SectionTitle>Critical techworks</SectionTitle>
          <Subtitle>Frontdend developer January 2020 - present</Subtitle>
          <Text>
            working on a cross-functional team, involved in multiple projects,
            improving the dashboard used by the merchants and maintaining
            wheadertitleebsites, by Using technologies like react, gatsby,
            redux, graphql, Cypressjs. Working with netlify, netlify cms. I am
            implementing customer data infrastructure (CDI) like Segment which
            allows to collect data and send to analytic tools used.
          </Text>
          <div className="sectionWrapper">
            <SectionTitle>UTRUST</SectionTitle>
            <Subtitle>Frontdend developer October 2018 - January 2020</Subtitle>
            <Text>
              Working on a cross-functional team, involved in multiple projects,
              improving the dashboard used by the merchants and maintaining
              websites, by Using technologies like react, gatsby, redux,
              graphql, Cypressjs. Working with netlify, netlify cms. I am
              implementing customer data infrastructure (CDI) like Segment which
              allows to collect data and send to analytic tools used.
            </Text>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
