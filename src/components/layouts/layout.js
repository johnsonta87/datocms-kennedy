/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Hero from './hero'
import Footer from './footer'

import "../../styles/index.scss";

const TemplateWrapper = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            heroImage {
              isImage
              url
              alt
            }
            logo {
              isImage
              url
              alt
            }
            introText
          }
        }
      `}
      render={data => (
        <>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />

          <Hero
            sitename={data.datoCmsSite.globalSeo.siteName}
            logo={data.datoCmsHome.logo}
            image={data.datoCmsHome.heroImage}
            intro={data.datoCmsHome.introText}
          />

          <main>
            {children}
          </main>
          <Footer
            sitename={data.datoCmsSite.globalSeo.siteName} />
        </>
      )}
    />
  );
};

TemplateWrapper.propTypes = {
  // children: PropTypes.object
  children: PropTypes.node.isRequired
};

export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
