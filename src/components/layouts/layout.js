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
          datoCmsFooter {
            footerLogo {
              isImage
              url
              alt
            }
            footerMainContent
            footerContent
            footerLogoLink
          }
        }
      `}
      render={data => (
        <>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          >
            <html lang="en" />
            <script async data-community-embed-id="5f60fb85-bbe7-4505-8b23-f9a448a2f895" src="https://mgu-embed.community.com/embed.js"></script>
          </HelmetDatoCms>

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
            sitename={data.datoCmsSite.globalSeo.siteName}
            logo={data.datoCmsFooter.footerLogo}
            link={data.datoCmsFooter.footerLogoLink}
            main={data.datoCmsFooter.footerMainContent}
            content={data.datoCmsFooter.footerContent} />
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
