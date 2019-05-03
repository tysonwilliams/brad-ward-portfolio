import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PortfolioSubtitle = styled.p`
  color: #777;
`

const ProjectDescription = styled.section`
  margin-top: 32px;
  text-align: left;
`

const ViewProjectButton = styled.button`
  background-color: rebeccapurple;
  color: white;
  border: none;
  padding: 8px 16px;
  box-shadow: 2px 2px 2px 2px #bd92e8;
  cursor: pointer;
`

const PortfolioContent = styled.div`
  text-align: center;
  padding: 8px;
`

const TimeStandsStill = () => (
  <Layout>
    <SEO title="Time Stands Still" />
    <PortfolioContent>
      <h1>Time Stands Still</h1>
      <PortfolioSubtitle>Bristol Riverside Theatre - 2018</PortfolioSubtitle>
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src={'https://player.vimeo.com/video/266027000'}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
      </div>
      <script src="https://player.vimeo.com/api/player.js" />
      <ProjectDescription>
        <p>
          In TIME STANDS STILL, we explore how the impact of war and terrorism
          can change lives forever. In this case, a car bomb has severely
          injured Sarah, and she returns home to recuperate in the Brooklyn loft
          she shares with her boyfriend, James who has also had a similar
          experience. Both characters struggle with physical and mental recovery
          from their trauma, and how their experiences have changed their
          relationship and each other. Can you really get back to “normal” or
          does normal change?
        </p>
        <p>
          Through music and sounds, we were able to help tell this story and
          relate it to the bombs that sadly go off in our lives and the lives of
          those we love. As you listen to this sampling of music and sound,
          consider these questions: What do we value in our lives? Are we
          addicted to chaos and war? How can our places in the world change? How
          do we react to the terror? What does it mean to pick up and move
          forward? Should we reject the comfortable life and to try to make a
          difference for others? What’s the point?
        </p>
        <p>Listen…</p>
      </ProjectDescription>
      <a href="https://www.brtstage.org/2017-2018/time-stands-still/">
        <ViewProjectButton>View Project</ViewProjectButton>
      </a>
    </PortfolioContent>
  </Layout>
)

export default TimeStandsStill
