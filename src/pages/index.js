import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layouts/layout"
import Map from '../components/Map/Map'
import ContentRow from '../components/ContentRow'
import Register from '../components/Register/Register'

const Home = ({ data: { home, amenities, register } }) => (
  <Layout>
    <ContentRow
      layout='left'
      heading={home.lifestyleHeading}
      content={home.lifestyleContent}
      image={home.lifestyleImage}
    />

    <ContentRow
      layout='right'
      heading={home.amenitiesHeading}
      content={home.amenitiesContent}
      image={home.amenitiesImage}
      amenities={amenities}
    />

    <Map />

    <ContentRow
      layout='right'
      heading={home.communityHeading}
      content={home.communityContent}
      image={home.communityImage} />

    <Register
      heading={register.title}
      content={register.registerContent}
      image={register.image} />

  </Layout>
)

export default Home

export const query = graphql`
  query HomeQuery {
    home:
    datoCmsHome {
      lifestyleHeading
      lifestyleContent
      lifestyleImage {
        isImage
        url
        alt
      }

      amenitiesHeading
      amenitiesContent
      amenitiesImage {
        isImage
        url
        alt
      }

      communityHeading
      communityContent
      communityImage {
        isImage
        url
        alt
      }
    }

    amenities:
    allDatoCmsAmenitiesList {
      edges {
        node {
          id
          title
          order
          image {
            isImage
            url
            alt
          }
        }
      }
    }

    register:
    datoCmsRegister {
      title
      image {
        isImage
        url
        alt
      }
      registerContent
    }
  }
`
