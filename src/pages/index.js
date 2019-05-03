import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
const IndexPage = () => (
  <Layout>
    <h1>Barcelona Rocks!!</h1>
    <p>Let's build something great!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
