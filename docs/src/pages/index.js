import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AlphaMessage from '../components/alpha_message'
import SubTitle from '../components/sub_title'
import Card from '../components/card'
import Map from '../components/map'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <AlphaMessage />
    <Card />
    
    <SubTitle />
    <Map />

    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
