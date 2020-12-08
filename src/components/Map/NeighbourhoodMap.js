import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Legend from './Legend'
import MapStyles from '../../constants/MayStyles.json'

const NeighbourhoodMap = props => {

  const data = useStaticQuery(graphql`
    query NeighbourhoodQuery {
          allDatoCmsNeighbourhood(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                id
                title
                category
                location {
                  latitude
                  longitude
                }
              }
            }
          }
    }
  `)

  if (!props.loaded) return <div>Loading...</div>;

  const containerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '100%',
    height: '520px',
    overflow: 'hidden'
  }

  function _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: MapStyles
    })
  }

  return (
    <React.Fragment>
      <Row>
        <Col xs={12} md={4}>
          <Legend data={data.allDatoCmsNeighbourhood} />
        </Col>

        <Col xs={12} md={8}>
          <Map
            google={props.google}
            className="google-map"
            containerStyle={containerStyle}
            initialCenter={{
              lat: 43.717899,
              lng: -79.6582408
            }}
            zoom={11}
            onReady={(mapProps, map) => _mapLoaded(mapProps, map)}>

            {data.allDatoCmsNeighbourhood.edges.map(marker =>
              <Marker key={marker.node.id}
                name={marker.node.title}
                position={marker.node.location && { lat: marker.node.location.latitude, lng: marker.node.location.longitude }}
                title={marker.node.category}
              />
            )}
          </Map>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB4hBdUtPVKF1YWOlu4ywoAty8fwbaep7U'
})(NeighbourhoodMap)
