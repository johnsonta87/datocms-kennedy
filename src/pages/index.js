import React from 'react'
import Layout from "../components/layouts/layout"
import NeighbourhoodMap from '../components/Map'

const Home = ({ data: { home } }) => (
  <Layout>
    <div
      dangerouslySetInnerHTML={{
        __html: home.introText,
      }}
    />
    <NeighbourhoodMap />
  </Layout>
)

export default Home

export const query = graphql`
  query HomeQuery {
    home: datoCmsHome {
      introText
    }
  }
`
