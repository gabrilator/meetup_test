import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Archive from "../components/archive"
const IndexPage = () => (
  <Layout>
    <h1>Barcelona Rocks!!</h1>
    <p>You can build it with Gatsby!</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Archive/>

  </Layout>
)

export default IndexPage
