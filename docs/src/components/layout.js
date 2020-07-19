/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Image from './image'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{padding: '32px'}}>
        <main>{children}</main>
        <footer>
          {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
          <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#C9C9C9', marginLeft: '-32px', marginRight: '-32px', marginBottom: '-32px', alignItems: 'center'}}>
            <div style={{width: 424}}>
              <Image which={3} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <p style={{color: '#282f44', fontWeight: '300', lineHeight: 0.9, fontSize: 32, margin: 0, padding: 0, marginBottom: 32}}>
                Good Shoes <br />
                Better People <br />
                Great Places
              </p>
              <div style={{display: 'flex', flexDirection: 'column', lineHeight: 0.9}}>
                <small>
                  Arifal Shoes © {new Date().getFullYear()}
                </small>
                <small>
                  Built with
                  {` `}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </small>
              </div>
            </div>
            <div style={{width: 424}}>
              <Image which={4} />
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
